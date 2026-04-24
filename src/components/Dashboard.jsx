import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div style={{
        flex: 1,
        background: "black",
        color: "white",
        padding: "20px"
      }}>
        <h1 style={{ color: "#facc15" }}>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;