import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import CoffeeCup3D from "./CoffeeCup3D";
import heroCoffee from "@/assets/hero-coffee.jpg";

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById("menu");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroCoffee})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />

      <div className="container relative z-10 px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center md:text-left space-y-6 animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Crafted with
              <span className="block text-primary">Passion</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
              Every cup tells a story. Discover the art of exceptional coffee.
            </p>
            <Button
              onClick={scrollToMenu}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore Our Menu
            </Button>
          </div>

          {/* Right content - 3D Coffee Cup */}
          <div className="h-[400px] md:h-[600px] relative">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 45 }}
              className="animate-scale-in"
            >
              <CoffeeCup3D />
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
              />
            </Canvas>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                Drag to rotate • Interactive 3D
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
