import logo from '../assets/logo.png';
import { company } from '../data/content';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img src={logo} alt="" aria-hidden="true" className="hero-watermark" />
      <div className="container hero-inner">
        <p className="eyebrow">Strategic risk management approach</p>
        <h1 className="hero-headline">
          We give our clients' risk management a clear and definite direction.
        </h1>
        <p className="hero-lede">
          Kinetic Insurance Brokers Limited advises corporates, government
          institutions and individuals on risk management solutions; insurance portfolio selection and administration; and insurance claims processing — designing cover, negotiating terms and
          settling claims, so your capital stays protected.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Speak to a broker</a>
          <a href="#services" className="btn btn-ghost">See how we work</a>
        </div>

        <dl className="hero-credentials">
          <div>
            <dt>Established</dt>
            <dd>{company.founded}</dd>
          </div>
          <div>
            <dt>Registration</dt>
            <dd>{company.rc}</dd>
          </div>
          <div>
            <dt>Regulator</dt>
            <dd>NAICOM · RBC&nbsp;1041</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
