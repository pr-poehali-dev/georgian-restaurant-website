import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar, MapPin, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="о-нас" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">О ресторане</h2>
            <p className="mb-6 text-lg">
              <span className="text-2xl font-semibold text-georgia-earth">სუფრა (Супра)</span> – в переводе с грузинского означает
              "праздничное застолье". Это не просто трапеза, а целый ритуал, сопровождаемый тостами, песнями и теплой атмосферой.
            </p>
            <p className="mb-6">
              Наш ресторан создан с любовью к грузинской культуре и кухне. Мы стремимся передать дух настоящего грузинского
              гостеприимства, где каждый гость становится членом семьи.
            </p>
            <p className="mb-8">
              Все блюда готовятся по традиционным рецептам с использованием аутентичных специй и методов приготовления.
              Наши повара родом из разных регионов Грузии, что позволяет нам представить кулинарное разнообразие всей страны.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                <MapPin className="h-8 w-8 text-georgia-wine mb-3" />
                <h3 className="font-semibold mb-1">Адрес</h3>
                <p className="text-sm">ул. Грузинская, 24<br />Москва</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                <Clock className="h-8 w-8 text-georgia-wine mb-3" />
                <h3 className="font-semibold mb-1">Часы работы</h3>
                <p className="text-sm">Пн-Вс: 12:00 – 00:00</p>
              </div>
              
              <div className="flex flex-col items-center text-center p-4 bg-muted rounded-lg">
                <Calendar className="h-8 w-8 text-georgia-wine mb-3" />
                <h3 className="font-semibold mb-1">Бронирование</h3>
                <p className="text-sm">+7 (495) 123-45-67</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-4 border-l-4 border-georgia-wine"></div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-4 border-r-4 border-georgia-wine"></div>
            
            <AspectRatio ratio={4/5} className="bg-muted rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop" 
                alt="Интерьер ресторана Супра" 
                className="object-cover w-full h-full rounded-lg"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
