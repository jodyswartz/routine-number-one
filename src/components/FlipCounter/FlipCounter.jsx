import { useEffect, useRef, useState } from 'react';
import styles from './FlipCounter.module.css';

function formatValue(value) {
  return String(value).padStart(2, '0');
}

export function FlipCounter({ label, value }) {
  const previousValue = useRef(value);
  const [flipTick, setFlipTick] = useState(0);
  const digits = formatValue(value).split('');

  useEffect(() => {
    if (previousValue.current === value) {
      return undefined;
    }

    previousValue.current = value;
    setFlipTick((currentTick) => currentTick + 1);
  }, [value]);

  return (
    <div className={styles.wrap} role="group" aria-label={`${label}: ${value}`}>
      <div className={styles.counter} aria-hidden="true">
        {digits.map((digit, index) => (
          <span className={`${styles.card} ${flipTick > 0 ? styles.flip : ''}`} key={`${flipTick}-${digits.length}-${index}`}>
            <span className={styles.top}>{digit}</span>
            <span className={styles.bottom}>{digit}</span>
            <span className={styles.divider} />
          </span>
        ))}
      </div>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
