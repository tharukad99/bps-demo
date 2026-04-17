import { useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, ArrowRight, ExternalLink } from 'lucide-react';

function PropertyCard({ property }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (property.internalDetails) {
      navigate(`/properties/${property.id}`);
    } else if (property.externalUrl) {
      window.open(property.externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="property-card" onClick={handleClick}>
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <span className="property-type-badge">{property.propertyType}</span>
      </div>
      <div className="property-content">
        <div className="property-price">£{property.price.toLocaleString()} pcm</div>
        <h3 className="property-title">{property.title}</h3>
        <div className="property-location">
          <MapPin size={16} /> {property.location}
        </div>
        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '20px', flex: 1 }}>{property.shortDescription}</p>
        <div className="property-meta">
          <div className="meta-item">
            <Bed size={18} /> {property.bedrooms} Beds
          </div>
          <div className="meta-item">
            <Bath size={18} /> {property.bathrooms} Baths
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: '500' }}>
            {property.internalDetails ? 'Details' : 'External'} {property.internalDetails ? <ArrowRight size={16} style={{ marginLeft: '4px' }}/> : <ExternalLink size={16} style={{ marginLeft: '4px' }}/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
