import { riskExposures } from '../data/content';
import './RiskExposures.css';

export default function RiskExposures() {
  return (
    <section id="exposures" className="exposures">
      <div className="container">
        <div className="section-head">
          <span className="section-number">03 — Profiling your risk exposures</span>
          <h2>Where loss can find your organisation.</h2>
          <p className="lede">
            These are the possible areas your organisation may be exposed to
            risk of loss.
          </p>
        </div>

        <div className="exposures-grid">
          {riskExposures.map((r, i) => (
            <div className="exposure" key={r.title}>
              <span className="exposure-num">{i + 1}</span>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
