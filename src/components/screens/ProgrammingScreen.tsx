import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ArrowLeft, Play, RotateCcw } from "lucide-react";
import { Algorithm } from "../data/algorithmsData";

interface ProgrammingScreenProps {
  selectedAlgorithm: Algorithm | null;
  userCode: string;
  codeOutput: string;
  onBack: () => void;
  onCodeChange: (code: string) => void;
  onExecuteCode: () => void;
  onResetCode: () => void;
}

export function ProgrammingScreen({ 
  selectedAlgorithm, 
  userCode, 
  codeOutput, 
  onBack, 
  onCodeChange, 
  onExecuteCode, 
  onResetCode 
}: ProgrammingScreenProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-white shadow-sm border-b">
        <Button 
          onClick={onBack}
          variant="outline"
          size="sm"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Volver
        </Button>
        
        <div className="text-center">
          <h1 className="text-lg">Editor Pokemon</h1>
          <p className="text-xs text-muted-foreground">{selectedAlgorithm?.title}</p>
        </div>
        
        <Button 
          onClick={onExecuteCode}
          className="bg-green-600 text-white hover:bg-green-700"
          size="sm"
        >
          <Play className="h-4 w-4 mr-1" />
          Ejecutar
        </Button>
      </div>

      {/* Editor de código */}
      <div className="flex-1 flex flex-col p-4 space-y-4">
        <div>
          <label className="text-sm mb-2 block">Código del Algoritmo:</label>
          <Textarea
            value={userCode}
            onChange={(e) => onCodeChange(e.target.value)}
            className="h-64 text-sm font-mono bg-gray-900 text-green-400 border-2 border-gray-700 focus:border-yellow-400"
            placeholder="Escribe tu código aquí..."
          />
        </div>

        {/* Output */}
        {codeOutput && (
          <div>
            <label className="text-sm mb-2 block">Salida:</label>
            <div className="bg-black text-green-400 p-3 rounded-lg text-sm font-mono h-24 overflow-y-auto">
              <pre>{codeOutput}</pre>
            </div>
          </div>
        )}

        {/* Controles */}
        <div className="flex gap-2">
          <Button 
            onClick={onResetCode}
            variant="outline"
            className="flex-1"
            size="sm"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            Resetear
          </Button>
          
          <Button 
            onClick={onExecuteCode}
            className="flex-1 bg-green-600 text-white hover:bg-green-700"
            size="sm"
          >
            <Play className="h-4 w-4 mr-1" />
            Ejecutar Código
          </Button>
        </div>
      </div>
    </div>
  );
}