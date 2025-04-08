import React from 'react';

function Home({ theme }) {
    const isLight = theme === "light";

    const homeStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        textAlign: "center",
        background: isLight
            ? "linear-gradient(to right, #f8f9fa, #e9ecef)"
            : "linear-gradient(to right, #1e1e2f, #2c2c3c)",
        color: isLight ? "#1f2937" : "#f9fafb",
        padding: "40px",
        transition: "all 0.3s ease-in-out",
    };

    const textStyle = {
        fontSize: "42px",
        fontWeight: "700",
        marginBottom: "20px",
        textShadow: isLight ? "1px 1px 2px #ccc" : "1px 1px 3px #000",
    };

    const paragraphStyle = {
        fontSize: "20px",
        maxWidth: "700px",
        lineHeight: "1.8",
        opacity: "0.9",
        marginBottom: "30px",
        fontWeight: "400",
    };

    const buttonStyle = {
        padding: "14px 32px",
        fontSize: "18px",
        fontWeight: "600",
        background: isLight
            ? "linear-gradient(to right, #4facfe, #00f2fe)"
            : "linear-gradient(to right, #ff8a00, #e52e71)",
        color: "#fff",
        border: "none",
        borderRadius: "12px",
        cursor: "pointer",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    const handleMouseEnter = (e) => {
        e.target.style.transform = "scale(1.05)";
        e.target.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.25)";
    };

    const handleMouseLeave = (e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    };

    return (
        <div style={homeStyle}>
            <h1 style={textStyle}>Welcome to the Home Page ✨</h1>
            <p style={paragraphStyle}>
                This is your interactive home screen. Here you can start exploring the app and unlock your productivity tools. Ready to begin?
            </p>
            <button
                style={buttonStyle}
                onClick={() => alert("Hello!")}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Get Started 🚀
            </button>
        </div>
    );
}

export default Home;
