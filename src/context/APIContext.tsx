/* eslint-disable react/jsx-no-constructed-context-values */
import { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import { Cookies } from "react-cookie";

import { setupAPIClient } from "../services/api";
import { useAuth } from "./AuthContext";

type ApiContextData = {
  restAPI: () => AxiosInstance;
};

type APIProviderProps = {
  children: ReactNode;
};

type RefreshTokenResponse = {
  res: {
    token: string;
    refreshToken: string;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let failedRequestsQueue: any[] = [];
// Const para utilizar a APIContext
export const APIContext = createContext({} as ApiContextData);

export function APIProvider({ children }: APIProviderProps): JSX.Element {
  // Const refreshToken
  const [isRefreshing, setRefreshing] = useState(false);
  // Const para fazer logout
  const { logout } = useAuth();
  // função de conexão com api que intercepta a requisição e devolve um refresh token caso o token esteja expirado.
  const restAPI = () => {
    const api = setupAPIClient();
    const cookies = new Cookies();

    api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error: AxiosError) => {
        const errorResponseData = error.response?.data;

        if (
          errorResponseData.error &&
          errorResponseData.error.code &&
          errorResponseData.error.code === "auth/id-token-expired"
        ) {
          const refreshToken = cookies.get("refresh_token");
          const originalConfig = error.config;

          if (!isRefreshing) {
            setRefreshing(true);
            api
              .post<
                { refreshToken: string },
                AxiosResponse<RefreshTokenResponse>
              >("refreshToken", {
                refreshToken,
              })

              .then((response) => {
                const { res } = response.data;

                cookies.set("access_token", res.token, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                });

                cookies.set("refresh_token", res.refreshToken, {
                  maxAge: 60 * 60 * 24 * 30, // 30 days
                  path: "/",
                });

                api.defaults.headers.common.Authorization = `Bearer ${res.token}`;
                failedRequestsQueue.forEach((request) =>
                  request.resolve(res.token)
                );
                failedRequestsQueue = [];
              })

              .catch((reason) => {
                failedRequestsQueue.forEach((request) =>
                  request.reject(reason)
                );
                failedRequestsQueue = [];
                logout();
              })
              .finally(() => {
                setRefreshing(false);
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              resolve: (token: string) => {
                if (originalConfig.headers)
                  originalConfig.headers.Authorization = `Bearer ${token}`;

                resolve(api(originalConfig));
              },
              reject: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        }
        return Promise.reject(error);
      }
    );

    return api;
  };

  return (
    <APIContext.Provider
      value={{
        restAPI,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI(): ApiContextData {
  const context = useContext(APIContext);

  return context;
}
