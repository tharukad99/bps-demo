import { Link } from 'react-router-dom';
import { Shield, TrendingUp, Users, Clock } from 'lucide-react';

function Landlords() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>For Landlords & Investors</h1>
          <p>Maximize your property returns with our expert letting and management services.</p>
        </div>
      </div>

      <section className="section bg-main">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '60px' }}>
             <div>
               <h2 className="section-title">Why Let With Us?</h2>
               <p style={{ color: 'var(--text-light)', marginBottom: '20px', fontSize: '1.1rem' }}>
                 At BPS Property, we understand that your property is a significant investment. We offer tailored services designed to maximize your rental yields while minimizing void periods and hassle.
               </p>
               <p style={{ color: 'var(--text-light)', marginBottom: '30px', fontSize: '1.1rem' }}>
                 Whether you own a single investment property or a large portfolio, our dedicated team provides expert guidance, thorough tenant vetting, and proactive management.
               </p>
               <Link to="/contact" className="btn btn-primary">Request a Valuation</Link>
             </div>
             <div>
               <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&q=80" alt="Landlord Consultation" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-hover)' }} />
             </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '60px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)', textAlign: 'center' }}>
              <Shield size={40} color="var(--primary-color)" style={{ marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '15px' }}>Rigorous Vetting</h3>
              <p style={{ color: 'var(--text-light)' }}>Comprehensive reference and credit checks to secure reliable, high-quality tenants.</p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)', textAlign: 'center' }}>
              <TrendingUp size={40} color="var(--primary-color)" style={{ marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '15px' }}>Optimal Yields</h3>
              <p style={{ color: 'var(--text-light)' }}>Expert pricing strategies and marketing to ensure you achieve the best possible return on investment.</p>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)', textAlign: 'center' }}>
              <Users size={40} color="var(--primary-color)" style={{ marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '15px' }}>Dedicated Manager</h3>
              <p style={{ color: 'var(--text-light)' }}>A single point of contact for you and your tenants, providing consistent and personalized service.</p>
            </div>
             <div style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)', textAlign: 'center' }}>
              <Clock size={40} color="var(--primary-color)" style={{ marginBottom: '20px' }} />
              <h3 style={{ marginBottom: '15px' }}>24/7 Support</h3>
              <p style={{ color: 'var(--text-light)' }}>Around-the-clock emergency maintenance coordination to protect your property at all times.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landlords;
