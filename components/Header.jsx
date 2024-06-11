import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-black dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Rohan<span className="text-light dark:text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <ThemeToggle />
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
