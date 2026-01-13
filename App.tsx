
import React from 'react';
import GreetingCard from './components/GreetingCard';
import BackgroundDecor from './components/BackgroundDecor';
import FloatingFlowers from './components/FloatingFlowers';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FFFDF7] flex flex-col items-center justify-between py-12 md:py-24">
      {/* High Fidelity Atmosphere */}
      <BackgroundDecor />
      
      {/* Festive Marigold and Gold Shower */}
      <FloatingFlowers />
      
      {/* Main Premium Card */}
      <main className="z-20 w-full px-6 flex-grow flex flex-col items-center justify-center">
        <GreetingCard />
      </main>
      
      {/* Majestic Footer */}
      <footer className="z-20 text-center px-4 mt-8 animate-[fadeIn_2.5s_ease-out_1.5s_both]">
        <p className="text-[#5D4037] font-black text-xl md:text-5xl tracking-[0.25em] drop-shadow-lg font-heading">
          WITH WARM WISHES FROM <span className="text-amber-800">NIZHAL MEN'S PG</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
