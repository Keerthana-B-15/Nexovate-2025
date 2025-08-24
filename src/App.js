import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ChiefGuestProfile from './components/ChiefGuestProfile';
import Tracks from './components/Tracks';
import RulesSection from './components/RulesSection';
import Team from './components/Team';
import Prizes from './components/Prizes';
import Timeline from './components/Timeline';
import Results from './components/Results';
import Sponsors from './components/Sponsors';
import CollegeMap from './components/CollegeMap';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <ChiefGuestProfile />
    <Tracks />
    <RulesSection />
    <Timeline />
    <Results />
    <Sponsors />
    <Team />
    <Prizes />
    <CollegeMap />
    <FAQ />
    <Footer />
  </div>
);

export default App;