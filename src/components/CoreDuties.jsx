import { coreDuties } from '../data/content';
import './CoreDuties.css';

export default function CoreDuties() {
  return (
    <section id="duties" className="duties">
      <div className="container duties-grid">
        <div className="section-head duties-head">
          <span className="section-number">05 — Our core duties</span>
          <h2>What you can expect from us as your broker.</h2>
        </div>

        <ol className="duties-list">
          {coreDuties.map((d, i) => (
            <li key={d}>
              <span>{i + 1}</span>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
