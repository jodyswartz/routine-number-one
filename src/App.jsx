import { useEffect, useState } from 'react';
import { Button } from './components/Button/Button.jsx';
import { FlipCounter } from './components/FlipCounter/FlipCounter.jsx';
import styles from './App.module.css';

const STORAGE_KEY = 'routine-no-1-count';

function getStoredCount() {
  const savedValue = window.localStorage.getItem(STORAGE_KEY);
  const parsedValue = Number.parseInt(savedValue ?? '0', 10);

  return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : 0;
}

function signalTouch() {
  if ('vibrate' in navigator) {
    navigator.vibrate(8);
  }
}

export default function App() {
  const [count, setCount] = useState(getStoredCount);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, String(count));
  }, [count]);

  const increment = () => {
    signalTouch();
    setCount((currentCount) => currentCount + 1);
  };

  const decrement = () => {
    signalTouch();
    setCount((currentCount) => Math.max(0, currentCount - 1));
  };

  const reset = () => {
    signalTouch();
    setCount(0);
  };

  return (
    <main className={styles.shell}>
      <section className={styles.panel} aria-labelledby="app-title">
        <header className={styles.header}>
          <p className={styles.kicker}>ROUTINE</p>
          <h1 id="app-title">No. 1</h1>
          <p className={styles.subtitle}>A counter for daily repetitions.</p>
        </header>

        <FlipCounter value={count} label="Completed sets" />

        <div className={styles.controls} aria-label="Counter controls">
          <Button ariaLabel="Subtract one set" onClick={decrement} disabled={count === 0} tone="rose">
            -
          </Button>
          <Button ariaLabel="Add one set" onClick={increment} tone="mustard">
            +
          </Button>
        </div>

        <Button
          ariaLabel="Reset set count to zero"
          className={styles.resetButton}
          disabled={count === 0}
          onClick={reset}
          size="slim"
          tone="ghost"
        >
          Reset
        </Button>
      </section>
    </main>
  );
}
