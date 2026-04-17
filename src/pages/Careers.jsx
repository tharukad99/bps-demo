function Careers() {
  const jobs = [
    {
      id: 1,
      title: 'Senior Property Manager',
      location: 'London, UK (Hybrid)',
      type: 'Full-time',
      department: 'Property Management'
    },
    {
      id: 2,
      title: 'Lettings Negotiator',
      location: 'Manchester, UK',
      type: 'Full-time',
      department: 'Sales & Lettings'
    },
    {
      id: 3,
      title: 'Marketing Executive',
      location: 'Remote',
      type: 'Full-time',
      department: 'Marketing'
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build your career with a forward-thinking property company.</p>
        </div>
      </div>

      <section className="section bg-main">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
            <h2 className="section-title">Work With Us</h2>
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
              We are always on the lookout for talented, passionate individuals to join the BPS Property team. We offer a dynamic work environment, competitive benefits, and opportunities for significant career growth.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {jobs.map(job => (
              <div key={job.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-card)', padding: '30px', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-soft)' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', color: 'var(--primary-color)', marginBottom: '10px' }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '15px', color: 'var(--text-light)', fontSize: '0.9rem' }}>
                    <span>{job.department}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <div>
                  <button className="btn btn-outline" onClick={() => alert('Application form coming soon!')}>Apply Now</button>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'var(--bg-card)', borderRadius: 'var(--radius)' }}>
            <h3 style={{ marginBottom: '15px' }}>Don't see a perfect fit?</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '20px' }}>Send us your CV anyway. We are always interested in connecting with great talent.</p>
            <a href="mailto:careers@bpsproperty.co.uk" className="btn btn-primary">Email Your CV</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
