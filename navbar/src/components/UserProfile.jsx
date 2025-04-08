import React, { useEffect, useState } from "react";

const UserProfile = ({ theme }) => {
    const [profile, setProfile] = useState(() => {
        const storedProfile = localStorage.getItem('profile');

        return storedProfile
            ? JSON.parse(storedProfile)
            : {
                name: "Herbert Schildt",
                email: "herbertschildt@gmail.com",
                bio: "Programming Author",
                theme: "light",
                notification: true,
            }
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...profile });

    useEffect(() => {
        localStorage.setItem("userProfile",JSON.stringify(profile));
    },[profile]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProfile({ ...formData });
        setIsEditing(false);
    };

    const styles = {
        container: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme === "light" ? "#f3f4f6" : "#0f172a",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            transition: "all 0.3s ease",
            padding: "20px",
            boxSizing: "border-box",
        },
        profileBox: {
            width: "100%",
            maxWidth: "450px",
            padding: "30px",
            borderRadius: "16px",
            backgroundColor: theme === "light" ? "#ffffff" : "#1e293b",
            boxShadow: theme === "light"
                ? "0 8px 20px rgba(0, 0, 0, 0.1)"
                : "0 8px 20px rgba(0, 0, 0, 0.4)",
            color: theme === "light" ? "#111827" : "#f1f5f9",
            textAlign: "left",
            transition: "all 0.3s ease",
        },
        input: {
            display: "block",
            width: "90%",
            padding: "12px 15px",
            fontSize: "15px",
            border: `1px solid ${theme === "light" ? "#d1d5db" : "#334155"}`,
            borderRadius: "8px",
            backgroundColor: theme === "light" ? "#f9fafb" : "#334155",
            color: theme === "light" ? "#111827" : "#f8fafc",
            marginBottom: "16px",
            outline: "none",
            transition: "all 0.2s ease",
        },
        button: {
            padding: "12px 20px",
            fontSize: "15px",
            fontWeight: "600",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "10px",
            backgroundColor: theme === "light" ? "#2563eb" : "#38bdf8",
            color: "#fff",
            transition: "background-color 0.2s ease",
        },
        buttonSecondary: {
            padding: "12px 20px",
            fontSize: "15px",
            fontWeight: "600",
            border: "1px solid #ccc",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "10px",
            backgroundColor: "transparent",
            color: theme === "light" ? "#111827" : "#f8fafc",
        },
        heading: {
            marginBottom: "20px",
            fontSize: "22px",
            fontWeight: "700",
        },
        label: {
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "6px",
            display: "block",
        },
    };
    
    return (
        <div style={styles.container}>
            <div style={styles.profileBox}>

                {!isEditing ? (
                    <div>
                        <h3>{profile.name}</h3>
                        <p>{profile.email}</p>
                        <p>{profile.bio}</p>
                        <button style={styles.button} onClick={() => setIsEditing(true)}>Edit</button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        <input
                            type="text"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            style={styles.input}
                        />
                        <button type="submit" style={styles.button}>Save</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
