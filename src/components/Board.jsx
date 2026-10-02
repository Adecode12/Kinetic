import { useState } from 'react';
import { motion } from 'framer-motion';
import { board } from '../data/content';
import './Board.css';

const ease = [0.22, 1, 0.36, 1];

function initials(name) {
  return name
    .split(' ')
    .filter((w) => w[0] === w[0].toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
}

export default function Board() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="board" className="board">
      <div className="container">
        <div className="section-head">
          <span className="section-number">07 — Board of Directors</span>
          <h2>Wholly owned by Nigerians, led by seasoned professionals.</h2>
          <p className="led">
            Kinetic Insurance Brokers Limited is wholly owned by Nigerians,
            with a Board constituted by individuals with experience and
            exposure across finance, technology, law and insurance.
          </p>
        </div>

        <ul className="board-list">
          {board.map((member, i) => {
            const isOpen = openIndex === i;
            const bioId = `board-bio-${i}`;
            return (
              <li key={member.name} className={`board-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  className="board-summary"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={bioId}
                >
                  <span className="board-initials">{initials(member.name)}</span>
                  <span className="board-heading">
                    <span className="board-name">{member.name}</span>
                    <span className="board-role">{member.role} · {member.credentials}</span>
                  </span>
                  <motion.span
                    className="board-toggle"
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35, ease }}
                  >
                    +
                  </motion.span>
                </button>
                <div
                  id={bioId}
                  className="board-bio-wrap"
                  aria-hidden={!isOpen}
                >
                  <div className="board-bio-inner">
                    <p className="board-bio">{member.bio}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
