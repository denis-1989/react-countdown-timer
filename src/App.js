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
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Time is up!</h1>
        <p>The countdown has finished.</p>
      </div>
    );
  }

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Countdown Timer</h1>
      <div style={{ fontSize: '40px', marginTop: '20px' }}>
        {days}d : {hours}h : {minutes}m : {seconds}s
      </div>
    </div>
  );
}