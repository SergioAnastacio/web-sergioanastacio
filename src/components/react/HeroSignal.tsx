import { useEffect, useState } from 'react';

const signals = [
  {
    label: 'Mobile Apps',
    detail: 'iOS / Android product URLs',
  },
  {
    label: 'Cloud Systems',
    detail: 'APIs, CI/CD, deployment paths',
  },
  {
    label: 'AI Products',
    detail: 'Automation and assistant workflows',
  },
];

export default function HeroSignal() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % signals.length);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="hero-signal mt-8 max-w-3xl" aria-label="Áreas activas">
      <div className="hero-signal__header">
        <span>Active build areas</span>
        <span>Static-first Astro</span>
      </div>
      <div className="hero-signal__grid">
        {signals.map((signal, index) => (
          <button
            className={index === active ? 'is-active' : ''}
            key={signal.label}
            type="button"
            onClick={() => setActive(index)}
          >
            <span>{signal.label}</span>
            <small>{signal.detail}</small>
          </button>
        ))}
      </div>
    </div>
  );
}
