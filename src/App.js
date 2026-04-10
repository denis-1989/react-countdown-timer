
export default function App() {
  const targetDate = new Date('2026-12-31T23:59:59');

  const now = new Date();

  const difference = targetDate - now;

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Countdown Timer</h1>

      <div style={{ fontSize: '40px', marginTop: '20px' }}>
        {difference}
      </div>
    </div>
  );
}
