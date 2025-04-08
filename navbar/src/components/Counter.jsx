import React, { useState, useEffect } from "react";

const Counter = ({ theme }) => {
    const [count, setCount] = useState(0);
    const [isAutoIncrementing, setIsAutoIncrementing] = useState(false);

    useEffect(() => {
        const savedCount = JSON.parse(localStorage.getItem("count")) || 0;
        setCount(savedCount);
    }, []);

    useEffect(() => {
        localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    useEffect(() => {
        let interval;
        if (isAutoIncrementing && count < 100) {
            interval = setInterval(() => {
                setCount((prev) => (prev < 100 ? prev + 1 : 100));
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isAutoIncrementing, count]);

    const styles = {
        container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme === "light" ? "#f4f4f8" : "#1e1e2f",
            fontFamily: "Segoe UI, Roboto, sans-serif",
        },
        counterBox: {
            width: "380px",
            padding: "30px",
            backgroundColor: theme === "light" ? "#ffffff" : "#2a2a3d",
            borderRadius: "16px",
            boxShadow: theme === "light"
                ? "0 4px 20px rgba(0, 0, 0, 0.1)"
                : "0 4px 20px rgba(0, 0, 0, 0.4)",
            textAlign: "center",
            color: theme === "light" ? "#222" : "#f5f5f5",
        },
        title: {
            fontSize: "24px",
            marginBottom: "20px",
            fontWeight: "600",
        },
        countText: {
            fontSize: "64px",
            fontWeight: "700",
            marginBottom: "30px",
            letterSpacing: "1px",
        },
        buttonGroup: {
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            justifyContent: "center",
        },
        button: {
            flex: "1 1 40%",
            minWidth: "100px",
            padding: "12px",
            fontSize: "16px",
            fontWeight: "500",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s ease",
        },
        increment: {
            backgroundColor: "#28a745",
            color: "#fff",
        },
        decrement: {
            backgroundColor: "#dc3545",
            color: "#fff",
        },
        autoIncrement: {
            backgroundColor: "#007bff",
            color: "#fff",
        },
        reset: {
            backgroundColor: "#6c757d",
            color: "#fff",
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.counterBox}>
                <h2 style={styles.title}> Counter</h2>
                <p style={styles.countText}>{count}</p>
                <div style={styles.buttonGroup}>
                    <button
                        style={{ ...styles.button, ...styles.increment }}
                        onClick={() => setCount((prev) => (prev < 100 ? prev + 1 : 100))}
                    >
                        +
                    </button>
                    <button
                        style={{ ...styles.button, ...styles.decrement }}
                        onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}
                    >
                        -
                    </button>
                    <button
                        style={{ ...styles.button, ...styles.autoIncrement }}
                        onClick={() => setIsAutoIncrementing(!isAutoIncrementing)}
                    >
                        {isAutoIncrementing ? "Stop Auto" : "Auto Increment"}
                    </button>
                    <button
                        style={{ ...styles.button, ...styles.reset }}
                        onClick={() => {
                            setCount(0);
                            setIsAutoIncrementing(false);
                            localStorage.setItem("count", JSON.stringify(0));
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
