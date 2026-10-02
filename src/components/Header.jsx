import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import logo from '../assets/logo.png';
import { company } from '../data/content';
import './Header.css';

const LINKS = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#exposures', label: 'Risk Exposures' },
  { href: '#value', label: 'Value' },
  { href: '#products', label: 'Products' },
  { href: '#board', label: 'Board' },
  { href: '#contact', label: 'Contact' },
];

const ease = [0.22, 1, 0.36, 1];

const listVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.16 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
  closed: {
    opacity: 0,
    y: 18,
    transition: { duration: 0.22, ease },
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);

    const frame = requestAnimationFrame(() => firstLinkRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      cancelAnimationFrame(frame);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 960px)').matches) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const goTo = (href) => (event) => {
    event.preventDefault();
    document.body.style.overflow = '';
    setOpen(false);
    const target = document.querySelector(href);
    window.history.pushState(null, '', href);
    requestAnimationFrame(() => {
      target?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>{company.member}</span>
          <span className="topbar-contact">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span aria-hidden="true">·</span>
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a>
          </span>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
        <div className="container header-inner">
          <a href="#top" className="brand" onClick={goTo('#top')}>
            <img src={logo} alt="Kinetic Insurance Brokers" className="brand-mark" />
            <span className="brand-word">
              Kinetic
              <span className="brand-sub">Insurance Brokers</span>
            </span>
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary nav-cta">Speak to a broker</a>

          <button
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <motion.nav
        id="mobile-nav"
        className="nav-mobile"
        aria-label="Primary mobile"
        aria-hidden={!open}
        inert={open ? undefined : true}
        initial={false}
        animate={
          reduceMotion
            ? { opacity: open ? 1 : 0 }
            : { y: open ? 0 : '-100%' }
        }
        transition={{ duration: reduceMotion ? 0.18 : 0.55, ease }}
      >
        <motion.div
          className="nav-mobile-inner"
          initial={false}
          animate={open ? 'open' : 'closed'}
          variants={reduceMotion ? undefined : listVariants}
        >
          <div className="nav-mobile-links">
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={goTo(l.href)}
                variants={reduceMotion ? undefined : itemVariants}
                tabIndex={open ? 0 : -1}
              >
                <span className="nav-mobile-index">{String(i + 1).padStart(2, '0')}</span>
                {l.label}
              </motion.a>
            ))}
          </div>

          <motion.div
            className="nav-mobile-footer"
            variants={reduceMotion ? undefined : itemVariants}
          >
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={goTo('#contact')}
              tabIndex={open ? 0 : -1}
            >
              Speak to a broker
            </a>
            <p>
              <a href={`mailto:${company.email}`} tabIndex={open ? 0 : -1}>{company.email}</a>
              <span aria-hidden="true"> · </span>
              <a href={`tel:${company.phone.replace(/\s/g, '')}`} tabIndex={open ? 0 : -1}>{company.phone}</a>
            </p>
          </motion.div>
        </motion.div>
      </motion.nav>
    </>
  );
}
