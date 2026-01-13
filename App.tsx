
import React from 'react';
import GreetingCard from './components/GreetingCard';
import BackgroundDecor from './components/BackgroundDecor';
import FloatingFlowers from './components/FloatingFlowers';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FFFDF7] flex items-center justify-center p-4">
      {/* Background Atmosphere Layers */}
      <BackgroundDecor />
      
      {/* Shower of Marigolds */}
      <FloatingFlowers />
      
      {/* Main Container - Centered and Scaled */}
      <div className="relative z-10 w-full max-w-[1080px] aspect-square flex flex-col items-center justify-between py-12 md:py-20 pointer-events-none">
        
        {/* Main Content Area */}
        <main className="w-full flex-grow flex flex-col items-center justify-center pointer-events-auto">
          <GreetingCard />
        </main>
        
        {/* Footer Branding */}
        <footer className="w-full text-center mt-8 animate-[fadeIn_2.5s_ease-out_1.5s_both] pointer-events-auto">
          <p className="text-[#6D4C41] font-bold text-lg md:text-3xl tracking-[0.25em] opacity-90 drop-shadow-sm font-heading uppercase">
            With Warm Wishes From <span className="text-amber-800">Nizhal Men's PG</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
