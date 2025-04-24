
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/placeholder.svg')", 
          backgroundPosition: "center 40%"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Georgian pattern overlay */}
      <div className="absolute inset-0 georgian-pattern opacity-30"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="block text-georgia-gold">სუფრა</span>
            <span className="block">Аутентичная грузинская кухня</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Погрузитесь в мир грузинского гостеприимства и традиционных блюд, 
            приготовленных с любовью по семейным рецептам.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-georgia-wine hover:bg-georgia-wine/90 text-white">
              Забронировать стол
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/20 hover:border-white">
              Наше меню
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
