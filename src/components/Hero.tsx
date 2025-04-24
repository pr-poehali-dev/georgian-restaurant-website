
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 georgian-pattern">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/placeholder.svg')",
          backgroundSize: "cover",
          filter: "brightness(40%)"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-[1]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-georgia-cream">
            <span className="block text-georgia-gold">სუფრა</span>
            Грузинская кухня
          </h1>
          
          <p className="text-xl mb-8 text-white/90">
            Аутентичные блюда и традиционное грузинское гостеприимство в самом центре города. Ощутите вкус настоящей Грузии!
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-georgia-wine hover:bg-georgia-wine/90 text-white"
            >
              Забронировать стол
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-georgia-gold text-georgia-gold hover:bg-georgia-gold/10"
            >
              Посмотреть меню <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Button 
          variant="ghost" 
          size="icon"
          className="rounded-full border border-georgia-gold/30 bg-black/30 text-georgia-gold"
          onClick={() => document.getElementById('меню')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowRight className="rotate-90" size={20} />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
