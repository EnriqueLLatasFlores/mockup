import { Button } from "../ui/button";
import { ArrowLeft, Camera, Target, Code2 } from "lucide-react";
import { Algorithm } from "../data/algorithmsData";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonOrange: "#FF8C00",
  pokemonBlue: "#1E90FF"
};

interface ARViewScreenProps {
  selectedAlgorithm: Algorithm | null;
  arBlocks: number[];
  onBack: () => void;
  onNavigateToTestAR: () => void;
  onNavigateToProgramming: () => void;
}

export function ARViewScreen({ 
  selectedAlgorithm, 
  arBlocks, 
  onBack, 
  onNavigateToTestAR, 
  onNavigateToProgramming 
}: ARViewScreenProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/80 text-white">
        <Button 
          onClick={onBack}
          variant="outline"
          className="border-white text-white hover:bg-white/20"
          size="sm"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver
        </Button>
        
        <div className="text-center">
          <h1 className="text-lg">{selectedAlgorithm?.title}</h1>
          <p className="text-xs text-gray-300">{selectedAlgorithm?.subtitle}</p>
        </div>
        
        <Button 
          variant="outline"
          className="border-white text-white hover:bg-white/20"
          size="sm"
        >
          <Camera className="h-4 w-4" />
        </Button>
      </div>

      {/* Simulación de cámara con AR */}
      <div className="flex-1 relative bg-gradient-to-b from-blue-900 to-blue-700">
        {/* Simulación de vista de cámara */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-green-800 to-blue-800"></div>
        </div>

        {/* Bloques AR flotantes */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex gap-4">
          {arBlocks.map((value, index) => (
            <div
              key={index}
              className="w-12 h-16 flex items-center justify-center text-white rounded-lg border-2 border-yellow-400 shadow-2xl transition-all duration-500 bg-blue-600"
              style={{
                transform: `perspective(1000px) rotateY(${index * 5}deg) translateZ(${index * 10}px)`,
              }}
            >
              <span className="text-lg">{value}</span>
            </div>
          ))}
        </div>

        {/* Efectos AR */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 border-2 border-yellow-400 rounded-full opacity-50 animate-ping"></div>
        </div>
      </div>

      {/* Explicación del algoritmo */}
      <div className="bg-white p-4 space-y-4">
        <div>
          <h3 className="text-lg mb-2">¿Cómo funciona {selectedAlgorithm?.title}?</h3>
          <p className="text-sm text-muted-foreground">
            {selectedAlgorithm?.explanation}
          </p>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-3">
          <Button 
            onClick={onNavigateToTestAR}
            className="flex-1 text-white"
            style={{ backgroundColor: pokemonPalette.pokemonOrange }}
          >
            <Target className="h-4 w-4 mr-2" />
            TEST AR
          </Button>
          
          <Button 
            onClick={onNavigateToProgramming}
            className="flex-1 text-white"
            style={{ backgroundColor: pokemonPalette.pokemonBlue }}
          >
            <Code2 className="h-4 w-4 mr-2" />
            PROGRA
          </Button>
        </div>
      </div>
    </div>
  );
}