import { Navbar } from './components/navbar/Navbar';
import { HeroBanner } from './components/hero/HeroBanner';

export function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="bg-[#1b3cb5] hero-grid-pattern relative">
        <Navbar />
        <HeroBanner />
      </div>
    </div>
  );
}

export default App;
