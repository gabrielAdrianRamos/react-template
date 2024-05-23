import React from "react";
import styles from "./Admin.module.scss";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "../../components/admin/home/Home";
import Profile from "../../components/admin/profile/Profile";
import Subscription from "../../components/admin/subscription/Subscription";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Subscription />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
