import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specs from "./components/Specs";
import FleetDashboard from "./components/FleetDashboard";
import OperationalDomains from "./components/OperationalDomains";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-surface-container-lowest selection:bg-primary-fixed selection:text-on-primary">
      {/* Blueprint Grid Overlay */}
      <div className="fixed inset-0 blueprint-grid pointer-events-none z-0"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Specs />
        <FleetDashboard />
        <OperationalDomains />
        <Pricing />
      </main>
      
      <Footer />
    </div>
  );
}
