import Logo from "@/components/ui/Logo";
import Darkmode from "@/components/ui/Darkmode";
import Menu from "@/components/ui/Menu";

export default function Header() {
  return (
    <header className="flex items-center h-15 px-5">
      <Logo />
      <div className="ml-auto">
        <Darkmode className="mr-2" />
        <Menu />
      </div>
    </header>
  );
}
