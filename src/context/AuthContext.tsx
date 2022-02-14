/* eslint-disable react/function-component-definition */
import { AxiosResponse } from "axios";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { getStorageValue } from "../hooks/useLocalStorage";
import useToast from "../hooks/useToast";
import { api } from "../services/apiClient";

// Propridades do AuthProvider
type AuthProviderProps = {
  children: ReactNode;
};

// Propridades da Requisição de Login
export type LoginRequest = {
  email: string;
  password: string;
};

// Propridades da Resposta de Login
type LoginResponse = {
  idToken: {
    token: string;
    refreshToken: string;
  };
};

// Propriedades que devem ser retornadas pelo contexto de autenticação
export type AuthContextData = {
  isAuthenticated: boolean;
  login(data: LoginRequest): Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  // Const para utilizar os cookies do token
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);
  // Const para usar a autenticação do token
  const [isAuthenticated, setAuthenticated] = useState(!!cookies.access_token);
  // Conts para navegar entre as paginas
  const navigate = useNavigate();
  // Const para usar toast de sucesso e erro
  const { error, success } = useToast();

  // efetua login
  const login = async ({ email, password }: LoginRequest) => {
   
    api
      .post<LoginRequest, AxiosResponse<LoginResponse>>("/auth/sign-in", {
        email,
        password,
      })
      .then((response) => {
        const { authorization } = response.headers;

        // estando autenticado, o usuário é direcionado à página home
        navigate("/home");

        // salva o token nos cookies da aplicação
        setCookie("access_token", authorization, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
        });

        // salva o refresh token nos cookies da aplicação
        setCookie("refresh_token", authorization, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
        });

        api.defaults.headers.common.Authorization = `Bearer ${authorization}`;

        setAuthenticated(true);
      })
      .catch((err) => {
        setAuthenticated(false);
        error(err.response.data.message);
      });
  };

  // função de logout
  const logout = useCallback(() => {
    const cookie = new Cookies();

    // remove os cookies de token e refresh token
    cookie.remove("access_token");
    cookie.remove("refresh_token");

    // define como falso a constante de autenticação
    setAuthenticated(false);
    navigate("/");
  }, []);

  const authProviderProps = useMemo(() => {
    return {
      isAuthenticated,
      login,
      logout,
    };
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={authProviderProps}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
