import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Классическая белая рубашка",
      price: 4500,
      quantity: 1,
      size: "M",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Деловые брюки navy",
      price: 6800,
      quantity: 2,
      size: "L",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Корзина</h1>
          <p className="text-gray-600">{cartItems.length} товара в корзине</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 py-6 border-b border-gray-200 last:border-b-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">Размер: {item.size}</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">
                      {item.price.toLocaleString()} ₽
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Minus" size={16} />
                    </Button>
                    <Input
                      type="number"
                      value={item.quantity}
                      className="w-16 text-center"
                      min="1"
                    />
                    <Button variant="outline" size="sm">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-500 hover:text-red-700"
                  >
                    <Icon name="Trash2" size={18} />
                  </Button>
                </div>
              ))}

              <div className="mt-6 pt-6 border-t">
                <div className="flex items-center space-x-2">
                  <Input placeholder="Промокод" className="flex-1" />
                  <Button variant="outline">Применить</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Итого к оплате</h2>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Товары ({cartItems.length})</span>
                  <span>{subtotal.toLocaleString()} ₽</span>
                </div>

                <div className="flex justify-between">
                  <span>Доставка</span>
                  <span>{shipping.toLocaleString()} ₽</span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Итого</span>
                  <span>{total.toLocaleString()} ₽</span>
                </div>
              </div>

              <Button className="w-full mt-6" size="lg" asChild>
                <Link to="/checkout">
                  Оформить заказ
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Link>
              </Button>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Truck" size={16} />
                  <span>Бесплатная доставка от 5000 ₽</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="RotateCcw" size={16} />
                  <span>Возврат в течение 30 дней</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link to="/">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Продолжить покупки
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
