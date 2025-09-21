import { Button } from "../ui/button";
import { XCircle, Code2, RotateCcw } from "lucide-react";
import { Algorithm } from "../data/algorithmsData";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonRed: "#DC143C",
  pokemonOrange: "#FF8C00",
  pokemonYellow: "#FFD700"
};

interface ErrorScreenProps {
  onRetry: () => void;
  onResetCode: () => void;
}

export function ErrorScreen({ onRetry, onResetCode }: ErrorScreenProps) {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 pb-20"
      style={{
        background: `linear-gradient(135deg, ${pokemonPalette.pokemonRed} 0%, ${pokemonPalette.pokemonOrange} 100%)`
      }}
    >
      <div className="text-center space-y-6 max-w-sm mx-auto">
        {/* Error Icon */}
        <div className="relative">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl">
            <XCircle className="h-12 w-12 text-red-500" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl text-white drop-shadow-lg mb-2">
            ¡Ups! Hay un Error
          </h1>
          <p className="text-lg text-white/90 drop-shadow-md">
            No te preocupes, todo entrenador comete errores
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <h3 className="text-white mb-2">💡 Consejos para corregir:</h3>
          <div className="text-sm text-white/80 text-left space-y-1">
            <p>• Verifica que tienes una función definida</p>
            <p>• Asegúrate de usar 'return' en tu función</p>
            <p>• Revisa la sintaxis de los bucles</p>
            <p>• Comprueba los nombres de variables</p>
          </div>
        </div>

        <div className="space-y-3">
          <Button 
            onClick={onRetry}
            className="w-full h-12 text-lg border-2 border-white shadow-xl"
            style={{ 
              backgroundColor: pokemonPalette.pokemonYellow,
              color: 'black'
            }}
          >
            <Code2 className="h-5 w-5 mr-2" />
            Intentar de Nuevo
          </Button>
          
          <Button 
            onClick={onResetCode}
            variant="outline"
            className="w-full h-10 border-2 border-white text-white hover:bg-white/20"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Resetear Código
          </Button>
        </div>
      </div>
    </div>
  );
}