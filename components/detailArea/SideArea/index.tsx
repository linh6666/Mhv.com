'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react";
import styles from "./sideArea.module.css";

import { apiarea } from "../../../library/axios"; // điều chỉnh theo cấu trúc dự án của bạn
import { API_ROUTE } from "../../../const/apiRouter"; // điều chỉnh theo cấu trúc dự án của bạn

interface MenuItem {
  zone_name: string;
  href: string;
}

export const SideNavigation = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const router = useRouter();
    const handleGoBack = () => {
    router.push("/Detail2"); // 👈 Đường dẫn trang muốn quay lại
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await apiarea.get(API_ROUTE.GET_AREA);
        const records = res.data.records as MenuItem[];

        // Bước 1: Chuẩn hóa tên phân khu (ví dụ: "Phân khu 1.9" -> "Phân khu 1")
        const normalized = records.map((item) => {
          const match = item.zone_name.match(/Phân khu\s*(\d+)/i);
          const zoneBase = match ? `Phân Khu ${match[1]}` : item.zone_name;
          return {
            ...item,
            zone_name: zoneBase,
          };
        });

        // Bước 2: Gộp các phân khu trùng tên
        const uniqueMap = new Map<string, MenuItem>();
        for (const item of normalized) {
          if (!uniqueMap.has(item.zone_name)) {
            uniqueMap.set(item.zone_name, item);
          }
        }

        const uniqueZones = Array.from(uniqueMap.values());
        setMenuItems(uniqueZones);
      } catch (error) {
        console.error("Lỗi khi tải menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div className={styles.container} style={{ position: "relative" }}>
      <div className={styles.logoWrapper}>
        <img src="/logo.png" alt="Eco Retreat Logo" className={styles.logoImage} />
      </div>

      <h2 className={styles.mainHeading}>Phân Khu</h2>

      <div className={styles.buttonGroup}>
        {menuItems.map((item) => (
          <NavigationButton key={item.zone_name} label={item.zone_name} href={item.href} />
        ))}
      </div>

      <div className={styles.bottomButtons}>
        <Button
      variant="filled"
      className={styles.bottomButton}
      onClick={handleGoBack}
    >
      <IconChevronsLeft size={20} />
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

