
import { Phone, MapPin, Clock, Mail, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer id="контакты" className="bg-georgia-wine text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-georgia-gold">სუფრა</h2>
            <p className="text-white/80 mb-6">
              Аутентичный грузинский ресторан с традиционными блюдами и гостеприимной атмосферой в сердце города.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-georgia-gold hover:text-white hover:bg-georgia-gold/20 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-georgia-gold hover:text-white hover:bg-georgia-gold/20 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6 text-georgia-gold">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-georgia-gold" />
                <div>
                  <p className="font-medium">+7 (999) 123-45-67</p>
                  <p className="text-sm text-white/70">Для бронирования</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-georgia-gold" />
                <div>
                  <p className="font-medium">info@supra-restaurant.ru</p>
                  <p className="text-sm text-white/70">Для вопросов и предложений</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6 text-georgia-gold">Адрес</h3>
            <div className="flex items-start mb-4">
              <MapPin className="h-5 w-5 mr-3 mt-0.5 text-georgia-gold" />
              <div>
                <p className="font-medium">ул. Грузинская, 24</p>
                <p className="text-sm text-white/70">Москва, 123456</p>
              </div>
            </div>
            <div className="flex items-start">
              <Clock className="h-5 w-5 mr-3 mt-0.5 text-georgia-gold" />
              <div>
                <p className="font-medium">Режим работы:</p>
                <p className="text-sm text-white/70">Пн-Чт: 12:00 - 23:00</p>
                <p className="text-sm text-white/70">Пт-Вс: 12:00 - 00:00</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6 text-georgia-gold">Карта</h3>
            <div className="w-full h-48 bg-georgia-wine/50 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }} />
            </div>
          </div>
        </div>
        
        <Separator className="bg-white/20 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2023 სუფრა - Грузинский ресторан. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-white/60 hover:text-georgia-gold">Политика конфиденциальности</a>
            <a href="#" className="text-sm text-white/60 hover:text-georgia-gold">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
