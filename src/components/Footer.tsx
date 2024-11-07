import { ReactNode } from "react";

function Footer({ children }: { children: ReactNode }) {
  return (
    <footer className="flex items-center justify-between">{children}</footer>
  );
}

export default Footer;
