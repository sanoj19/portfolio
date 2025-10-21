import React, { useEffect, useState, useRef } from "react";

// Confetti type
const defaultConfettiOptions = {
  particleCount: 100,
  spread: 70,
  startVelocity: 45,
  decay: 0.9,
  gravity: 1,
  drift: 0,
  ticks: 200,
  origin: {
    x: 0.5,
    y: 0.5,
  },
  colors: ['#60a5fa', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b'],
  shapes: ['square', 'circle'],
  scalar: 1,
  zIndex: 1000,
  disableForReducedMotion: false,
};

// Global declaration
if (typeof window !== 'undefined') {
  window.confetti = window.confetti || null;
}

const ConfettiButton = React.forwardRef(({
  className = "",
  variant = "primary",
  size = "default",
  animation = "scale",
  children,
  icon,
  iconPosition = "left",
  loading = false,
  confettiOptions = defaultConfettiOptions,
  autoConfetti = false,
  triggerOnHover = false,
  onClick,
  disabled,
  ...props
}, ref) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const buttonRef = useRef(null);

  // Load confetti script dynamically
  useEffect(() => {
    if (!window.confetti) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } else {
      setScriptLoaded(true);
    }
  }, []);

  // Auto confetti on mount if needed
  useEffect(() => {
    if (scriptLoaded && autoConfetti && window.confetti && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      window.confetti({
        ...confettiOptions,
        origin: { x, y },
      });
    }
  }, [scriptLoaded, autoConfetti, confettiOptions]);

  const triggerConfetti = () => {
    if (scriptLoaded && window.confetti && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      window.confetti({
        ...confettiOptions,
        origin: { x, y },
      });
    }
  };


  return (
    <button
      ref={(node) => {
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
        buttonRef.current = node;
      }}
      style={{
        display: 'inline-block',
        padding: size === 'lg' ? '1rem 2rem' : '0.75rem 1.5rem',
        borderRadius: '0.5rem',
        textDecoration: 'none',
        fontWeight: '500',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        fontSize: size === 'lg' ? '1.125rem' : '1rem',
        backgroundColor: variant === 'primary' ? 'var(--primary-color)' : 'transparent',
        color: variant === 'primary' ? 'white' : 'var(--primary-color)',
        border: variant === 'primary' ? 'none' : '2px solid var(--primary-color)',
        opacity: disabled || loading ? 0.7 : 1,
        pointerEvents: disabled || loading ? 'none' : 'auto',
        ...props.style
      }}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
        }
        if (triggerOnHover) triggerConfetti();
      }}
      onMouseLeave={(e) => {
        if (!disabled && !loading) {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }
      }}
      onClick={(e) => {
        if (scriptLoaded) {
          triggerConfetti();
        }
        onClick?.(e);
      }}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <svg className="h-4 w-4 mr-2 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!loading && icon && iconPosition === "left" && (
        <span className="mr-1">{icon}</span>
      )}
      {children}
      {!loading && icon && iconPosition === "right" && (
        <span className="ml-1">{icon}</span>
      )}
    </button>
  );
});

ConfettiButton.displayName = "ConfettiButton";

export default ConfettiButton;
