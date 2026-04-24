import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(0);
  const targetDate = new Date('2026-12-31T23:59:59').getTime();

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      setTimeLeft(difference);
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft <= 0) {
    return (
      <main className="app">
        <section className="card" aria-label="Countdown complete">
          <header className="card-header">
            <div className="badge" aria-hidden="true">
              React Countdown
            </div>
            <h1 className="title">Time is up!</h1>
            <p className="subtitle">The countdown has finished.</p>
          </header>

          <div className="divider" role="presentation" />

          <footer className="card-footer">
            <p className="fineprint">
              Built with React hooks. Update the target date in <code>App.js</code>.
            </p>
          </footer>
        </section>
      </main>
    );
  }

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <main className="app">
      <section className="card" aria-label="Countdown">
        <header className="card-header">
          <div className="badge" aria-hidden="true">
            React Countdown
          </div>
          <h1 className="title">Countdown to New Year</h1>
          <p className="subtitle">
            A clean, responsive countdown UI using <strong>useState</strong> and{' '}
            <strong>useEffect</strong>.
          </p>
        </header>

        <div className="divider" role="presentation" />

        <div className="countdown" aria-label="Countdown timer">
          <div className="time-box">
            <span className="time-value">{days}</span>
            <span className="time-label">Days</span>
          </div>

          <div className="time-box">
            <span className="time-value">{hours}</span>
            <span className="time-label">Hours</span>
          </div>

          <div className="time-box">
            <span className="time-value">{minutes}</span>
            <span className="time-label">Minutes</span>
          </div>

          <div className="time-box">
            <span className="time-value">{seconds}</span>
            <span className="time-label">Seconds</span>
          </div>
        </div>
        <footer className="card-footer">
          <p className="fineprint">
            Target date: <span className="mono">2026-12-31 23:59:59</span>
          </p>
        </footer>
      </section>
    </main>
  );
}
