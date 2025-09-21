import { Button } from "../ui/button";
import { Home, Users, Settings } from "lucide-react";

type Tab = 'home' | 'friends' | 'settings';

interface MobileFooterProps {
  currentTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function MobileFooter({ currentTab, onTabChange }: MobileFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-yellow-400 h-16 flex items-center justify-around shadow-2xl z-50">
      <Button
        variant={currentTab === 'home' ? 'default' : 'ghost'}
        className={`flex flex-col items-center gap-1 h-12 ${currentTab === 'home' ? 'bg-yellow-400 text-black' : 'text-gray-600'}`}
        onClick={() => onTabChange('home')}
      >
        <Home className="h-5 w-5" />
        <span className="text-xs">Home</span>
      </Button>
      
      <Button
        variant={currentTab === 'friends' ? 'default' : 'ghost'}
        className={`flex flex-col items-center gap-1 h-12 ${currentTab === 'friends' ? 'bg-yellow-400 text-black' : 'text-gray-600'}`}
        onClick={() => onTabChange('friends')}
      >
        <Users className="h-5 w-5" />
        <span className="text-xs">Amigos</span>
      </Button>
      
      <Button
        variant={currentTab === 'settings' ? 'default' : 'ghost'}
        className={`flex flex-col items-center gap-1 h-12 ${currentTab === 'settings' ? 'bg-yellow-400 text-black' : 'text-gray-600'}`}
        onClick={() => onTabChange('settings')}
      >
        <Settings className="h-5 w-5" />
        <span className="text-xs">Config</span>
      </Button>
    </div>
  );
}