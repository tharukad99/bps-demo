import { useState, useEffect } from 'react';
import PropertyForm from '../components/PropertyForm';

function Admin() {
  const [localProperties, setLocalProperties] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('bps_properties');
    if (saved) {
      setLocalProperties(JSON.parse(saved));
    }
  }, []);

  const handleAddProperty = (newProperty) => {
    const updated = [newProperty, ...localProperties];
    setLocalProperties(updated);
    localStorage.setItem('bps_properties', JSON.stringify(updated));
  };

  const handleClearProperties = () => {
    if (window.confirm('Are you sure you want to delete all locally added properties?')) {
      setLocalProperties([]);
      localStorage.removeItem('bps_properties');
    }
  };

  return (
    <>
      <div className="page-header" style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <h1>Admin Portal</h1>
          <p>Manage your properties.</p>
        </div>
      </div>

      <section className="section bg-main">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
              <h2 className="section-title" style={{ margin: 0 }}>Add New Property</h2>
              {localProperties.length > 0 && (
                <button onClick={handleClearProperties} className="btn btn-outline" style={{ color: 'red', borderColor: 'red' }}>
                  Clear Local Properties
                </button>
              )}
            </div>
            
            <PropertyForm onSubmit={handleAddProperty} />

            {localProperties.length > 0 && (
              <div style={{ marginTop: '60px' }}>
                <h3 style={{ marginBottom: '20px' }}>Recently Added (Local Storage)</h3>
                <div style={{ display: 'grid', gap: '15px' }}>
                  {localProperties.map(prop => (
                    <div key={prop.id} style={{ background: 'var(--bg-card)', padding: '15px 20px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <strong>{prop.title}</strong>
                        <div style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{prop.location} | £{prop.price} {prop.propertyType}</div>
                      </div>
                      <span className="property-type-badge" style={{ position: 'static' }}>Local</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
