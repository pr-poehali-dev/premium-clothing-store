import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-muted via-background to-secondary/20 animate-parallax"></div>
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="mb-8">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Минималистичная
            <span className="block text-secondary">Элегантность</span>
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Откройте для себя коллекцию premium одежды, где каждая деталь
            продумана до совершенства
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link to="/catalog">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground brutalist-shadow-accent px-8 py-4 text-lg font-montserrat font-medium"
            >
              Исследовать коллекцию
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </Link>

          <Link to="/lookbook">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary brutalist-shadow px-8 py-4 text-lg font-montserrat font-medium"
            >
              Смотреть лукбук
              <Icon name="Play" size={18} className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rotate-12 animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/40 -rotate-12 animate-bounce hidden lg:block"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
