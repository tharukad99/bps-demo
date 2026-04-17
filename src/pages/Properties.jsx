import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { propertiesData } from '../data/mockData';
import PropertyCard from '../components/PropertyCard';
import SearchFilter from '../components/SearchFilter';

function Properties() {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState(propertiesData);
  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    propertyType: '',
    maxPrice: '',
    bedrooms: ''
  });

  // Watch for local storage updates if we add properties from Admin
  useEffect(() => {
    const localProps = localStorage.getItem('bps_properties');
    if (localProps) {
      setProperties([...propertiesData, ...JSON.parse(localProps)]);
    }
  }, []);

  const filteredProperties = properties.filter(prop => {
    let match = true;
    if (filters.location && !prop.location.toLowerCase().includes(filters.location.toLowerCase())) {
      match = false;
    }
    if (filters.propertyType && prop.propertyType !== filters.propertyType) {
      match = false;
    }
    if (filters.maxPrice && prop.price > Number(filters.maxPrice)) {
      match = false;
    }
    if (filters.bedrooms && prop.bedrooms < Number(filters.bedrooms)) {
      match = false;
    }
    return match;
  });

  return (
    <>
      <div className="page-header" style={{ padding: '60px 0 40px' }}>
        <div className="container">
          <h1>Our Properties</h1>
          <p>Browse our exclusive portfolio of premium properties.</p>
        </div>
      </div>

      <section className="section bg-main">
        <div className="container">
          <SearchFilter filters={filters} setFilters={setFilters} />
          
          <div style={{ marginBottom: '20px', color: 'var(--text-light)' }}>
            Showing {filteredProperties.length} properties
          </div>
          
          {filteredProperties.length > 0 ? (
            <div className="properties-grid">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div style={{ padding: '60px', textAlign: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius)' }}>
              <h3>No properties found</h3>
              <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>Try adjusting your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Properties;
