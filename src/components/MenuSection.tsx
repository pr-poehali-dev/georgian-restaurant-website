
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  popular?: boolean;
  georgianName?: string;
};

type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

const menuCategories: MenuCategory[] = [
  {
    id: "khachapuri",
    name: "Хачапури",
    items: [
      {
        id: 1,
        name: "Хачапури по-аджарски",
        georgianName: "აჭარული ხაჭაპური",
        description: "Лодочка из теста с сыром сулугуни, яйцом и маслом",
        price: 450,
        popular: true,
      },
      {
        id: 2,
        name: "Хачапури по-имеретински",
        georgianName: "იმერული ხაჭაპური",
        description: "Круглый плоский пирог с начинкой из сыра сулугуни",
        price: 380,
      },
      {
        id: 3,
        name: "Хачапури по-мегрельски",
        georgianName: "მეგრული ხაჭაპური",
        description: "Круглый пирог с сыром внутри и сверху",
        price: 400,
      },
    ],
  },
  {
    id: "khinkali",
    name: "Хинкали",
    items: [
      {
        id: 4,
        name: "Хинкали с бараниной",
        georgianName: "ხინკალი ცხვრის ხორცით",
        description: "Сочные хинкали с мясом баранины и зеленью",
        price: 95,
        popular: true,
      },
      {
        id: 5,
        name: "Хинкали с говядиной и свининой",
        georgianName: "ხინკალი საქონლის ხორცით",
        description: "Классические хинкали с сочной мясной начинкой",
        price: 85,
      },
      {
        id: 6,
        name: "Хинкали с грибами",
        georgianName: "ხინკალი სოკოთი",
        description: "Хинкали с начинкой из шампиньонов и зелени",
        price: 80,
      },
    ],
  },
  {
    id: "mtsvadi",
    name: "Мясные блюда",
    items: [
      {
        id: 7,
        name: "Мцвади из свинины",
        georgianName: "ღორის მწვადი",
        description: "Шашлык из свинины на мангале с луком и гранатом",
        price: 550,
        popular: true,
      },
      {
        id: 8,
        name: "Чакапули",
        georgianName: "ჩაქაფული",
        description: "Тушеная баранина с тархуном, эстрагоном и алычой",
        price: 620,
      },
      {
        id: 9,
        name: "Оджахури",
        georgianName: "ოჯახური",
        description: "Жареное мясо с картофелем и специями",
        price: 480,
      },
    ],
  },
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("khachapuri");

  return (
    <section id="меню" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">
          Наше меню
          <span className="block text-sm mt-2 text-muted-foreground">ჩვენი მენიუ</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-muted-foreground">
          Попробуйте настоящие грузинские блюда, приготовленные по традиционным рецептам 
          из свежайших продуктов.
        </p>

        <Tabs defaultValue="khachapuri" value={activeCategory} onValueChange={setActiveCategory} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-base py-3"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4">
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((item) => (
                  <Card key={item.id} className={`overflow-hidden ${item.popular ? 'border-2 border-georgia-gold' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{item.name}</h3>
                          {item.georgianName && (
                            <p className="text-sm text-muted-foreground font-nino">{item.georgianName}</p>
                          )}
                        </div>
                        <div className="text-lg font-semibold text-georgia-wine">
                          {item.price} ₽
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                      {item.popular && (
                        <div className="mt-3">
                          <span className="inline-block bg-georgia-gold/10 text-georgia-wine text-xs px-2 py-1 rounded">
                            Популярное блюдо
                          </span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
