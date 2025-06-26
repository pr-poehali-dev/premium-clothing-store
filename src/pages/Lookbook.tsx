import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Lookbook = () => {
  const looks = [
    {
      id: 1,
      title: "Деловая элегантность",
      description: "Идеальный образ для офиса и деловых встреч",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
    },
    {
      id: 2,
      title: "Casual шик",
      description: "Стильный повседневный лук для городских прогулок",
      image:
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
    },
    {
      id: 3,
      title: "Вечерняя роскошь",
      description: "Изысканный образ для особых случаев",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-playfair text-5xl font-bold mb-6">Лукбук</h1>
            <p className="font-montserrat text-xl text-muted-foreground max-w-2xl mx-auto">
              Вдохновляющие образы от наших стилистов для каждого случая
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {looks.map((look, index) => (
              <div
                key={look.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-lg brutalist-shadow mb-4">
                  <img
                    src={look.image}
                    alt={look.title}
                    className="w-full h-96 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-white/90">
                      <Icon name="Play" size={20} className="mr-2" />
                      Смотреть образ
                    </Button>
                  </div>
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-2">
                  {look.title}
                </h3>
                <p className="font-montserrat text-muted-foreground">
                  {look.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Lookbook;
