import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              MINIMAL WARDROBE
            </h3>
            <p className="font-montserrat text-muted-foreground mb-6 max-w-md">
              Премиальная одежда для тех, кто ценит качество, стиль и
              индивидуальность. Каждая вещь создана с любовью к деталям.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="brutalist-shadow"
              >
                <Icon name="Instagram" size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="brutalist-shadow"
              >
                <Icon name="Facebook" size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="brutalist-shadow"
              >
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Навигация
            </h4>
            <ul className="space-y-2 font-montserrat text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Коллекции
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Размерная сетка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Доставка
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">
              Поддержка
            </h4>
            <ul className="space-y-2 font-montserrat text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Возврат
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Уход за изделиями
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-playfair text-2xl font-semibold mb-2">
                Будьте в курсе новинок
              </h4>
              <p className="font-montserrat text-muted-foreground">
                Подпишитесь на рассылку и получайте эксклюзивные предложения
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 brutalist-shadow-accent px-6">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-montserrat">
          <p>© 2024 Minimal Wardrobe. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
