import { Menu } from "lucide-react";
import { Button } from "../ui/button";

function Header() {
  return (
    <>
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <img src="/logo.svg" alt="logo-main" className="w-[120px]" />

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary"
                    href="#"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary"
                    href="#"
                  >
                    Explore
                  </a>
                </li>

                <li>
                  <a
                    className="text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary"
                    href="#"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Button className="block">Login</Button>

                <Button variant={"secondary"} className="hidden sm:block">
                  Register
                </Button>
              </div>

              <Button size={"icon"} variant={"secondary"}>
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
