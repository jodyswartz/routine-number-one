import { useEffect, useRef } from 'react';
import { counter, flipClock, theme } from 'flipclock';
import 'flipclock/themes/flipclock';
import styles from './FlipCounter.module.css';

const formatValue = (number) => String(Math.max(0, number)).padStart(2, '0');

export function FlipCounter({ label, value }) {
  const mountRef = useRef(null);
  const clockRef = useRef(null);
  const faceRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current || clockRef.current) return undefined;

    const face = counter({
      value,
      format: formatValue,
    });

    const clock = flipClock({
      face,
      theme: theme(),
      autoStart: false,
      timer: 1000,
    });

    clock.mount(mountRef.current);
    clock.stop();

    faceRef.current = face;
    clockRef.current = clock;

    return () => {
      clock.unmount();
      faceRef.current = null;
      clockRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!faceRef.current) return;

    faceRef.current.value.value = value;
  }, [value]);

  return (
    <div className={styles.wrap} role="group" aria-label={`${label}: ${value}`}>
      <div className={styles.counterShell} aria-hidden="true" ref={mountRef} />
      <p className={styles.label}>{label}</p>
    </div>
  );
}
