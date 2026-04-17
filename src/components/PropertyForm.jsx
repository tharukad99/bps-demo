import { useState } from 'react';

function PropertyForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    bedrooms: '',
    bathrooms: '',
    propertyType: 'Apartment',
    image: '',
    shortDescription: '',
    fullDescription: '',
    externalUrl: '',
    internalDetails: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProperty = {
      ...formData,
      id: Date.now().toString(),
      price: Number(formData.price),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      features: [], // empty for mock simplicity in form
      gallery: formData.image ? [formData.image] : []
    };
    onSubmit(newProperty);
    setFormData({
      title: '', price: '', location: '', bedrooms: '', bathrooms: '',
      propertyType: 'Apartment', image: '', shortDescription: '', fullDescription: '',
      externalUrl: '', internalDetails: true
    });
    alert('Property added successfully!');
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price (pcm)</label>
          <input type="number" name="price" className="form-control" value={formData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Property Type</label>
          <select name="propertyType" className="form-control" value={formData.propertyType} onChange={handleChange}>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Studio">Studio</option>
          </select>
        </div>
        <div className="form-group">
          <label>Bedrooms</label>
          <input type="number" name="bedrooms" className="form-control" value={formData.bedrooms} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Bathrooms</label>
          <input type="number" name="bathrooms" className="form-control" value={formData.bathrooms} onChange={handleChange} required />
        </div>
      </div>
      
      <div className="form-group">
        <label>Main Image URL</label>
        <input type="url" name="image" className="form-control" value={formData.image} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Short Description</label>
        <input type="text" name="shortDescription" className="form-control" value={formData.shortDescription} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Full Description</label>
        <textarea name="fullDescription" className="form-control" value={formData.fullDescription} onChange={handleChange}></textarea>
      </div>

      <div className="form-group" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input type="checkbox" name="internalDetails" id="internalDetails" checked={formData.internalDetails} onChange={handleChange} />
        <label htmlFor="internalDetails" style={{ margin: 0 }}>Has Internal Details Page</label>
      </div>

      {!formData.internalDetails && (
        <div className="form-group">
          <label>External Listing URL</label>
          <input type="url" name="externalUrl" className="form-control" value={formData.externalUrl} onChange={handleChange} required={!formData.internalDetails} />
        </div>
      )}

      <button type="submit" className="btn btn-primary" style={{ marginTop: '20px' }}>Add Property</button>
    </form>
  );
}

export default PropertyForm;
