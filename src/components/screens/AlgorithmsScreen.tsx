import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowLeft, Play, Clock } from "lucide-react";
import { Algorithm, Difficulty, algorithmsData } from "../data/algorithmsData";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonPurple: "#9C27B0",
  pokemonBlue: "#1E90FF"
};

interface AlgorithmsScreenProps {
  selectedDifficulty: Difficulty;
  onBack: () => void;
  onSelectAlgorithm: (algorithm: Algorithm) => void;
}

export function AlgorithmsScreen({ selectedDifficulty, onBack, onSelectAlgorithm }: AlgorithmsScreenProps) {
  const algorithms = algorithmsData[selectedDifficulty];
  const difficultyNames = {
    principiante: "Entrenador Novato",
    intermedio: "Entrenador Experto", 
    avanzado: "Maestro Pokemon"
  };

  return (
    <div 
      className="min-h-screen flex flex-col p-4 pb-20"
      style={{
        background: `linear-gradient(135deg, ${pokemonPalette.pokemonPurple} 0%, ${pokemonPalette.pokemonBlue} 100%)`
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
          Nivel
        </Button>
        
        <div className="text-center flex-1 mx-4">
          <h1 className="text-xl text-white drop-shadow-lg mb-1">
            {difficultyNames[selectedDifficulty]}
          </h1>
          <p className="text-sm text-white/90 drop-shadow-md">
            Selecciona tu algoritmo Pokemon
          </p>
        </div>
      </div>

      {/* Cards de algoritmos */}
      <div className="flex-1 space-y-4">
        {algorithms.map((algorithm) => (
          <Card 
            key={algorithm.id}
            className="cursor-pointer border-2 hover:border-yellow-400 transition-all duration-300 hover:scale-102 transform overflow-hidden"
            onClick={() => onSelectAlgorithm(algorithm)}
          >
            {/* Imagen */}
            <div className="relative h-32 overflow-hidden">
              <ImageWithFallback 
                src={algorithm.image}
                alt={algorithm.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute top-2 right-2">
                <Badge 
                  className="text-white text-xs"
                  style={{ backgroundColor: algorithm.color }}
                >
                  {algorithm.pokemonType}
                </Badge>
              </div>
              <div className="absolute bottom-2 left-2">
                <Badge variant="outline" className="bg-white/90 text-black text-xs">
                  {algorithm.level}
                </Badge>
              </div>
            </div>

            {/* Contenido */}
            <CardHeader className="pb-2">
              <CardTitle className="text-lg mb-1">
                {algorithm.title}
              </CardTitle>
              <CardDescription className="text-sm" style={{ color: algorithm.color }}>
                {algorithm.subtitle}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                {algorithm.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs">{algorithm.duration}</span>
                </div>
                <Badge 
                  variant="outline"
                  className="text-xs"
                  style={{ borderColor: algorithm.color, color: algorithm.color }}
                >
                  {algorithm.difficulty}
                </Badge>
              </div>

              <Button 
                className="w-full text-white text-sm h-8"
                style={{ backgroundColor: algorithm.color }}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectAlgorithm(algorithm);
                }}
              >
                <Play className="h-3 w-3 mr-1" />
                ¡Iniciar Batalla AR!
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}