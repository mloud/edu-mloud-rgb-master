
import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Menu from './components/Menu';
import RGBDrawing from './components/RGBDrawing';
import Quiz from './components/Quiz';
import { Screen, Difficulty, Segment } from './types';
import { ROCKET_DATA, CAT_DATA, COMPUTER_DATA } from './constants';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedData, setSelectedData] = useState<Segment[]>([]);
  const [levelName, setLevelName] = useState<string>('');

  const handleStartLevel = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'easy':
        setSelectedData(ROCKET_DATA);
        setLevelName('Raketa');
        break;
      case 'medium':
        setSelectedData(CAT_DATA);
        setLevelName('Kočka');
        break;
      case 'hard':
        setSelectedData(COMPUTER_DATA);
        setLevelName('Počítač');
        break;
    }
    setCurrentScreen('drawing');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return (
          <SplashScreen 
            onEnter={() => setCurrentScreen('menu')} 
            onQuiz={() => setCurrentScreen('quiz')}
          />
        );
      case 'menu':
        return <Menu onStart={handleStartLevel} onBack={() => setCurrentScreen('splash')} />;
      case 'drawing':
        return (
          <RGBDrawing 
            onBack={() => setCurrentScreen('menu')} 
            initialSegments={selectedData}
            title={levelName}
          />
        );
      case 'quiz':
        return <Quiz onBack={() => setCurrentScreen('splash')} />;
      default:
        return <SplashScreen onEnter={() => setCurrentScreen('menu')} onQuiz={() => setCurrentScreen('quiz')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#f8fafc]">
      {renderScreen()}
    </div>
  );
};

export default App;
