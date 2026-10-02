import { valueProps } from '../data/content';
import './ValueProps.css';

export default function ValueProps() {
  return (
    <section id="value" className="valueprops">
      <div className="container">
        <div className="section-head">
          <span className="section-number">04 — Our value propositions</span>
          <h2>Value beyond traditional insurance broking.</h2>
          <p className="lede">
            Our expertise in risk management and in-depth knowledge of the
            insurance market place us in a vantage position to manage your
            portfolio as your risk advisor and appointed insurance broker.
          </p>
        </div>

        <div className="valueprops-grid">
          {valueProps.map((v, i) => (
            <div className="valueprop" key={v.title}>
              <div className="valueprop-head">
                <span className="valueprop-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
              </div>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
