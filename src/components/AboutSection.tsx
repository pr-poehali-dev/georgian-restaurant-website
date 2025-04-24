
import { Card, CardContent } from "@/components/ui/card";
import { Wine, UtensilsCrossed, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="о нас" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="section-heading mb-6">О ресторане სუფრა</h2>
            <p className="mb-6 text-lg">
              Супра — традиционное грузинское застолье, которое объединяет друзей и семью за одним столом.
              Наш ресторан стремится передать дух настоящего грузинского гостеприимства, 
              сочетая аутентичные рецепты и современный подход.
            </p>
            
            <p className="mb-8">
              Мы привозим специи и ингредиенты напрямую из Грузии, а наш шеф-повар обучался кулинарному искусству 
              в лучших ресторанах Тбилиси. Каждое блюдо — это история, рассказанная через вкус и аромат.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Wine className="h-8 w-8 text-georgia-wine" />,
                  title: "Винная карта",
                  desc: "Авторская подборка грузинских вин из лучших виноделен"
                },
                {
                  icon: <UtensilsCrossed className="h-8 w-8 text-georgia-wine" />,
                  title: "Оригинальные рецепты",
                  desc: "Блюда готовятся по традиционным семейным рецептам"
                },
                {
                  icon: <Award className="h-8 w-8 text-georgia-wine" />,
                  title: "Высокое качество",
                  desc: "Свежие продукты и строгий контроль на всех этапах"
                }
              ].map((feature, idx) => (
                <Card key={idx} className="border-none shadow-none bg-muted/50">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Интерьер ресторана" 
                className="w-full h-80 object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Приготовление хачапури" 
                className="w-full h-80 object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Традиционное вино" 
                className="w-full h-80 object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="Грузинские блюда" 
                className="w-full h-80 object-cover transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
