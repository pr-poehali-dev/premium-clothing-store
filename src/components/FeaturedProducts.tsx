import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Шелковая блуза Amour",
      price: 24500,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      category: "Блузы",
    },
    {
      id: 2,
      name: "Кашемировое пальто Luna",
      price: 89000,
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=600&fit=crop",
      category: "Верхняя одежда",
    },
    {
      id: 3,
      name: "Платье-миди Ethereal",
      price: 32000,
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop",
      category: "Платья",
    },
    {
      id: 4,
      name: "Брюки прямого кроя Nova",
      price: 18500,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
      category: "Брюки",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-5xl font-bold mb-6">
            Избранные модели
          </h2>
          <p className="font-montserrat text-xl text-muted-foreground max-w-2xl mx-auto">
            Каждая вещь в нашей коллекции — это произведение искусства,
            созданное с вниманием к деталям
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/catalog">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary brutalist-shadow px-8 py-4 text-lg font-montserrat font-medium"
            >
              Смотреть все модели
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
