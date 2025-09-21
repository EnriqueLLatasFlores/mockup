import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Trophy, MessageCircle, Users, Search, UserPlus } from "lucide-react";
import { friendsData } from "../data/friendsData";

// Paleta de colores temática Pokemon
const pokemonPalette = {
  pokemonBlue: "#1E90FF",
  pokemonGreen: "#32CD32",
  pokemonYellow: "#FFD700",
  pokemonPurple: "#9C27B0"
};

export function FriendsScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddFriend, setShowAddFriend] = useState(false);

  return (
    <div 
      className="min-h-screen pb-20"
      style={{
        background: `linear-gradient(135deg, ${pokemonPalette.pokemonBlue} 0%, ${pokemonPalette.pokemonGreen} 100%)`
      }}
    >
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm shadow-lg border-b-2 border-white/20 p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl text-white drop-shadow-lg">🧑‍🤝‍🧑 Entrenadores Pokemon</h1>
          <Button 
            onClick={() => setShowAddFriend(!showAddFriend)}
            size="sm"
            className="text-white border-2 border-white"
            style={{ backgroundColor: pokemonPalette.pokemonYellow, color: 'black' }}
          >
            <UserPlus className="h-4 w-4 mr-1" />
            Agregar
          </Button>
        </div>

        {/* Búsqueda */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar entrenadores..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white/90 border-white"
          />
        </div>

        {/* Agregar amigo */}
        {showAddFriend && (
          <div 
            className="mt-3 p-3 rounded-lg border-2 border-white/30"
            style={{ backgroundColor: pokemonPalette.pokemonYellow + '20' }}
          >
            <div className="flex gap-2">
              <Input 
                placeholder="ID del entrenador" 
                className="flex-1 bg-white/90 border-white" 
              />
              <Button 
                size="sm" 
                className="text-white"
                style={{ backgroundColor: pokemonPalette.pokemonGreen }}
              >
                Enviar
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Lista de amigos */}
      <div className="p-4 space-y-3">
        {friendsData.map((friend) => (
          <Card 
            key={friend.id} 
            className="hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-yellow-400"
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white text-xl shadow-lg border-2 border-white"
                    style={{
                      background: `linear-gradient(135deg, ${pokemonPalette.pokemonBlue} 0%, ${pokemonPalette.pokemonPurple} 100%)`
                    }}
                  >
                    {friend.avatar}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{friend.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <span>Nivel {friend.level}</span>
                      <span>•</span>
                      <span className={friend.status === 'online' ? 'text-green-300' : 'text-gray-300'}>
                        {friend.status === 'online' ? '🟢 En línea' : '⚫ Desconectado'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs text-white/70">Pokemon favorito:</span>
                      <span className="text-lg">{friend.pokemonFavorite}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-1">
                    <Trophy className="h-4 w-4 text-yellow-400" />
                    <span className="text-white text-sm">{friend.badges}</span>
                  </div>
                  <div className="flex gap-1">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-white/50 text-white hover:bg-white/20"
                    >
                      <MessageCircle className="h-3 w-3" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-white/50 text-white hover:bg-white/20"
                    >
                      <Users className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pokemon decorativo flotante */}
      <div className="fixed bottom-24 right-4 text-4xl animate-bounce pointer-events-none">
        ⚡
      </div>
    </div>
  );
}