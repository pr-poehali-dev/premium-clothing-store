import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: "Весна-Лето 2024",
      description: "Легкость и воздушность в каждой детали",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=600&fit=crop",
      itemCount: 24,
    },
    {
      id: 2,
      name: "Осень-Зима 2023",
      description: "Тепло и уют в премиальном исполнении",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
      itemCount: 32,
    },
    {
      id: 3,
      name: "Капсульная коллекция",
      description: "Базовые вещи для идеального гардероба",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=600&fit=crop",
      itemCount: 18,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl font-bold mb-6">Коллекции</h1>
            <p className="font-montserrat text-xl text-muted-foreground max-w-2xl mx-auto">
              Тщательно отобранные коллекции для каждого сезона и стиля жизни
            </p>
          </div>

          <div className="space-y-16">
            {collections.map((collection, index) => (
              <div
                key={collection.id}
                className={`flex flex-col lg:flex-row items-center gap-12 animate-slide-up ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="lg:w-1/2">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-96 object-cover rounded-lg brutalist-shadow"
                  />
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h2 className="font-playfair text-4xl font-bold mb-4">
                    {collection.name}
                  </h2>
                  <p className="font-montserrat text-xl text-muted-foreground mb-6">
                    {collection.description}
                  </p>
                  <p className="font-montserrat text-sm text-muted-foreground mb-8">
                    {collection.itemCount} предметов в коллекции
                  </p>
                  <Link to="/catalog">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 brutalist-shadow-accent px-8 py-4"
                    >
                      Изучить коллекцию
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
