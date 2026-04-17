import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team of property experts.</p>
        </div>
      </div>

      <section className="section bg-main">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px' }}>
            
            <div>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Get in Touch</h2>
              <p style={{ color: 'var(--text-light)', marginBottom: '40px' }}>
                Whether you're looking to rent, let your property, or just need some advice, we're here to help. Reach out to us using the details below or fill out the contact form.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(197, 168, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin color="var(--secondary-color)" size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Head Office</h3>
                    <p style={{ color: 'var(--text-light)' }}>123 Property Lane<br />London, SW1A 1AA<br />United Kingdom</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(197, 168, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone color="var(--secondary-color)" size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Phone</h3>
                    <p style={{ color: 'var(--text-light)' }}>+44 20 7946 0958</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(197, 168, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail color="var(--secondary-color)" size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Email</h3>
                    <p style={{ color: 'var(--text-light)' }}>enquiries@bpsproperty.co.uk</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'rgba(197, 168, 128, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock color="var(--secondary-color)" size={24} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Opening Hours</h3>
                    <p style={{ color: 'var(--text-light)' }}>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', padding: '40px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Send a Message</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select className="form-control" required>
                    <option value="">Select an option</option>
                    <option value="renting">Looking to Rent</option>
                    <option value="letting">Let a Property</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control" style={{ minHeight: '150px' }} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
          
          <div style={{ marginTop: '80px', borderRadius: 'var(--radius)', overflow: 'hidden', height: '400px', background: '#ccc' }}>
             {/* Map Placeholder */}
             <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e2e8f0', color: 'var(--text-light)' }}>
               <h3>Interactive Map Placeholder</h3>
             </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
