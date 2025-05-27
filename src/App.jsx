import NavBar from './components/NavBar';
import Hero   from './components/Hero';
import Stats  from './components/Stats';
import Features from './components/Features';
import Pricing  from './components/Pricing';
import UrlForm  from './components/UrlForm';
import FAQs     from './components/FAQs';
import BotSec from './components/BotSec'
import Footer   from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <NavBar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <UrlForm />
      <FAQs />
      <BotSec />
      <Footer />
    </div>
  );
}

export default App;