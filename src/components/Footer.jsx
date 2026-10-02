import logo from '../assets/logo.png';
import { company } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="" aria-hidden="true" />
          <span>{company.name}</span>
        </div>

        <div className="footer-reg">
          <p>{company.rc}</p>
          <p>{company.regulator}</p>
          <p>{company.member}</p>
        </div>

        <div className="footer-contact">
          <p>{company.address}</p>
          <p>
            <a href={`mailto:${company.email}`}>{company.email}</a> ·{' '}
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <span>{company.website}</span>
      </div>
    </footer>
  );
}
