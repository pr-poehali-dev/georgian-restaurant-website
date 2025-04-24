
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="контакты" className="bg-georgia-wine text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              სუფრა
              <span className="text-sm ml-2 font-normal text-georgia-gold">Supra</span>
            </h3>
            <p className="mb-4 text-white/80">
              Аутентичный грузинский ресторан, где каждое блюдо приготовлено с любовью и уважением к традициям.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-georgia-gold" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-georgia-gold" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-georgia-gold" />
                <span>ул. Пушкина, д. 10, Москва</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 shrink-0 text-georgia-gold" />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 shrink-0 text-georgia-gold" />
                <span>info@supra-restaurant.ru</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 shrink-0 text-georgia-gold" />
                <div>
                  <p>Пн-Чт: 12:00 - 23:00</p>
                  <p>Пт-Вс: 12:00 - 00:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              {["Главная", "Меню", "О нас", "Галерея", "Контакты", "Доставка", "Бронирование"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-georgia-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Подпишитесь на новости</h3>
            <p className="mb-4 text-white/80">
              Получайте специальные предложения и приглашения на тематические вечера
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Ваш e-mail" 
                className="bg-white/20 border-0 focus-visible:ring-georgia-gold text-white placeholder:text-white/60"
              />
              <Button className="bg-georgia-gold hover:bg-georgia-gold/90 text-georgia-wine">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} სუფრა (Супра). Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0 text-sm text-white/60">
            <a href="#" className="hover:text-white">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
