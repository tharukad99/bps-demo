import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { propertiesData } from '../data/mockData';
import { MapPin, Bed, Bath, ArrowLeft, CheckCircle2 } from 'lucide-react';

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  
  useEffect(() => {
    // Check local mock and local storage
    const localProps = localStorage.getItem('bps_properties');
    let allProps = [...propertiesData];
    if (localProps) {
      allProps = [...allProps, ...JSON.parse(localProps)];
    }
    
    const found = allProps.find(p => p.id === id);
    setProperty(found);
  }, [id]);

  if (!property) return <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Loading...</div>;

  return (
    <>
      <div className="property-hero">
        <img src={property.gallery?.[0] || property.image} alt={property.title} />
      </div>
      
      <div className="property-details-header">
        <div className="container">
          <Link to="/properties" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: 'var(--text-light)', fontWeight: '500' }}>
            <ArrowLeft size={16} /> Back to Properties
          </Link>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="property-type-badge" style={{ position: 'relative', top: '0', left: '0', display: 'inline-block', marginBottom: '15px' }}>{property.propertyType}</span>
              <h1 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>{property.title}</h1>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', fontSize: '1.1rem' }}>
                <MapPin size={20} /> {property.location}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--secondary-color)',fontFamily: 'var(--font-heading)' }}>
                £{property.price.toLocaleString()} <span style={{ fontSize: '1rem', color: 'var(--text-light)', fontWeight: '400' }}>pcm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '80px' }}>
        <div className="details-grid">
          <div>
            <div className="details-card">
              <div style={{ display: 'flex', gap: '30px', paddingBottom: '20px', borderBottom: '1px solid var(--border-color)', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                  <Bed size={24} color="var(--primary-color)" /> <strong>{property.bedrooms}</strong> Bedrooms
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                  <Bath size={24} color="var(--primary-color)" /> <strong>{property.bathrooms}</strong> Bathrooms
                </div>
              </div>
              
              <h3 style={{ marginBottom: '15px' }}>Description</h3>
              <p style={{ whiteSpace: 'pre-line', color: 'var(--text-light)' }}>
                {property.fullDescription || property.shortDescription}
              </p>
            </div>

            {property.features && property.features.length > 0 && (
              <div className="details-card">
                <h3 style={{ marginBottom: '20px' }}>Key Features</h3>
                <div className="features-list">
                  {property.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle2 size={18} /> {feature}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {property.gallery && property.gallery.length > 1 && (
              <div className="details-card">
                 <h3 style={{ marginBottom: '20px' }}>Gallery</h3>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                   {property.gallery.slice(1).map((img, i) => (
                     <img key={i} src={img} alt={`Gallery ${i}`} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: 'var(--radius)' }} />
                   ))}
                 </div>
              </div>
            )}
          </div>

          <div>
            <div className="details-card contact-agent-card">
              <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Arrange a Viewing</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Enquiry sent successfully!'); }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" defaultValue={`I am interested in ${property.title}. Please contact me to arrange a viewing.`} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Enquiry</button>
              </form>
              
              {property.externalUrl && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <p style={{ marginBottom: '10px', color: 'var(--text-light)', fontSize: '0.9rem' }}>Or view on our partner site</p>
                  <a href={property.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: '100%' }}>View External Listing</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
