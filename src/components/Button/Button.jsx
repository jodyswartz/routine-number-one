import styles from './Button.module.css';

export function Button({
  ariaLabel,
  children,
  className = '',
  disabled = false,
  onClick,
  size = 'standard',
  tone = 'rose',
}) {
  return (
    <button
      aria-label={ariaLabel}
      className={`${styles.button} ${styles[tone]} ${styles[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
