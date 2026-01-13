
import React from 'react';
import GreetingCard from './components/GreetingCard';
import BackgroundDecor from './components/BackgroundDecor';
import FloatingFlowers from './components/FloatingFlowers';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FFF8E7] flex flex-col items-center justify-between py-6 md:py-12">
      {/* Background Patterns */}
      <BackgroundDecor />
      
      {/* Subtle Floating Elements */}
      <FloatingFlowers />
      
      {/* Main Content Area */}
      <main className="z-10 w-full max-w-5xl px-6 flex-grow flex flex-col items-center justify-center">
        <GreetingCard />
      </main>
      
      {/* Footer text with refined styling */}
      <footer className="z-10 text-center px-4 mt-2">
        <p className="text-[#5D4037] font-bold text-sm md:text-2xl tracking-wide opacity-80">
          With warm wishes from Nizhal Men's PG
        </p>
      </footer>
    </div>
  );
};

export default App;
