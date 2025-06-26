import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Catalog = () => {
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
    {
      id: 5,
      name: "Кардиган из альпаки Soft",
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1621184457979-c7848295f7c8?w=400&h=600&fit=crop",
      category: "Кардиганы",
    },
    {
      id: 6,
      name: "Юбка-карандаш Grace",
      price: 22000,
      image:
        "https://images.unsplash.com/photo-1583496661160-fb5886a13804?w=400&h=600&fit=crop",
      category: "Юбки",
    },
  ];

  const categories = [
    "Все",
    "Блузы",
    "Платья",
    "Брюки",
    "Юбки",
    "Кардиганы",
    "Верхняя одежда",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl font-bold mb-6">Каталог</h1>
            <p className="font-montserrat text-xl text-muted-foreground max-w-2xl mx-auto">
              Премиальная коллекция для создания идеального гардероба
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="brutalist-shadow hover:bg-accent hover:text-accent-foreground"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Найдено товаров: {products.length}
              </p>
              <div className="flex items-center gap-4">
                <span className="text-sm">Сортировать:</span>
                <Button variant="ghost" className="text-sm">
                  По цене <Icon name="ChevronDown" size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
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

          {/* Load More */}
          <div className="text-center mb-16">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary brutalist-shadow px-8 py-4"
            >
              Загрузить еще
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
