
import React from 'react';
import GreetingCard from './components/GreetingCard';
import BackgroundDecor from './components/BackgroundDecor';
import FloatingFlowers from './components/FloatingFlowers';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FFF8E7] flex flex-col items-center justify-center">
      {/* Background patterns and illustrations */}
      <BackgroundDecor />
      
      {/* Animated floating elements */}
      <FloatingFlowers />
      
      {/* Main content area */}
      <main className="z-10 w-full max-w-4xl px-4 flex flex-col items-center">
        <GreetingCard />
      </main>
      
      {/* Decorative footer text */}
      <footer className="absolute bottom-8 z-10 text-center px-4">
        <p className="text-[#8B4513] font-semibold text-lg md:text-xl">
          With warm wishes from Nizhal Men's PG
        </p>
      </footer>
    </div>
  );
};

export default App;
