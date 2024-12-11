import DarkModeToggle from "../ui/DarkModeToggle";
import Logo from "../ui/Logo";

function Header() {
  return (
    <header className="flex w-full items-center justify-between p-10">
      <Logo />
      <DarkModeToggle />
    </header>
  );
}

export default Header;
