export interface Friend {
  id: number;
  name: string;
  level: number;
  status: 'online' | 'offline';
  avatar: string;
  badges: number;
  pokemonFavorite: string;
}

export const friendsData: Friend[] = [
  { id: 1, name: "Ash Ketchum", level: 25, status: "online", avatar: "🧑‍🎓", badges: 8, pokemonFavorite: "⚡" },
  { id: 2, name: "Misty Waters", level: 18, status: "offline", avatar: "👩‍💼", badges: 6, pokemonFavorite: "💧" },
  { id: 3, name: "Brock Stone", level: 22, status: "online", avatar: "👨‍🍳", badges: 7, pokemonFavorite: "🪨" },
  { id: 4, name: "Gary Oak", level: 24, status: "online", avatar: "🧑‍🔬", badges: 8, pokemonFavorite: "🔥" },
  { id: 5, name: "May Hoenn", level: 16, status: "offline", avatar: "👩‍🌾", badges: 5, pokemonFavorite: "🌱" }
];