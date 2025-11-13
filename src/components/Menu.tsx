import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import coffeeCollection from "@/assets/coffee-collection.jpg";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
}

const MenuItemCard = ({ item, index }: { item: MenuItem; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Card
      ref={cardRef}
      className={`group hover:shadow-xl transition-all duration-300 cursor-pointer border-border hover:border-primary/50 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              {item.popular && (
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  Popular
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
          <span className="text-xl font-bold text-accent shrink-0">
            {item.price}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

const Menu = () => {
  const menuItems: MenuItem[] = [
    {
      name: "Classic Espresso",
      price: "$3.50",
      description: "Rich, bold, and perfectly extracted",
    },
    {
      name: "Cappuccino",
      price: "$4.50",
      description: "Velvety foam with espresso perfection",
      popular: true,
    },
    {
      name: "Latte Art Special",
      price: "$5.00",
      description: "Silky smooth with beautiful designs",
      popular: true,
    },
    {
      name: "Cold Brew",
      price: "$4.00",
      description: "Smooth, refreshing, perfectly chilled",
    },
    {
      name: "Mocha Delight",
      price: "$5.50",
      description: "Rich chocolate meets premium espresso",
    },
    {
      name: "RynShit Special Macchiato",
      price: "$5.50",
      description: "Sweet caramel with espresso layers",
      popular: true,
    },
  ];

  return (
    <section id="menu" className="py-20 relative overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${coffeeCollection})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted beverages made with love and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <MenuItemCard key={item.name} item={item} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All drinks are available in multiple sizes.{" "}
            <span className="text-primary font-semibold">Ask your barista!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
