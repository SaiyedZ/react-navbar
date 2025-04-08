import React from 'react';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        background: theme === 'light'
          ? 'linear-gradient(145deg, #e2e8f0, #ffffff)'
          : 'linear-gradient(145deg, #1f2937, #111827)',
        color: theme === 'light' ? '#1f2937' : '#f9fafb',
        border: '1px solid',
        borderColor: theme === 'light' ? '#cbd5e1' : '#374151',
        borderRadius: '50%',
        width: '64px',
        height: '64px',
        fontSize: '26px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow:
          theme === 'light'
            ? '4px 4px 12px rgba(0, 0, 0, 0.1), -2px -2px 8px rgba(255, 255, 255, 0.6)'
            : '4px 4px 12px rgba(0, 0, 0, 0.4), -2px -2px 8px rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.4s ease',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
      }}
    >
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: theme === 'light' ? 'rotate(0deg)' : 'rotate(360deg)',
          transition: 'transform 0.6s ease-in-out',
          fontSize: '28px',
        }}
      >
        {theme === 'light' ? '🌙' : '🌞'}
      </span>
    </button>
  );
}

export default ThemeToggle;
