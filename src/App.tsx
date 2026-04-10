import { AppProvider } from './contexts/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Islands from './components/Islands';
import Culture from './components/Culture';
import History from './components/History';
import Tourism from './components/Tourism';
import MapSection from './components/MapSection';
import TravelTips from './components/TravelTips';
import Footer from './components/Footer';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Islands />
          <Culture />
          <History />
          <Tourism />
          <MapSection />
          <TravelTips />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
