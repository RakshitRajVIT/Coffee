import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">RynShit Co.</h1>
          </div>
          
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("menu")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Menu
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
