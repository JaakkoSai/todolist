import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Todolist from "./Todolist";

function TabApp() {
  const [value, setValue] = useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Tabs value={value} onChange={handleChange} centered>
        <Tab value="home" label="Home" />
        <Tab value="todolist" label="Todolist" />
      </Tabs>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {value === "home" && <div style={{ fontSize: "24px" }}>Homepage</div>}
        {value === "todolist" && <Todolist />}
      </div>
    </div>
  );
}

export default TabApp;
