
import React from 'react';
import GreetingCard from './components/GreetingCard';
import BackgroundDecor from './components/BackgroundDecor';
import FloatingFlowers from './components/FloatingFlowers';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#FFFDF7] flex flex-col items-center justify-between py-10 md:py-20">
      {/* High-fidelity Atmosphere Layers */}
      <BackgroundDecor />
      
      {/* Traditional Marigold Shower */}
      <FloatingFlowers />
      
      {/* Centered Square-Optimized Content */}
      <main className="z-10 w-full px-6 flex-grow flex flex-col items-center justify-center max-w-[1080px]">
        <GreetingCard />
      </main>
      
      {/* Footer Branding */}
      <footer className="z-20 text-center px-4 mt-8 animate-[fadeIn_2.5s_ease-out_1.5s_both]">
        <p className="text-[#6D4C41] font-bold text-base md:text-3xl tracking-[0.25em] opacity-80 drop-shadow-sm font-heading">
          WITH WARM WISHES FROM <span className="text-amber-800">NIZHAL MEN'S PG</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
