import { services } from '../data/content';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-head">
          <span className="section-number" style={{ color: 'var(--gold-soft)' }}>02 — Service offerings</span>
          <h2 style={{ color: 'var(--on-ink)' }}>
            Insurance broking and risk management consultancy, in three parts.
          </h2>
          <p className="lede" style={{ color: 'var(--on-ink-muted)' }}>
            We serve corporate bodies, government institutions and individuals
            with bespoke offerings.
          </p>
        </div>

        <ol className="services-list">
          {services.map((s, i) => (
            <li key={s.title} className="services-item">
              <span className="services-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
