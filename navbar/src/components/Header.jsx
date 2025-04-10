import React from 'react';

function Header({ activeTab, setActiveTab, theme, toggleTheme }) {
  const navItem = [
    { id: "home", label: "Home" },
    { id: "todos", label: "Todo List" },
    { id: "profile", label: "User Profile" },
    { id: "counter", label: "Counter" },
    { id: "list", label: "List" },
  ];

  const isLight = theme === "light";

  const styles = {
    header: {
      width: "100%",
      padding: "16px 32px",
      background: isLight
        ? "linear-gradient(to right, #fdfbfb, #ebedee)"
        : "linear-gradient(to right, #232526, #414345)",
      color: isLight ? "#111827" : "#f9fafb",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
      boxShadow: isLight
        ? "0 4px 8px rgba(0,0,0,0.05)"
        : "0 4px 12px rgba(0,0,0,0.4)",
    },
    nav: {
      maxWidth: "1280px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      fontSize: "26px",
      fontWeight: "700",
      // background: isLight
      //   ? "linear-gradient(135deg, #6366f1, #3b82f6)"
      //   : "linear-gradient(135deg, #a78bfa, #f472b6)",
      background:"#6366f1",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "1px",
      textShadow: "1px 1px 1px rgba(0,0,0,0.1)",
    },
    navList: {
      display: "flex",
      gap: "28px",
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
    navItem: (isActive) => ({
      fontSize: "16px",
      fontWeight: "500",
      padding: "10px 18px",
      borderRadius: "999px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      background: isActive
        ? (isLight ? "#6366f1" : "#8b5cf6")
        : "transparent",
      color: isActive ? "#fff" : isLight ? "#374151" : "#d1d5db",
      boxShadow: isActive ? "0 2px 6px rgba(0,0,0,0.2)" : "none",
    }),
    toggleButton: {
      backgroundColor: isLight ? "#e0e7ff" : "#4b5563",
      color: isLight ? "#111827" : "#f9fafb",
      border: "none",
      padding: "8px 16px",
      borderRadius: "999px",
      fontSize: "16px",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
       

        <ul style={styles.navList}>
          {navItem.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={styles.navItem(activeTab === item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <button onClick={toggleTheme} style={styles.toggleButton}>
          {theme === "light" ? "🌙 Dark Mode" : "🌞 Light Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
