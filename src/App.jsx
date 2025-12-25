import Hero from './components/Hero';
import About from './components/About';
import Startup from './components/Startup';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <main>
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Hero />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <About />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Startup />
        </div>
      </main>
      <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
