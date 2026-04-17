import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { propertiesData } from '../data/mockData';
import PropertyCard from '../components/PropertyCard';
import { Search } from 'lucide-react';

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProperties = propertiesData.slice(0, 3);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/properties?location=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/properties');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-subtitle">Premium UK Property</span>
            <h1>Find Your Next <span style={{ color: 'var(--secondary-color)' }}>Dream Home</span></h1>
            <p>Discover an exclusive collection of luxury apartments, charming houses, and sophisticated studios across the UK's most desirable locations.</p>
            
            <form className="hero-search" onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Search by location, city, or postcode..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '0 30px' }}>
                <Search size={20} /> Search
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section section-light">
        <div className="container text-center">
          <h2 className="section-title">Why Choose BPS Property?</h2>
          <p className="section-subtitle">We seamlessly connect discerning tenants with exceptional properties, offering a modern, transparent, and trustworthy service.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '50px' }}>
            <div>
              <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Premium Portfolio</h3>
              <p style={{ color: 'var(--text-light)' }}>Carefully curated properties that meet our strict standards for quality, design, and location.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Expert Guidance</h3>
              <p style={{ color: 'var(--text-light)' }}>Our dedicated team provides professional advice whether you are renting, buying, or investing.</p>
            </div>
            <div>
              <h3 style={{ marginBottom: '15px', color: 'var(--primary-color)' }}>Modern Approach</h3>
              <p style={{ color: 'var(--text-light)' }}>Streamlined digital processes paired with personalized human support for a seamless experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section" style={{ backgroundColor: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: '10px' }}>Featured Properties</h2>
              <p style={{ color: 'var(--text-light)' }}>Hand-picked selection of our finest available homes.</p>
            </div>
            <Link to="/properties" className="btn btn-outline">View All Properties</Link>
          </div>
          
          <div className="properties-grid">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-dark text-center">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Are you a Landlord or Investor?</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', color: 'rgba(255,255,255,0.8)' }}>
            Maximize your returns with our comprehensive property management and elite letting services. Experience total peace of mind.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/landlords" className="btn btn-secondary">Learn More</Link>
            <Link to="/contact" className="btn" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
