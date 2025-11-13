import { Coffee, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8" />
            <span className="text-2xl font-bold">RynShit Co.</span>
          </div>
          
          <p className="text-center text-primary-foreground/80 max-w-md">
            Crafting exceptional coffee experiences, one cup at a time.
          </p>

          <div className="flex items-center gap-2 text-sm">
            <span>© 2025 RynShit Co. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 fill-current" /> and coffee
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
