import { ReactNode } from "react";
import { TabBooksProvider } from "../../context/books";
import { ModalProvider } from "../../context/ModalContext";
import { AuthProvider } from "../../context/AuthContext";
import { APIProvider } from "../../context/APIContext";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <AuthProvider>
      <APIProvider>
        <TabBooksProvider>
          <ModalProvider>{children}</ModalProvider>
        </TabBooksProvider>
      </APIProvider>
    </AuthProvider>
  );
}
