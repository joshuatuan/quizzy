import { ReactNode } from "react";

function Main({ children }: { children: ReactNode }) {
  return (
    <main className="w-full max-w-4xl flex-grow p-10 md:p-0">{children}</main>
  );
}

export default Main;
