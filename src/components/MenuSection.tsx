
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image?: string;
  popular?: boolean;
};

type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    id: "холодные-закуски",
    label: "Холодные закуски",
    items: [
      {
        id: 1,
        name: "Пхали из шпината",
        description: "Традиционная грузинская закуска из шпината с грецкими орехами и специями",
        price: "380 ₽",
        popular: true
      },
      {
        id: 2,
        name: "Баклажаны с орехами",
        description: "Обжаренные баклажаны с ореховой пастой, гранатом и зеленью",
        price: "420 ₽"
      },
      {
        id: 3,
        name: "Ассорти сыров",
        description: "Сулугуни, имеретинский, копченый сулугуни, надуги с мятой",
        price: "620 ₽"
      }
    ]
  },
  {
    id: "горячие-закуски",
    label: "Горячие закуски",
    items: [
      {
        id: 4,
        name: "Хачапури по-аджарски",
        description: "Открытый пирог в форме лодочки с сыром сулугуни и яйцом",
        price: "490 ₽",
        popular: true
      },
      {
        id: 5,
        name: "Лобио в горшочке",
        description: "Тушеная красная фасоль с грузинскими специями, подается с мчади",
        price: "420 ₽"
      },
      {
        id: 6,
        name: "Хинкали с бараниной",
        description: "Сочные грузинские пельмени с бараниной и зеленью (5 шт)",
        price: "590 ₽"
      }
    ]
  },
  {
    id: "основные-блюда",
    label: "Основные блюда",
    items: [
      {
        id: 7,
        name: "Чакапули из ягненка",
        description: "Нежное мясо ягненка, тушеное в белом вине с тархуном и зеленью",
        price: "790 ₽"
      },
      {
        id: 8,
        name: "Чахохбили из курицы",
        description: "Тушеная курица с томатами, луком и ароматными специями",
        price: "650 ₽"
      },
      {
        id: 9,
        name: "Оджахури со свининой",
        description: "Жаркое из свинины с картофелем и ароматными специями",
        price: "720 ₽",
        popular: true
      }
    ]
  }
];

const MenuSection = () => {
  return (
    <section id="меню" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">Наше меню</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Насладитесь подлинными вкусами Грузии, приготовленными по традиционным рецептам нашим шеф-поваром
        </p>

        <Tabs defaultValue="холодные-закуски" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            {menuData.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {menuData.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <Card key={item.id} className={`overflow-hidden hover:shadow-md transition-shadow ${item.popular ? 'border-georgia-gold border-2' : ''}`}>
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 bg-muted h-40 md:h-auto">
                          <div 
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.image || '/placeholder.svg'})` }}
                          />
                        </div>
                        <div className="w-full md:w-2/3 p-5">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold">{item.name}</h3>
                            <span className="text-georgia-wine font-bold">{item.price}</span>
                          </div>
                          <p className="text-muted-foreground text-sm">{item.description}</p>
                          {item.popular && (
                            <div className="mt-3">
                              <span className="text-xs inline-block bg-georgia-gold/20 text-georgia-wine px-2 py-1 rounded-full">
                                Популярное блюдо
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
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
