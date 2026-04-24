import React from "react";

const Sidebar = () => {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#0a0a0a",
      borderRight: "1px solid #facc15",
      padding: "20px",
      color: "white"
    }}>
      <h2 style={{ color: "#facc15" }}>ADMIN</h2>

      <p>Dashboard</p>
      <p>Users</p>
      <p>Settings</p>
    </div>
  );
};

export default Sidebar;