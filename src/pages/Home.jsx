import { Link } from 'react-router-dom';
import { Home as HomeIcon, KeyRound } from 'lucide-react';

function Home() {
  return (
    <div className="split-page">
      {/* Our Rooms Rent Section */}
      <Link to="/rooms" className="split-section">
        <div className="split-header hmo-header">
          <div className="brand-hmo">
            <KeyRound size={50} strokeWidth={1} color="var(--secondary-color)" />
            <div>
              <div style={{ lineHeight: '1', color: '#fff' }}>Our Rooms Rent</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 'normal', fontFamily: 'Inter', color: 'var(--secondary-color)' }}>Premium Co-living Spaces</div>
            </div>
          </div>
        </div>
        <div className="split-btn">
          VISIT ROOMS RENT &gt;
        </div>
        <div 
          className="split-image" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522771731470-8ee3c23565f4?auto=format&fit=crop&q=80')` }}
        ></div>
      </Link>

      {/* Our House Rent Section */}
      <Link to="/properties" className="split-section">
        <div className="split-header bluebox-header">
          <div className="brand-hmo">
            <HomeIcon size={50} strokeWidth={1} color="var(--secondary-color)" />
            <div>
              <div style={{ lineHeight: '1', color: '#fff' }}>Our House Rent</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 'normal', fontFamily: 'Inter', color: 'var(--secondary-color)' }}>Luxury Private Homes</div>
            </div>
          </div>
        </div>
        <div className="split-btn">
          VISIT HOUSE RENT &gt;
        </div>
        <div 
          className="split-image" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80')` }}
        ></div>
      </Link>
    </div>
  );
}

export default Home;
