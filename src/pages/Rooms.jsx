import { Link } from 'react-router-dom';

function Rooms() {
  return (
    <div className="room-landing">
      <h1 className="room-title">
        We Let Rooms,<br />
        For You To Make<br />
        Home!
      </h1>
      
      <p className="room-subtitle">
        There is nowhere more important than where we call home.
      </p>
      
      <p className="room-text">
        A place to sleep, a place to be comfortable, a place to be yourself, and place to relax after a long day at work. Having a safe and comfortable place to live is beneficial to wellbeing, career success and achievement of personal goals.
      </p>
      
      <p className="room-text">
        We strive to provide tenants with well-managed, well maintained and comfortable homes. Homes that are designed with a tenant in-mind.
      </p>
      
      <div className="room-buttons">
        <a 
          href="https://www.spareroom.co.uk/pro/thehmoguys" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-outline-dark"
        >
          View Available Rooms
        </a>
        <Link to="/contact" className="btn btn-orange">
          Apply For A Room
        </Link>
      </div>
    </div>
  );
}

export default Rooms;
