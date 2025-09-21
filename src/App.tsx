import { useState } from "react";
import { toast } from "sonner@2.0.3";

// Screens
import { LoginScreen } from "./components/screens/LoginScreen";
import { RegisterScreen } from "./components/screens/RegisterScreen";
import { WelcomeScreen } from "./components/screens/WelcomeScreen";
import { DifficultyScreen } from "./components/screens/DifficultyScreen";
import { AlgorithmsScreen } from "./components/screens/AlgorithmsScreen";
import { ARViewScreen } from "./components/screens/ARViewScreen";
import { TestARScreen } from "./components/screens/TestARScreen";
import { ProgrammingScreen } from "./components/screens/ProgrammingScreen";
import { SuccessScreen } from "./components/screens/SuccessScreen";
import { ErrorScreen } from "./components/screens/ErrorScreen";
import { FriendsScreen } from "./components/screens/FriendsScreen";
import { SettingsScreen } from "./components/screens/SettingsScreen";
import { EditProfileScreen } from "./components/screens/EditProfileScreen";

// Navigation
import { MobileFooter } from "./components/navigation/MobileFooter";

// Data
import { Algorithm, Difficulty, algorithmsData } from "./components/data/algorithmsData";

type Screen = 'welcome' | 'difficulty' | 'algorithms' | 'ar-view' | 'test-ar' | 'programming' | 'success' | 'error' | 'login' | 'register' | 'edit-profile';
type Tab = 'home' | 'friends' | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('principiante');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(null);
  const [currentTab, setCurrentTab] = useState<Tab>('home');
  const [userCode, setUserCode] = useState('');
  const [codeOutput, setCodeOutput] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [arBlocks, setArBlocks] = useState([64, 34, 25, 12]);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Funciones de navegación y lógica
  const executeCode = () => {
    try {
      if (userCode.includes('function') && userCode.includes('return')) {
        setTimeout(() => setCurrentScreen('success'), 1000);
        setCodeOutput('¡Código ejecutado exitosamente! ✅\nArray ordenado: [11, 12, 22, 25, 34, 64, 90]');
      } else {
        setTimeout(() => setCurrentScreen('error'), 1000);
        setCodeOutput('❌ Error: Función no encontrada o sintaxis incorrecta');
      }
    } catch (error) {
      setCodeOutput(`❌ Error: ${error}`);
      setCurrentScreen('error');
    }
  };

  const performSwap = () => {
    setIsSwapping(true);
    const newBlocks = [...arBlocks];
    if (newBlocks[0] > newBlocks[1]) {
      [newBlocks[0], newBlocks[1]] = [newBlocks[1], newBlocks[0]];
      setArBlocks(newBlocks);
    }
    setTimeout(() => setIsSwapping(false), 500);
  };

  const handleSelectAlgorithm = (algorithm: Algorithm) => {
    setSelectedAlgorithm(algorithm);
    setCurrentScreen('ar-view');
    setUserCode(algorithm.codeTemplate);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen('welcome');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen('login');
  };

  // Renderizar contenido según la pestaña actual
  const renderContent = () => {
    // Si no está autenticado, mostrar pantallas de login/register
    if (!isAuthenticated) {
      switch (currentScreen) {
        case 'login':
          return (
            <LoginScreen 
              onLogin={handleLogin}
              onNavigateToRegister={() => setCurrentScreen('register')}
            />
          );
        case 'register':
          return (
            <RegisterScreen
              onRegister={handleLogin}
              onNavigateToLogin={() => setCurrentScreen('login')}
            />
          );
        default:
          return (
            <LoginScreen 
              onLogin={handleLogin}
              onNavigateToRegister={() => setCurrentScreen('register')}
            />
          );
      }
    }

    // Si está editando perfil
    if (currentScreen === 'edit-profile') {
      return <EditProfileScreen onBack={() => setCurrentTab('settings')} />;
    }

    if (currentTab === 'friends') {
      return <FriendsScreen />;
    } else if (currentTab === 'settings') {
      return (
        <SettingsScreen 
          onEditProfile={() => setCurrentScreen('edit-profile')}
          onLogout={handleLogout}
        />
      );
    } else {
      // Tab 'home' - mostrar las pantallas del juego
      switch (currentScreen) {
        case 'welcome':
          return (
            <WelcomeScreen 
              onStartAdventure={() => setCurrentScreen('difficulty')}
              onNavigateToLogin={() => setCurrentScreen('login')}
            />
          );
        case 'difficulty':
          return (
            <DifficultyScreen 
              onBack={() => setCurrentScreen('welcome')}
              onSelectDifficulty={(difficulty) => {
                setSelectedDifficulty(difficulty);
                setCurrentScreen('algorithms');
              }}
            />
          );
        case 'algorithms':
          return (
            <AlgorithmsScreen 
              selectedDifficulty={selectedDifficulty}
              onBack={() => setCurrentScreen('difficulty')}
              onSelectAlgorithm={handleSelectAlgorithm}
            />
          );
        case 'ar-view':
          return (
            <ARViewScreen 
              selectedAlgorithm={selectedAlgorithm}
              arBlocks={arBlocks}
              onBack={() => setCurrentScreen('algorithms')}
              onNavigateToTestAR={() => setCurrentScreen('test-ar')}
              onNavigateToProgramming={() => setCurrentScreen('programming')}
            />
          );
        case 'test-ar':
          return (
            <TestARScreen 
              selectedAlgorithm={selectedAlgorithm}
              arBlocks={arBlocks}
              isSwapping={isSwapping}
              onBack={() => setCurrentScreen('ar-view')}
              onPerformSwap={performSwap}
              onNavigateToProgramming={() => setCurrentScreen('programming')}
            />
          );
        case 'programming':
          return (
            <ProgrammingScreen 
              selectedAlgorithm={selectedAlgorithm}
              userCode={userCode}
              codeOutput={codeOutput}
              onBack={() => setCurrentScreen('ar-view')}
              onCodeChange={setUserCode}
              onExecuteCode={executeCode}
              onResetCode={() => setUserCode(selectedAlgorithm?.codeTemplate || '')}
            />
          );
        case 'success':
          return (
            <SuccessScreen 
              selectedAlgorithm={selectedAlgorithm}
              onNextAlgorithm={() => setCurrentScreen('algorithms')}
              onBackToHome={() => setCurrentScreen('welcome')}
            />
          );
        case 'error':
          return (
            <ErrorScreen 
              onRetry={() => setCurrentScreen('programming')}
              onResetCode={() => {
                setUserCode(selectedAlgorithm?.codeTemplate || '');
                setCurrentScreen('programming');
              }}
            />
          );
        default:
          return (
            <WelcomeScreen 
              onStartAdventure={() => setCurrentScreen('difficulty')}
              onNavigateToLogin={() => setCurrentScreen('login')}
            />
          );
      }
    }
  };

  return (
    <div className="relative">
      {renderContent()}
      {isAuthenticated && (
        <MobileFooter 
          currentTab={currentTab}
          onTabChange={setCurrentTab}
        />
      )}
    </div>
  );
}