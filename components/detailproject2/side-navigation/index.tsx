// SideNavigation.tsx
'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";
import {
  IconSettings,
  IconMessageCircle,
  IconMoon,
} from "@tabler/icons-react";
import styles from "./SideNavigation.module.css";

export const SideNavigation = () => {
  const toggleNightMode = () => {
    // Logic chuyển chế độ night mode
    console.log("Night mode toggled");
  };

  return (
    <div className={styles.container} style={{ position: "relative" }}>
      {/* Logo and title */}
      <div className={styles.logoWrapper}>
        <div>
          <img
            src="/logo.png"
            alt="Eco Retreat Logo"
            className={styles.logoImage}
          />
        </div>
      </div>

      {/* Main heading */}
      <h2 className={styles.mainHeading}>TRANG CHỦ</h2>

      {/* Navigation buttons */}
      <div className={styles.buttonGroup}>
        <NavigationButton label="GIỚI THIỆU DỰ ÁN" href="/gioi-thieu" />
        <NavigationButton label="HỆ THỐNG PHÂN KHU" href="/phan-khu" />
        <NavigationButton label="HỆ THỐNG TIỆN ÍCH" href="/tien-ich" />
        <NavigationButton label="HIỆU ỨNG ÁNH SÁNG" href="/hieu-ung" />
        <NavigationButton label="THƯ VIỆN HÌNH ẢNH" href="/hinh-anh" />
        <NavigationButton label="THƯ VIỆN VIDEO" href="/video" />
        <NavigationButton label="TRỢ GIÚP" href="/tro-giup" />
        <NavigationButton label="THOÁT" href="/thoat" />
      </div>

      {/* Bottom fixed buttons */}
      <div className={styles.bottomButtons}>
        <Button variant="filled" className={styles.bottomButton}>
          <IconSettings size={20} />
        </Button>
        <Button variant="filled" className={styles.bottomButton}>
          <IconMessageCircle size={20} style={{ marginRight: 6 }} />
          SUNSET
        </Button>
        <Button
          variant="filled"
          className={`${styles.bottomButton} ${styles.nightButton}`}
          onClick={toggleNightMode}
        >
          <IconMoon size={20} />
        </Button>
      </div>
    </div>
  );
};

interface NavigationButtonProps {
  label: string;
  href: string;
}

const NavigationButton = ({ label, href }: NavigationButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Button className={styles.button} onClick={handleClick}>
      {label}
    </Button>
  );
};
