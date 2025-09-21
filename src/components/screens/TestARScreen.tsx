import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowLeft, RefreshCw, Code2, ArrowRight } from "lucide-react";
import { Algorithm } from "../data/algorithmsData";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonBlue: "#1E90FF"
};

interface TestARScreenProps {
  selectedAlgorithm: Algorithm | null;
  arBlocks: number[];
  isSwapping: boolean;
  onBack: () => void;
  onPerformSwap: () => void;
  onNavigateToProgramming: () => void;
}

export function TestARScreen({ 
  selectedAlgorithm, 
  arBlocks, 
  isSwapping, 
  onBack, 
  onPerformSwap, 
  onNavigateToProgramming 
}: TestARScreenProps) {
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
          AR View
        </Button>
        
        <div className="text-center">
          <h1 className="text-lg">TEST AR - {selectedAlgorithm?.title}</h1>
          <p className="text-xs text-gray-300">Modo Práctica</p>
        </div>
        
        <Button 
          onClick={onPerformSwap}
          className="bg-yellow-400 text-black hover:bg-yellow-500"
          size="sm"
          disabled={isSwapping}
        >
          {isSwapping ? <RefreshCw className="h-4 w-4 animate-spin" /> : 'SWAP'}
        </Button>
      </div>

      {/* Simulación de cámara con AR */}
      <div className="flex-1 relative bg-gradient-to-b from-purple-900 to-purple-700">
        {/* Simulación de vista de cámara */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-br from-purple-800 to-pink-800"></div>
        </div>

        {/* Bloques AR flotantes con animación */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex gap-4">
          {arBlocks.map((value, index) => (
            <div
              key={index}
              className={`w-12 h-16 flex items-center justify-center text-white rounded-lg border-2 border-yellow-400 shadow-2xl transition-all duration-500 ${
                isSwapping && index < 2 ? 'animate-bounce bg-red-500' : 'bg-purple-600'
              }`}
              style={{
                transform: `perspective(1000px) rotateY(${index * 5}deg) translateZ(${index * 10}px)`,
              }}
            >
              <span className="text-lg">{value}</span>
            </div>
          ))}
        </div>

        {/* Indicadores de comparación */}
        {isSwapping && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center gap-2 bg-black/60 px-4 py-2 rounded-lg">
              <ArrowRight className="h-4 w-4 text-yellow-400 animate-pulse" />
              <span className="text-white text-sm">Intercambiando...</span>
              <ArrowRight className="h-4 w-4 text-yellow-400 animate-pulse" />
            </div>
          </div>
        )}

        {/* Efectos AR */}
        <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 border-2 border-yellow-400 rounded-full opacity-50 animate-pulse"></div>
        </div>
      </div>

      {/* Control inferior */}
      <div className="bg-white p-4">
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground mb-2">
            Toca SWAP para intercambiar elementos y practicar el algoritmo
          </p>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xs">Intercambios realizados:</span>
            <Badge>{Math.floor(Math.random() * 5) + 1}</Badge>
          </div>
        </div>

        <Button 
          onClick={onNavigateToProgramming}
          className="w-full text-white"
          style={{ backgroundColor: pokemonPalette.pokemonBlue }}
        >
          <Code2 className="h-4 w-4 mr-2" />
          CONTINUAR A PROGRA
        </Button>
      </div>
    </div>
  );
}