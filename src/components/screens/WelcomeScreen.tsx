import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Play, BookOpen, LogOut, Zap, Users, Target, Gamepad2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonRed: "#DC143C",
  pokemonBlue: "#1E90FF", 
  pokemonYellow: "#FFD700",
  pokemonGreen: "#32CD32"
};

interface WelcomeScreenProps {
  onStartAdventure: () => void;
  onNavigateToLogin: () => void;
}

export function WelcomeScreen({ onStartAdventure, onNavigateToLogin }: WelcomeScreenProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 pb-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${pokemonPalette.pokemonBlue} 0%, ${pokemonPalette.pokemonRed} 100%)`
      }}
    >
      {/* Imágenes Pokemon de fondo */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1719198539292-e44add6d15c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlbW9uJTIwcGlrYWNodSUyMGNhcnRvb258ZW58MXx8fHwxNzU4MDIyNzQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Pokemon background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center space-y-6 max-w-sm mx-auto relative z-10">
        {/* Logo Pokemon con efectos */}
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-b from-white to-red-500 rounded-full border-4 border-black flex items-center justify-center shadow-2xl animate-pulse">
              <div className="w-6 h-6 bg-gray-400 rounded-full border border-gray-600"></div>
            </div>
            {/* Efectos brillantes */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
          </div>
          <div>
            <h1 className="text-4xl text-white drop-shadow-2xl mb-2 animate-pulse">
              PokeAlgorithms AR
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Zap className="h-5 w-5 text-yellow-300 animate-bounce" />
              <p className="text-lg text-yellow-300 drop-shadow-lg">
                Gotta Sort 'Em All!
              </p>
              <Zap className="h-5 w-5 text-yellow-300 animate-bounce delay-200" />
            </div>
          </div>
        </div>

        {/* Carrusel de Pokemon */}
        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="text-3xl animate-bounce">⚡</div>
          <div className="text-3xl animate-bounce delay-100">🔥</div>
          <div className="text-3xl animate-bounce delay-200">💧</div>
          <div className="text-3xl animate-bounce delay-300">🌱</div>
          <div className="text-3xl animate-bounce delay-400">🪨</div>
        </div>

        {/* Descripción con efectos */}
        <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 border-2 border-white/30 shadow-2xl">
          <p className="text-lg text-white drop-shadow-md mb-2">
            ¡Conviértete en un Maestro Pokemon de Algoritmos!
          </p>
          <p className="text-sm text-white/90 drop-shadow-md">
            Entrena con AR y evoluciona tus habilidades de programación.
          </p>
        </div>

        {/* Cards de características */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/10 rounded-lg p-3 border border-white/20">
            <div className="text-2xl mb-1">🥽</div>
            <div className="text-white text-xs">Realidad Aumentada</div>
          </div>
          <div className="bg-white/10 rounded-lg p-3 border border-white/20">
            <div className="text-2xl mb-1">🏆</div>
            <div className="text-white text-xs">8 Gimnasios</div>
          </div>
        </div>

        {/* Botones principales */}
        <div className="space-y-3 mt-8">
          <Button 
            onClick={onStartAdventure}
            className="w-full h-14 text-xl border-3 border-white shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            style={{ 
              backgroundColor: pokemonPalette.pokemonYellow,
              color: 'black'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            <Play className="h-6 w-6 mr-3" />
            ¡INICIAR AVENTURA!
            <Zap className="h-5 w-5 ml-3" />
          </Button>
          
          <Button 
            onClick={() => toast("¡La Pokédex se está cargando! 📱")}
            variant="outline"
            className="w-full h-12 text-lg border-2 border-white text-white hover:bg-white/20 shadow-xl"
          >
            <BookOpen className="h-5 w-5 mr-2" />
            Pokédex de Algoritmos
          </Button>
          
          <Button 
            onClick={onNavigateToLogin}
            variant="outline" 
            className="w-full h-10 text-sm border border-white/60 text-white/80 hover:bg-white/10"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Cambiar Entrenador
          </Button>
        </div>

        {/* Footer info con animación */}
        <div className="flex items-center justify-center gap-4 text-white/70 text-xs mt-6">
          <div className="flex items-center gap-1 animate-pulse">
            <Users className="h-3 w-3" />
            <span>Multijugador</span>
          </div>
          <div className="flex items-center gap-1 animate-pulse delay-100">
            <Target className="h-3 w-3" />
            <span>AR</span>
          </div>
          <div className="flex items-center gap-1 animate-pulse delay-200">
            <Gamepad2 className="h-3 w-3" />
            <span>8 Gimnasios</span>
          </div>
        </div>
      </div>
    </div>
  );
}