import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Хачапури по-аджарски",
    description: "Лодочка из теста с сыром сулугуни, яйцом и сливочным маслом",
    price: 520,
    category: "starters"
  },
  {
    id: 2,
    name: "Хинкали с бараниной",
    description: "Традиционные грузинские пельмени с сочной начинкой из баранины и зелени",
    price: 480,
    category: "starters"
  },
  {
    id: 3,
    name: "Пхали из шпината",
    description: "Традиционная грузинская закуска из шпината с грецкими орехами и специями",
    price: 390,
    category: "starters"
  },
  {
    id: 4,
    name: "Чакапули из ягненка",
    description: "Нежное мясо ягненка, тушенное с тархуном, зеленью и специями",
    price: 820,
    category: "mains"
  },
  {
    id: 5,
    name: "Чахохбили из курицы",
    description: "Традиционное блюдо из курицы, тушенной с помидорами, луком и специями",
    price: 690,
    category: "mains"
  },
  {
    id: 6,
    name: "Оджахури",
    description: "Жаркое из свинины с картофелем, луком и ароматными специями",
    price: 750,
    category: "mains"
  },
  {
    id: 7,
    name: "Чурчхела",
    description: "Традиционная грузинская сладость из виноградного сока и орехов",
    price: 290,
    category: "desserts"
  },
  {
    id: 8,
    name: "Пеламуши",
    description: "Десерт из виноградного сока с кукурузной мукой и грецкими орехами",
    price: 320,
    category: "desserts"
  },
  {
    id: 9,
    name: "Ткемали",
    description: "Традиционный соус из алычи с чесноком и специями",
    price: 160,
    category: "sauces"
  }
];

const MenuSection = () => {
  const categories = [
    { id: "starters", name: "Закуски" },
    { id: "mains", name: "Основные блюда" },
    { id: "desserts", name: "Десерты" },
    { id: "sauces", name: "Соусы" }
  ];

  return (
    <section id="меню" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">Меню</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Наше меню основано на традиционных грузинских рецептах, передаваемых из поколения в поколение. 
          Мы используем только свежие ингредиенты и аутентичные специи.
        </p>

        <Tabs defaultValue="starters" className="max-w-4xl mx-auto">
          <TabsList className="mb-8 flex justify-center w-full flex-wrap">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="px-6 py-2 text-base"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="space-y-6 animate-fade-in"
            >
              {menuItems
                .filter(item => item.category === category.id)
                .map(item => (
                  <Card key={item.id} className="overflow-hidden border-l-4 border-l-georgia-wine">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-georgia-wine mb-2">{item.name}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                        <div className="text-xl font-semibold text-georgia-earth whitespace-nowrap ml-4">
                          {item.price} ₽
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default MenuSection;
