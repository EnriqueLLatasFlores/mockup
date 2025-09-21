import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, Star, Zap, Award } from "lucide-react";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonGreen: "#32CD32",
  pokemonBlue: "#1E90FF",
  gymRock: "#8B4513",
  gymElectric: "#FFD700",
  pokemonRed: "#DC143C"
};

type Difficulty = 'principiante' | 'intermedio' | 'avanzado';

interface DifficultyScreenProps {
  onBack: () => void;
  onSelectDifficulty: (difficulty: Difficulty) => void;
}

export function DifficultyScreen({ onBack, onSelectDifficulty }: DifficultyScreenProps) {
  return (
    <div 
      className="min-h-screen flex flex-col p-4 pb-20"
      style={{
        background: `linear-gradient(135deg, ${pokemonPalette.pokemonGreen} 0%, ${pokemonPalette.pokemonBlue} 100%)`
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button 
          onClick={onBack}
          variant="outline"
          className="border border-white text-white hover:bg-white/20"
          size="sm"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver
        </Button>
        
        <div className="text-center flex-1 mx-4">
          <h1 className="text-xl text-white drop-shadow-lg mb-1">
            Elige tu Nivel
          </h1>
          <p className="text-sm text-white/90 drop-shadow-md">
            Cada nivel desbloquea algoritmos Pokemon
          </p>
        </div>
      </div>

      {/* Cards de dificultad */}
      <div className="flex-1 flex flex-col justify-center space-y-4">
        {/* Principiante */}
        <Card 
          className="cursor-pointer border-2 hover:border-yellow-400 transition-all duration-300 hover:scale-105 transform"
          onClick={() => onSelectDifficulty('principiante')}
          style={{ borderColor: pokemonPalette.gymRock }}
        >
          <CardHeader className="text-center pb-3">
            <div className="flex items-center justify-center gap-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                style={{ backgroundColor: pokemonPalette.gymRock }}
              >
                <Star className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <CardTitle className="text-lg" style={{ color: pokemonPalette.gymRock }}>
                  Entrenador Novato
                </CardTitle>
                <CardDescription className="text-sm">
                  Nivel 1-10 • 3 Algoritmos Básicos
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Intermedio */}
        <Card 
          className="cursor-pointer border-2 hover:border-yellow-400 transition-all duration-300 hover:scale-105 transform"
          onClick={() => onSelectDifficulty('intermedio')}
          style={{ borderColor: pokemonPalette.gymElectric }}
        >
          <CardHeader className="text-center pb-3">
            <div className="flex items-center justify-center gap-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                style={{ backgroundColor: pokemonPalette.gymElectric }}
              >
                <Zap className="h-6 w-6 text-black" />
              </div>
              <div className="text-left">
                <CardTitle className="text-lg" style={{ color: pokemonPalette.gymElectric }}>
                  Entrenador Experto
                </CardTitle>
                <CardDescription className="text-sm">
                  Nivel 11-20 • 3 Algoritmos Intermedios
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Avanzado */}
        <Card 
          className="cursor-pointer border-2 hover:border-yellow-400 transition-all duration-300 hover:scale-105 transform"
          onClick={() => onSelectDifficulty('avanzado')}
          style={{ borderColor: pokemonPalette.pokemonRed }}
        >
          <CardHeader className="text-center pb-3">
            <div className="flex items-center justify-center gap-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                style={{ backgroundColor: pokemonPalette.pokemonRed }}
              >
                <Award className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <CardTitle className="text-lg" style={{ color: pokemonPalette.pokemonRed }}>
                  Maestro Pokemon
                </CardTitle>
                <CardDescription className="text-sm">
                  Nivel 21+ • 3 Algoritmos de Elite
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}