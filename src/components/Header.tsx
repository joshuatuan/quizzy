import DarkModeToggle from "./DarkModeToggle";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex w-full items-center justify-between p-10">
      <Logo />
      <DarkModeToggle />
    </header>
  );
}

export default Header;
