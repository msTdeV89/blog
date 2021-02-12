import React from "react";
import Panel from "../components/Panel";
import Login from "../components/Login";

const AdminPage = ({ themeIsLight, user }) => {
  return (
    <div className={`${themeIsLight ? "page" : "page page--isDark"} adminPage`}>
      {user ? <Panel /> : <Login />}
    </div>
  );
};

export default AdminPage;
