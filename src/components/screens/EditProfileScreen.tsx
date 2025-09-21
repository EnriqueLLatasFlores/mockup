import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner@2.0.3";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonPurple: "#9C27B0",
  pokemonBlue: "#1E90FF",
  pokemonYellow: "#FFD700",
  pokemonGreen: "#32CD32"
};

interface EditProfileScreenProps {
  onBack: () => void;
}

export function EditProfileScreen({ onBack }: EditProfileScreenProps) {
  return (
    <div 
      className="min-h-screen pb-20"
      style={{
        background: `linear-gradient(135deg, ${pokemonPalette.pokemonPurple} 0%, ${pokemonPalette.pokemonBlue} 100%)`
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/20 text-white">
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
          <h1 className="text-xl">Editar Perfil</h1>
          <p className="text-sm text-white/80">Personaliza tu entrenador</p>
        </div>
        
        <Button 
          onClick={() => {
            onBack();
            toast("¡Perfil actualizado exitosamente! ⚡");
          }}
          className="bg-green-600 text-white hover:bg-green-700"
          size="sm"
        >
          Guardar
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Avatar Section */}
        <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20">
          <CardHeader className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto shadow-2xl border-4 border-white">
              🧑‍🎓
            </div>
            <CardTitle className="text-white">Avatar de Entrenador</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-3">
              {['🧑‍🎓', '👩‍💼', '👨‍🍳', '🧑‍🔬', '👩‍🌾', '🧑‍⚕️', '👩‍🎨', '🧑‍💻'].map((emoji, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-12 text-2xl bg-white/10 border-white/30 hover:bg-white/20"
                  onClick={() => toast(`Avatar ${emoji} seleccionado!`)}
                >
                  {emoji}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Información Personal */}
        <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Información Personal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-white text-sm">Nombre de Entrenador</label>
              <Input 
                defaultValue="Ash Trainer" 
                className="bg-white/90 border-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm">Email</label>
              <Input 
                defaultValue="ash@pokemon.com" 
                className="bg-white/90 border-white"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm">Ciudad de Origen</label>
              <Input 
                defaultValue="Pueblo Paleta" 
                className="bg-white/90 border-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* Pokemon Favorito */}
        <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Pokemon Favorito</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-3">
              {['⚡', '🔥', '💧', '🌱', '🪨', '🌟', '💜', '❄️', '⚫', '🌈'].map((pokemon, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-12 text-2xl bg-white/10 border-white/30 hover:bg-white/20"
                  onClick={() => toast(`Pokemon ${pokemon} seleccionado como favorito!`)}
                >
                  {pokemon}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Estadísticas Pokemon */}
        <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Estadísticas de Entrenador</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-white">
              <span>Nivel actual:</span>
              <Badge 
                className="text-black text-lg px-3 py-1"
                style={{ backgroundColor: pokemonPalette.pokemonYellow }}
              >
                15
              </Badge>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-white text-sm">
                <span>Experiencia</span>
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

            <div className="grid grid-cols-2 gap-4 text-white text-sm">
              <div className="text-center">
                <div className="text-2xl text-yellow-400">🏆</div>
                <div>6 Insignias</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-blue-400">⚡</div>
                <div>42 Algoritmos</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Efectos decorativos */}
        <div className="flex justify-center space-x-8 py-4">
          <div className="text-3xl animate-bounce">✨</div>
          <div className="text-4xl animate-pulse" style={{ color: pokemonPalette.pokemonYellow }}>⚡</div>
          <div className="text-3xl animate-bounce delay-200">✨</div>
        </div>
      </div>
    </div>
  );
}