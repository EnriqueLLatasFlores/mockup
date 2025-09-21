import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { User, Settings, Trophy, LogOut, Edit } from "lucide-react";
import { toast } from "sonner@2.0.3";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonPurple: "#9C27B0",
  pokemonRed: "#DC143C",
  pokemonBlue: "#1E90FF",
  pokemonYellow: "#FFD700",
  pokemonGreen: "#32CD32",
  pokemonOrange: "#FF8C00"
};

interface SettingsScreenProps {
  onEditProfile: () => void;
  onLogout: () => void;
}

export function SettingsScreen({ onEditProfile, onLogout }: SettingsScreenProps) {
  return (
    <div 
      className="min-h-screen pb-20"
      style={{
        background: `linear-gradient(135deg, ${pokemonPalette.pokemonPurple} 0%, ${pokemonPalette.pokemonRed} 100%)`
      }}
    >
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm shadow-lg border-b-2 border-white/20 p-4">
        <h1 className="text-xl text-white drop-shadow-lg">⚙️ Centro de Configuración</h1>
        <p className="text-white/80 text-sm">Personaliza tu experiencia Pokemon</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Perfil */}
        <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <User className="h-5 w-5" />
              Perfil de Entrenador
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-xl border-3 border-white"
                style={{
                  background: `linear-gradient(135deg, ${pokemonPalette.pokemonYellow} 0%, ${pokemonPalette.pokemonOrange} 100%)`
                }}
              >
                🧑‍🎓
              </div>
              <div>
                <h3 className="font-medium text-white">Ash Trainer</h3>
                <p className="text-sm text-white/80">Nivel 15 • 6 Insignias</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs text-white/70">Pokemon favorito:</span>
                  <span className="text-lg">⚡</span>
                </div>
              </div>
            </div>
            <Button 
              onClick={onEditProfile}
              className="w-full border-2 border-white text-white"
              style={{ backgroundColor: pokemonPalette.pokemonBlue }}
            >
              <Edit className="h-4 w-4 mr-2" />
              Editar Perfil
            </Button>
          </CardContent>
        </Card>

        {/* Configuraciones */}
        <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Preferencias
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white">Notificaciones</span>
              <Button 
                variant="outline" 
                size="sm"
                className="border-green-400 text-green-400 hover:bg-green-400/20"
              >
                ON
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Sonidos Pokemon</span>
              <Button 
                variant="outline" 
                size="sm"
                className="border-green-400 text-green-400 hover:bg-green-400/20"
              >
                ON
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Modo AR</span>
              <Button 
                variant="outline" 
                size="sm"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/20"
              >
                AUTO
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white">Efectos visuales</span>
              <Button 
                variant="outline" 
                size="sm"
                className="border-purple-400 text-purple-400 hover:bg-purple-400/20"
              >
                ALTO
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Estadísticas */}
        <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-400" />
              Estadísticas de Entrenador
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-white/10 rounded-lg border border-white/20">
                <div className="text-2xl text-yellow-400 mb-1">🏆</div>
                <div className="text-white text-sm">Algoritmos</div>
                <div className="text-yellow-400 text-lg">6</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg border border-white/20">
                <div className="text-2xl text-blue-400 mb-1">⏱️</div>
                <div className="text-white text-sm">Tiempo</div>
                <div className="text-blue-400 text-lg">2h 45m</div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-white">Insignias ganadas:</span>
              <Badge 
                className="text-black text-lg px-3 py-1"
                style={{ backgroundColor: pokemonPalette.pokemonYellow }}
              >
                6/8
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-white text-sm">
                <span>Progreso al siguiente nivel</span>
                <span>2,450 / 3,000 XP</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="h-3 rounded-full transition-all duration-500"
                  style={{ 
                    width: '82%', 
                    background: `linear-gradient(90deg, ${pokemonPalette.pokemonGreen} 0%, ${pokemonPalette.pokemonYellow} 100%)`
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Botón logout */}
        <Card className="bg-white/10 backdrop-blur-sm border-2 border-red-400/50">
          <CardContent className="p-4">
            <Button 
              onClick={() => {
                onLogout();
                toast("¡Hasta luego, entrenador! 👋");
              }}
              variant="outline"
              className="w-full border-red-400 text-red-400 hover:bg-red-400/20"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Pokemon decorativo */}
      <div className="fixed bottom-24 left-4 text-3xl animate-pulse pointer-events-none">
        🔮
      </div>
    </div>
  );
}