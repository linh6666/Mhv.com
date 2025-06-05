'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react";
import styles from "./sideArea.module.css";

import { apiarea } from "../../../library/axios";       // sửa đường dẫn phù hợp
import { API_ROUTE } from "../../../const/apiRouter"; // sửa đường dẫn phù hợp

interface MenuItem {
  zone_name: string;
  href: string;
}

export const SideNavigation = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await apiarea.get(API_ROUTE.GET_AREA); // gọi API
        // res.data có dạng { count: number, records: MenuItem[] }
        const data = res.data.records as MenuItem[];  // Lấy mảng records
        setMenuItems(data);
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
          <NavigationButton key={item.href} label={item.zone_name} href={item.href} />
        ))}
      </div>

      <div className={styles.bottomButtons}>
        <Button variant="filled" className={styles.bottomButton}>
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
