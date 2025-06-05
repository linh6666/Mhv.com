"use client";

import React from "react";


import { SideNavigation } from "./side-navigation/index";
import styles from "./App.module.css";
export default function App() {



  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <img
          className={styles.image}
          src="/assets/Project/home.jpg"
          alt="Eco Retreat Long An Aerial View"
        />
      </div>

      <SideNavigation />
    </div>
  );
}
