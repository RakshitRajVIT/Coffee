import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const ContactInfo = ({
  icon: Icon,
  title,
  details,
}: {
  icon: any;
  title: string;
  details: string[];
}) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
      <CardContent className="p-8 text-center space-y-4">
        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <div className="space-y-1">
          {details.map((detail, index) => (
            <p key={index} className="text-muted-foreground">
              {detail}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of flavor and atmosphere
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <ContactInfo
            icon={MapPin}
            title="Location"
            details={["VIT Bhopal, Kothri Kalan", "Sehore, Madhya Pradesh"]}
          />
          <ContactInfo
            icon={Clock}
            title="Hours"
            details={["Mon-Fri: 7AM - 8PM", "Sat-Sun: 8AM - 9PM"]}
          />
          <ContactInfo
            icon={Phone}
            title="Phone"
            details={["9473309705", "8287225900"]}
          />
          <ContactInfo
            icon={Mail}
            title="Email"
            details={["rynshit.co@gmail.com", "Follow us on social"]}
          />
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-border rounded-lg p-8 shadow-lg">
            <p className="text-lg text-foreground mb-2">
              ☕ <span className="font-semibold">First-time visitor?</span>
            </p>
            <p className="text-muted-foreground">
              Show this message for a{" "}
              <span className="text-accent font-bold">10% discount</span> on your first order!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
