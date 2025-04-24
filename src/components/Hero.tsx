import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden georgian-pattern">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1470&auto=format&fit=crop')", 
          filter: "brightness(0.6)"
        }}
      />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center py-20 lg:py-0">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in">
            სუფრა <span className="block">Традиции грузинского гостеприимства</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 animate-fade-in">
            Аутентичная грузинская кухня с богатыми традициями и неповторимыми вкусами
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button className="bg-georgia-wine hover:bg-georgia-earth text-white py-6 px-8 text-lg w-full sm:w-auto">
              Меню ресторана
            </Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-6 px-8 text-lg w-full sm:w-auto">
              Забронировать стол
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
