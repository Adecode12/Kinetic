import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import RiskExposures from './components/RiskExposures';
import ValueProps from './components/ValueProps';
import CoreDuties from './components/CoreDuties';
import Products from './components/Products';
import Board from './components/Board';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Services />
        <RiskExposures />
        <ValueProps />
        <CoreDuties />
        <Products />
        <Board />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
