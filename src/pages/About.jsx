function About() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>About BPS Property</h1>
          <p>Setting the standard for premium property services in the UK.</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 className="section-title">Our Story</h2>
              <p style={{ marginBottom: '20px', color: 'var(--text-main)', fontSize: '1.1rem' }}>
                Founded with a vision to redefine the real estate experience, BPS Property has grown into one of the UK's most trusted property rental and lettings companies. 
              </p>
              <p style={{ marginBottom: '20px', color: 'var(--text-main)', fontSize: '1.1rem' }}>
                We believe that finding a home should be a seamless, transparent, and enjoyable journey. By combining deep local knowledge with modern technology, we curate a portfolio of exceptional properties tailored for discerning clients.
              </p>
              <ul style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><span style={{ color: 'var(--secondary-color)', fontSize: '1.5rem' }}>✓</span> Uncompromising Quality Standards</li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><span style={{ color: 'var(--secondary-color)', fontSize: '1.5rem' }}>✓</span> Transparent & Honest Practices</li>
                <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><span style={{ color: 'var(--secondary-color)', fontSize: '1.5rem' }}>✓</span> Dedicated Customer Support</li>
              </ul>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" alt="BPS Property Office" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-hover)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container text-center">
          <h2 className="section-title">Our Mission & Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginTop: '50px' }}>
            <div style={{ padding: '40px 20px', background: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Excellence</h3>
              <p style={{ color: 'var(--text-light)' }}>We strive for perfection in every interaction, from the properties we represent to the service we provide.</p>
            </div>
            <div style={{ padding: '40px 20px', background: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Integrity</h3>
              <p style={{ color: 'var(--text-light)' }}>Honesty and transparency form the bedrock of our relationships with tenants, landlords, and partners.</p>
            </div>
            <div style={{ padding: '40px 20px', background: '#fff', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '15px' }}>Innovation</h3>
              <p style={{ color: 'var(--text-light)' }}>We embrace modern technology to make the property process smoother, faster, and more efficient.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
