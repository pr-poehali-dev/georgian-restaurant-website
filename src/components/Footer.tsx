import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-georgia-wine text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">სუფრა</h3>
            <p className="mb-4 text-gray-300">
              Аутентичная грузинская кухня с атмосферой традиционного гостеприимства в самом сердце города.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-georgia-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-georgia-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-georgia-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-300">
              <li>ул. Грузинская, 24, Москва</li>
              <li>+7 (495) 123-45-67</li>
              <li>info@suprarestaurant.ru</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Часы работы</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Понедельник - Четверг: 12:00 – 23:00</li>
              <li>Пятница - Суббота: 12:00 – 00:00</li>
              <li>Воскресенье: 12:00 – 22:00</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-georgia-gold transition-colors">О нас</a></li>
              <li><a href="#" className="text-gray-300 hover:text-georgia-gold transition-colors">Меню</a></li>
              <li><a href="#" className="text-gray-300 hover:text-georgia-gold transition-colors">Бронирование</a></li>
              <li><a href="#" className="text-gray-300 hover:text-georgia-gold transition-colors">Галерея</a></li>
              <li><a href="#" className="text-gray-300 hover:text-georgia-gold transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-georgia-earth/30 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} სუფრა (Супра). Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
