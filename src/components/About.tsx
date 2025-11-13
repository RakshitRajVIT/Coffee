import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import barista from "@/assets/barista.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";

const AboutCard = ({
  image,
  title,
  description,
  index,
}: {
  image: string;
  title: string;
  description: string;
  index: number;
}) => {
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
      className={`group overflow-hidden border-border hover:shadow-xl transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CardContent className="p-0">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const About = () => {
  const cards = [
    {
      image: coffeeBeans,
      title: "Quality Beans",
      description:
        "We source the finest beans from sustainable farms around the world, ensuring every cup is a masterpiece.",
    },
    {
      image: barista,
      title: "Expert Baristas",
      description:
        "Our skilled artisans craft each drink with precision and care, bringing out the unique flavors in every blend.",
    },
    {
      image: cafeInterior,
      title: "Cozy Atmosphere",
      description:
        "A warm, inviting space where friends gather, ideas flourish, and memories are made over perfect coffee.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passion for excellence in every cup, every day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <AboutCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
