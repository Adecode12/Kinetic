import { company } from '../data/content';
import './CTA.css';

export default function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="container cta-inner">
        <div>
          <span className="eyebrow">Let's talk about your portfolio</span>
          <h2>
            We'd welcome the privilege of placing our services at your disposal.
          </h2>
          <p>
            Tell us about your organisation and current cover — we'll review
            your risk exposures and come back with a clear recommendation.
          </p>
        </div>

        <div className="cta-panel">
          <a className="btn btn-primary" href={`mailto:${company.email}`}>
            {company.email}
          </a>
          <a className="btn btn-ghost" href={`tel:${company.phone.replace(/\s/g, '')}`}>
            {company.phone}
          </a>
          <p className="cta-address">{company.address}</p>
        </div>
      </div>
    </section>
  );
}
