import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Mail, Lock, Eye, EyeOff, Zap } from "lucide-react";
import { toast } from "sonner@2.0.3";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonRed: "#DC143C",
  pokemonBlue: "#1E90FF", 
  pokemonYellow: "#FFD700",
  pokemonGreen: "#32CD32",
  pokemonOrange: "#FF8C00",
  pokemonPurple: "#9C27B0"
};

interface LoginScreenProps {
  onLogin: () => void;
  onNavigateToRegister: () => void;
}

export function LoginScreen({ onLogin, onNavigateToRegister }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        background: `linear-gradient(135deg, ${pokemonPalette.pokemonRed} 0%, ${pokemonPalette.pokemonYellow} 100%)`
      }}
    >
      <div className="w-full max-w-sm space-y-6">
        {/* Logo */}
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-b from-white to-red-500 rounded-full border-4 border-black flex items-center justify-center mx-auto shadow-2xl mb-4">
            <div className="w-6 h-6 bg-gray-400 rounded-full border border-gray-600"></div>
          </div>
          <h1 className="text-2xl text-white drop-shadow-2xl mb-2">
            Iniciar Sesión
          </h1>
          <p className="text-white/90 drop-shadow-lg">
            ¡Bienvenido de vuelta, entrenador!
          </p>
        </div>

        {/* Formulario */}
        <Card className="bg-white/10 backdrop-blur-sm border-2 border-white/20">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-white text-sm">Email de Entrenador</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="ash@pokemon.com" 
                  className="pl-10 bg-white/90 border-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white text-sm">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••" 
                  className="pl-10 pr-10 bg-white/90 border-white"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <Button 
              onClick={() => {
                onLogin();
                toast("¡Bienvenido de vuelta, entrenador! ⚡");
              }}
              className="w-full h-12 text-lg"
              style={{ backgroundColor: pokemonPalette.pokemonYellow, color: 'black' }}
            >
              <Zap className="h-5 w-5 mr-2" />
              ¡Iniciar Sesión!
            </Button>

            <div className="text-center">
              <Button
                variant="ghost"
                className="text-white/80 text-sm hover:text-white"
                onClick={onNavigateToRegister}
              >
                ¿No tienes cuenta? Regístrate aquí
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pokemon decorativo */}
        <div className="flex justify-center space-x-4">
          <div className="text-4xl animate-bounce">⚡</div>
          <div className="text-4xl animate-bounce delay-100">🔥</div>
          <div className="text-4xl animate-bounce delay-200">💧</div>
        </div>
      </div>
    </div>
  );
}