import { Button } from "../ui/button";
import { Trophy, CheckCircle, Zap, Star, Award, Home } from "lucide-react";
import { Algorithm } from "../data/algorithmsData";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonGreen: "#32CD32",
  pokemonYellow: "#FFD700",
  pokemonBlue: "#1E90FF"
};

interface SuccessScreenProps {
  selectedAlgorithm: Algorithm | null;
  onNextAlgorithm: () => void;
  onBackToHome: () => void;
}

export function SuccessScreen({ selectedAlgorithm, onNextAlgorithm, onBackToHome }: SuccessScreenProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 pb-20"
      style={{
        background: `linear-gradient(135deg, ${pokemonPalette.pokemonGreen} 0%, ${pokemonPalette.pokemonYellow} 100%)`
      }}
    >
      <div className="text-center space-y-6 max-w-sm mx-auto">
        {/* Celebración */}
        <div className="relative">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <Trophy className="h-12 w-12 text-yellow-500" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-white drop-shadow-lg mb-2">
            ¡EXCELENTE TRABAJO!
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            Has dominado {selectedAlgorithm?.title}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-yellow-300" />
            <span className="text-white">¡Insignia Ganada!</span>
            <Zap className="h-5 w-5 text-yellow-300" />
          </div>
          <div className="flex justify-center">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg"
              style={{ backgroundColor: selectedAlgorithm?.color }}
            >
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          <p className="text-sm text-white/80 mt-2">
            Insignia de {selectedAlgorithm?.subtitle}
          </p>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={onNextAlgorithm}
            className="w-full h-12 text-lg border-2 border-white shadow-xl"
            style={{ 
              backgroundColor: pokemonPalette.pokemonBlue,
              color: 'white'
            }}
          >
            <Star className="h-5 w-5 mr-2" />
            Siguiente Algoritmo
          </Button>
          
          <Button 
            onClick={onBackToHome}
            variant="outline"
            className="w-full h-10 border-2 border-white text-white hover:bg-white/20"
          >
            <Home className="h-4 w-4 mr-2" />
            Volver al Inicio
          </Button>
        </div>
      </div>
    </div>
  );
}