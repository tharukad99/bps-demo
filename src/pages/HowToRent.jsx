import { Link } from 'react-router-dom';

function HowToRent() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>How to Rent</h1>
          <p>Your step-by-step guide to finding and securing your perfect home with BPS Property.</p>
        </div>
      </div>

      <section className="section bg-main">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)' }}>
            <div className="step-card">
              <div className="step-number">1</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: 'var(--primary-color)' }}>Register Your Interest</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>Start by registering your details and property requirements with us. This ensures you're first to know when suitable properties matching your criteria become available.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: 'var(--primary-color)' }}>Property Viewings</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>Browse our portfolio online and arrange viewings for properties you love. Our expert agents will guide you through the properties and answer any questions you may have.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: 'var(--primary-color)' }}>Make an Offer</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>Once you've found the perfect place, you can make an offer. We'll communicate this to the landlord along with any specific conditions or requirements you have.</p>
              </div>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: 'var(--primary-color)' }}>Referencing</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>Upon acceptance of your offer, we will conduct standard referencing checks including credit score, current employment, and previous landlord references to ensure suitability.</p>
              </div>
            </div>

            <div className="step-card" style={{ marginBottom: 0 }}>
              <div className="step-number">5</div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '10px', color: 'var(--primary-color)' }}>Move In</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>Once checks are passed and contracts are signed, you'll receive your keys. Welcome to your new home!</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/properties" className="btn btn-primary">Start Your Search</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowToRent;
