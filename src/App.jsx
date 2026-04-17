import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import HowToRent from './pages/HowToRent';
import Landlords from './pages/Landlords';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/about" element={<About />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/how-to-rent" element={<HowToRent />} />
            <Route path="/landlords" element={<Landlords />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
