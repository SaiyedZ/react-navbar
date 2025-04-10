import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import UserProfile from "./components/UserProfile";
import Home from "./components/Home";
import Counter from "./components/Counter";
import List from "./components/List";

const styles = {
  light: {
    bg: "#fff",
    text: "#333",
    card: "#f5f5f5",
    border: "#ddd",
  },
  dark: {
    bg: "#333",
    text: "#fff",
    card: "#444",
    border: "#555",
  },
};

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.style.background = styles[theme].bg;
    document.body.style.color = styles[theme].text;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />
      <main>
        {activeTab === "home" && <Home theme={theme} />}
        {activeTab === "todos" && <TodoList theme={theme} />}
        {activeTab === "profile" && <UserProfile theme={theme} />}
        {activeTab === "counter" && <Counter theme={theme} />}
        {activeTab === "list" && <List theme={theme} />}
        
      </main>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
