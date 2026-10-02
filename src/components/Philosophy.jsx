import { philosophy, company } from '../data/content';
import './Philosophy.css';

export default function Philosophy() {
  return (
    <section id="about" className="philosophy">
      <div className="container philosophy-grid">
        <div className="philosophy-intro">
          <span className="section-number">01 — Introduction</span>
          <h2>A licensed broker, built for corporate and institutional risks.</h2>
          <p className="lede">
            {company.name} is a limited liability company registered by the
            Corporate Affairs Commission on {company.founded}, engaged in the
            business of insurance brokerage and risk management consultancy.We are a registered member of the Nigerian Council of Registered Insurance brokers (NCRIB) and authorized and regulated by the National Insurance Commission (NAICOM), RBC – 1041.

          </p>
        </div>

        <div className="philosophy-cards">
          <div className="philosophy-card">
            <h3>Vision</h3>
            <p>{philosophy.vision}</p>
          </div>
          <div className="philosophy-card">
            <h3>Mission</h3>
            <p>{philosophy.mission}</p>
          </div>
          <div className="philosophy-card philosophy-values">
            <h3>Core values</h3>
            <ul>
              {philosophy.values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
