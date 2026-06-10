import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';
import {
  company,
  process,
  services,
  stats,
  strengths,
} from './content.js';

const PeakLogo = () => (
  <svg viewBox="0 0 44 34" fill="none" aria-hidden="true">
    <path
      d="M3 31L15 7l6.5 10L28 7l13 24"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function App() {
  return (
    <>
      {/* ── HEADER ── */}
      <header className="hdr">
        <a className="hdr-logo" href="#top" aria-label="Peak Elite home">
          <PeakLogo />
          <div className="hdr-wordmark">
            <strong>PEAK ELITE</strong>
            <span>W.L.L</span>
          </div>
        </a>
        <nav className="hdr-nav" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="hdr-cta" href="#contact">Get a Quote</a>
      </header>

      <main id="top">

        {/* ── HERO ── */}
        <section className="hero">
          {/* Left — dark content panel */}
          <div className="hero-left">
            <p className="hero-eyelet">
              <span className="eyelet-line" />
              Peak Elite W.L.L · Bahrain
            </p>
            <h1 className="hero-h">
              Your space,<br />
              <em>perfected.</em>
            </h1>
            <p className="hero-desc">
              Professional cleaning, wardrobe management, facility
              maintenance, hospitality staffing &amp; event support —
              for Bahrain's most discerning clients.
            </p>
            <div className="hero-actions">
              <a className="btn-fill" href="#contact">
                Request Service <ArrowUpRight size={15} />
              </a>
              <a className="btn-bare" href="#services">Our Services</a>
            </div>
            <div className="hero-trust">
              {['Professional', 'Uniformed', 'Reliable', 'Bahrain-based'].map(t => (
                <span key={t}><CheckCircle2 size={12} />{t}</span>
              ))}
            </div>
          </div>

          {/* Right — full-bleed image */}
          <div className="hero-right">
            <img
              src="/assets/peak-elite-hero.png"
              alt="Peak Elite professional team in uniform"
            />
            <div className="hero-right-badge">
              <strong>W.L.L</strong>
              <span>Est. Bahrain</span>
            </div>
          </div>
        </section>

        {/* Stats band */}
        <div className="stats-band">
          {stats.map(({ value, label }) => (
            <div key={label} className="sband-item">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* ── SERVICES ── */}
        <section className="sect services-sect" id="services">
          <div className="wrap">
            <div className="sect-head">
              <span className="label">What we offer</span>
              <h2 className="sect-display">
                Services that<br /><em>elevate.</em>
              </h2>
              <p className="sect-sub">
                Six disciplines, one dedicated team — delivered to the highest standard across Bahrain.
              </p>
            </div>

            <div className="svc-grid">
              {services.map(({ title, body, icon: Icon }, i) => (
                <div className="svc-card" key={title}>
                  <div className="svc-card-top">
                    <span className="svc-card-n">{String(i + 1).padStart(2, '0')}</span>
                    <div className="svc-card-ico"><Icon size={20} /></div>
                  </div>
                  <div className="svc-card-body">
                    <h3 className="svc-card-name">{title}</h3>
                    <p className="svc-card-desc">{body}</p>
                    <a className="svc-card-link" href="#contact">
                      Enquire <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="stats-sect">
          <div className="wrap">
            <p className="stats-intro"><em>Numbers that speak for themselves.</em></p>
            <div className="stats-row">
              {stats.map(({ value, label }) => (
                <div key={label} className="stat-cell">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SHOWCASE ── */}
        <section className="sect showcase-sect">
          <div className="wrap showcase-layout">
            <div className="showcase-copy">
              <span className="label-lt">The Transformation</span>
              <h2 className="showcase-h">
                From<br /><em>chaos</em><br />to calm.
              </h2>
              <p>
                Whether it's a wardrobe in chaos or a facility that needs a
                reset — our trained teams deliver results you can see and feel.
              </p>
              <ul className="check-list">
                {[
                  'Decluttering & deep organisation',
                  'Professional ironing & steaming',
                  'Wardrobe categorising & arranging',
                  'Routine maintenance & upkeep',
                ].map(pt => (
                  <li key={pt}>
                    <CheckCircle2 size={13} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <a className="btn-gold-line" href="#contact">
                Book a Service <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="ba-grid">
              <div className="ba-panel ba-before">
                <div
                  className="ba-img"
                  style={{ backgroundImage: 'url(/assets/wardrobe-before.jpg)' }}
                />
                <span className="ba-tag">Before</span>
              </div>
              <div className="ba-panel ba-after">
                <div
                  className="ba-img"
                  style={{ backgroundImage: 'url(/assets/wardrobe-after.jpg)' }}
                />
                <span className="ba-tag ba-gold">After</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="sect why-sect">
          <div className="wrap">
            <div className="why-head">
              <span className="label">Why Peak Elite</span>
              <h2 className="sect-display">
                Professional<br />care, every<br /><em>time.</em>
              </h2>
            </div>
            <div className="why-grid">
              {strengths.map(({ title, body, icon: Icon }) => (
                <article className="why-card" key={title}>
                  <div className="why-ico"><Icon size={22} /></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="sect process-sect" id="approach">
          <div className="wrap">
            <span className="label">How it works</span>
            <h2 className="process-h">
              A clear path<br />from request<br />
              <em>to results.</em>
            </h2>
            <div className="steps-row">
              {process.map((step, i) => (
                <div className="step" key={step}>
                  <span className="step-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="step-label">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="sect contact-sect" id="contact">
          <div className="wrap contact-grid">
            <div className="contact-copy">
              <span className="label">Get in touch</span>
              <h2 className="contact-h">
                Let's<br /><em>begin.</em>
              </h2>
              <p>
                Tell us what you need — cleaning, wardrobe management,
                maintenance, staffing or events — and we'll have a plan ready
                within 24 hours.
              </p>
              <nav className="cinfo" aria-label="Contact details">
                <a href={`mailto:${company.email}`}>
                  <Mail size={13} /> {company.email}
                </a>
                <a href={`tel:${company.phone.replaceAll(' ', '')}`}>
                  <Phone size={13} /> {company.phone}
                </a>
                <span><MessageCircle size={13} /> {company.whatsapp}</span>
                <span><MapPin size={13} /> {company.location}</span>
              </nav>
            </div>

            <form className="cform">
              <div className="cform-2">
                <label>
                  Name
                  <input type="text" name="name" placeholder="Full name" />
                </label>
                <label>
                  Company / Property
                  <input type="text" name="company" placeholder="Business or home" />
                </label>
              </div>
              <label>
                Service Needed
                <select name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {services.map(s => (
                    <option key={s.title} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea name="message" rows={4} placeholder="Describe your requirement…" />
              </label>
              <button type="button" className="cform-btn">
                <MessageCircle size={16} /> Send Enquiry
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="wrap footer-body">
          <div className="footer-brand">
            <PeakLogo />
            <div>
              <strong>{company.name}</strong>
              <span>Cleaning · Maintenance · Hospitality · Events</span>
            </div>
          </div>
          <p className="footer-quote">
            <em>You manage life.<br />We manage your space.</em>
          </p>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="footer-base">
          <div className="wrap footer-base-row">
            <span>© {new Date().getFullYear()} {company.name}</span>
            <span>{company.location}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
