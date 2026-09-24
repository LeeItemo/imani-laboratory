const branches = [
  {
    name: 'Nairobi Central',
    status: 'Operational',
    patients: '184',
    staff: '72',
    services: ['Radiology', 'Pathology', 'Pharmacy'],
    alert: 'New biopsy reports synchronized',
  },
  {
    name: 'Mombasa Coast',
    status: 'Operational',
    patients: '132',
    staff: '58',
    services: ['Diagnostics', 'Imaging', 'Outpatient'],
    alert: 'Lab inventory transfer approved',
  },
  {
    name: 'Kisumu West',
    status: 'Monitoring',
    patients: '96',
    staff: '41',
    services: ['Emergency', 'Ultrasound', 'Consults'],
    alert: 'Two referral cases pending review',
  },
  {
    name: 'Eldoret North',
    status: 'Operational',
    patients: '148',
    staff: '63',
    services: ['Molecular Lab', 'Oncology', 'ICU'],
    alert: 'Telemedicine update shared with central team',
  },
];

const metrics = [
  { label: 'Connected branches', value: '12', trend: '+2 this month' },
  { label: 'Pending referrals', value: '24', trend: '-6 vs yesterday' },
  { label: 'Blood inventory', value: '94%', trend: 'Healthy reserve' },
  { label: 'Patient satisfaction', value: '4.8/5', trend: 'Across network' },
];

const services = [
  'Radiology & Imaging',
  'Molecular Diagnostics',
  'Maternal Care',
  'Immunology Lab',
  'Pharmacy Coordination',
  'Telehealth Support',
];

const updates = [
  { title: 'Shared alerts', detail: 'Central lab flagged 3 urgent blood results for branch response.' },
  { title: 'Referral transfer', detail: 'Kisumu West transferred a cardiac patient to Nairobi Central.' },
  { title: 'Inventory sync', detail: 'Mombasa Coast restocked reagent supply using central approval.' },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">I</div>
          <div>
            <p className="eyebrow">Imani Laboratory</p>
            <h1>Hospital Network</h1>
          </div>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#overview">Overview</a>
          <a href="#branches">Branches</a>
          <a href="#services">Services</a>
          <a href="#updates">Updates</a>
        </nav>
        <button className="primary-btn">Quick Access</button>
      </header>

      <main>
        <section className="hero" id="overview">
          <div className="hero-copy">
            <p className="eyebrow accent">Connected care across every site</p>
            <h2>One clinical network, shared intelligence, better outcomes.</h2>
            <p className="hero-text">
              Imani Laboratory coordinates critical patient care, lab results, referrals, and inventory across multiple hospital branches so each team acts with real-time visibility.
            </p>
            <div className="hero-actions">
              <button className="primary-btn">View Branch Status</button>
              <button className="secondary-btn">Speak to Central Desk</button>
            </div>
            <div className="mini-metrics">
              {metrics.slice(0, 3).map((item) => (
                <div key={item.label} className="mini-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-header">
              <span className="signal-dot" />
              <span>Network health</span>
            </div>
            <div className="panel-grid">
              <div>
                <small>Live labs</small>
                <strong>96.4%</strong>
              </div>
              <div>
                <small>Avg. response</small>
                <strong>11 min</strong>
              </div>
              <div>
                <small>Referrals</small>
                <strong>184</strong>
              </div>
              <div>
                <small>Open alerts</small>
                <strong>07</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="stat-row" aria-label="Network metrics">
          {metrics.map((item) => (
            <article key={item.label} className="stat-card">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <small>{item.trend}</small>
            </article>
          ))}
        </section>

        <section className="content-grid" id="branches">
          <div className="section-header">
            <div>
              <p className="eyebrow accent">Branch coordination</p>
              <h3>Hospital system overview</h3>
            </div>
            <button className="secondary-btn compact">Export report</button>
          </div>

          <div className="branch-list">
            {branches.map((branch) => (
              <article key={branch.name} className="branch-card">
                <div className="branch-topline">
                  <div>
                    <h4>{branch.name}</h4>
                    <p>{branch.status}</p>
                  </div>
                  <span className={`status-pill ${branch.status === 'Monitoring' ? 'warning' : ''}`}>
                    {branch.status}
                  </span>
                </div>

                <div className="branch-stats">
                  <div>
                    <small>Patients</small>
                    <strong>{branch.patients}</strong>
                  </div>
                  <div>
                    <small>Staff</small>
                    <strong>{branch.staff}</strong>
                  </div>
                </div>

                <ul>
                  {branch.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>

                <div className="alert-box">{branch.alert}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="bottom-grid">
          <div className="info-panel" id="services">
            <div className="section-header small-gap">
              <div>
                <p className="eyebrow accent">Core services</p>
                <h3>Shared hospital capabilities</h3>
              </div>
            </div>

            <div className="pill-list">
              {services.map((service) => (
                <span key={service} className="service-pill">{service}</span>
              ))}
            </div>
          </div>

          <div className="info-panel" id="updates">
            <div className="section-header small-gap">
              <div>
                <p className="eyebrow accent">Live updates</p>
                <h3>Communication center</h3>
              </div>
            </div>

            <div className="update-list">
              {updates.map((item) => (
                <div key={item.title} className="update-item">
                  <span className="bullet" />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
