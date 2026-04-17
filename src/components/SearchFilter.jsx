function SearchFilter({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="filters-container">
      <div className="filter-group">
        <label htmlFor="location">Location</label>
        <input 
          type="text" 
          id="location" 
          name="location" 
          placeholder="e.g. London" 
          value={filters.location} 
          onChange={handleChange} 
        />
      </div>
      
      <div className="filter-group">
        <label htmlFor="propertyType">Property Type</label>
        <select id="propertyType" name="propertyType" value={filters.propertyType} onChange={handleChange}>
          <option value="">Any</option>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Studio">Studio</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="maxPrice">Max Price (pcm)</label>
        <select id="maxPrice" name="maxPrice" value={filters.maxPrice} onChange={handleChange}>
          <option value="">Any</option>
          <option value="1000">Up to £1,000</option>
          <option value="2000">Up to £2,000</option>
          <option value="3000">Up to £3,000</option>
          <option value="5000">Up to £5,000</option>
          <option value="10000">Up to £10,000</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="bedrooms">Bedrooms</label>
        <select id="bedrooms" name="bedrooms" value={filters.bedrooms} onChange={handleChange}>
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
