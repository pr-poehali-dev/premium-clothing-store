import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group product-card bg-card rounded-lg overflow-hidden brutalist-shadow hover:brutalist-shadow-accent transition-all duration-300">
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            <Button
              size="sm"
              className="flex-1 bg-white/90 text-black hover:bg-white"
            >
              <Icon name="Eye" size={16} className="mr-2" />
              Быстрый просмотр
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-white/10 border-white/30 text-white"
            >
              <Icon name="Heart" size={16} />
            </Button>
          </div>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-secondary text-secondary-foreground px-3 py-1 text-xs font-montserrat font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="font-montserrat text-2xl font-bold">
            {product.price.toLocaleString("ru-RU")} ₽
          </span>
          <Button size="sm" className="bg-accent hover:bg-accent/90">
            <Icon name="ShoppingBag" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
