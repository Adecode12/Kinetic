import { products } from '../data/content';
import './Products.css';

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-head">
          <span className="section-number">06 — Insurance products schedule</span>
          <h2>Products available to manage your risk exposures.</h2>
        </div>

        <ul className="products-grid">
          {products.map((p, i) => (
            <li key={p}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
