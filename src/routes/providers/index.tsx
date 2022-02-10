import { ReactNode } from "react";
import { ModalProvider } from "../../context/ModalContext";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps): JSX.Element {
  return <ModalProvider>{children}</ModalProvider>;
}
