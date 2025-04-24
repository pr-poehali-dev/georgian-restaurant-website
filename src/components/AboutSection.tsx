
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="о-нас" className="py-20 relative overflow-hidden">
      {/* Georgian pattern background */}
      <div className="absolute inset-0 georgian-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">
              О ресторане
              <span className="block text-sm mt-2 text-muted-foreground">ჩვენს შესახებ</span>
            </h2>
            
            <p className="mb-6 text-lg">
              Ресторан «სუფრა» (Супра) — это место, где вы можете насладиться настоящей грузинской кухней и 
              гостеприимством в самом сердце города.
            </p>
            
            <p className="mb-6">
              Наш шеф-повар родом из Кахетии, обладает более чем 20-летним опытом и хранит 
              секреты рецептов, передающихся из поколения в поколение. Мы используем только 
              аутентичные специи, привезенные прямо из Грузии, и лучшие местные продукты.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-georgia-wine/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-georgia-wine">15+</p>
                <p className="text-sm">лет опыта</p>
              </div>
              <div className="bg-georgia-earth/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-georgia-earth">50+</p>
                <p className="text-sm">блюд в меню</p>
              </div>
              <div className="bg-georgia-gold/10 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-georgia-gold">100%</p>
                <p className="text-sm">натуральные продукты</p>
              </div>
            </div>
            
            <div className="space-x-4">
              <Button className="bg-georgia-wine hover:bg-georgia-wine/90">Наша история</Button>
              <Button variant="outline" className="border-georgia-wine text-georgia-wine hover:bg-georgia-wine/10">
                Галерея
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-ratio-4/3 rounded-lg overflow-hidden shadow-xl relative z-10">
              <img
                src="/placeholder.svg"
                alt="Интерьер ресторана грузинской кухни"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-georgia-gold/20 rounded-lg -z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-georgia-wine/20 rounded-lg -z-0"></div>
            
            {/* Quote */}
            <div className="absolute -bottom-8 right-8 bg-white dark:bg-georgia-wine p-4 rounded-lg shadow-lg max-w-xs z-20">
              <p className="italic text-sm mb-2">
                "Грузинская кухня — это не просто еда, это проявление любви, гостеприимства и традиций."
              </p>
              <p className="text-right text-xs font-semibold">— Шеф-повар Георгий</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
