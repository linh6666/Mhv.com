"use client";
import { Image, SimpleGrid, Text, Stack } from "@mantine/core";
import { IconDiamonds } from "@tabler/icons-react";
import React from "react";
import Link from "next/link";

import styles from "./Level-18.module.css";

// Component hiển thị item tầng trong danh sách
const KeyAreaItem = ({ level, link }: { level: number; link: string }) => {
  return (
    <Link
      href={link}
      className={styles.keyAreaItem}
      style={{ textDecoration: "none" }}
    >
      <IconDiamonds size={30} color="#123d47" />
      <Text className={styles.keyAreaItemText}>Level {level}</Text>
    </Link>
  );
};

export default function ResidentialPage() {
  const levels = [
    { level: 21, link: "/residential/Level-21" },
    { level: 20, link: "/residential/Level-20" },
    { level: 19, link: "/residential/Level-19" },
    { level: 18, link: "/residential/Level-18" },
    { level: 17, link: "/residential/Level-17" },
    { level: 16, link: "/residential/Level-16" },
    { level: 15, link: "/residential/Level-15" },
    { level: 14, link: "/residential/Level-14" },
    { level: 13, link: "/residential/Level-13" },
    { level: 12, link: "/residential/Level-12" },
    { level: 11, link: "/residential/Level-11" },
    { level: 10, link: "/residential/Level-10" },
    { level: 9, link: "/residential/Level-9" },
    { level: 8, link: "/residential/Level-8" },
    { level: 7, link: "/residential/Level-7" },
    { level: 6, link: "/residential/Level-6" },
    { level: 5, link: "/residential/Level-5" },
    { level: 4, link: "/residential/Level-4" },
  ];

  return (
    <SimpleGrid cols={3} spacing="xl" className={styles.simpleGrid}>
      {/* Cột trái: hình ảnh tổng có polygon tương tác */}
      <div className={styles.imageWrapper}>
        <Image
          src="/assets/images/Levelimg/level-18.png"
          alt="Model"
          className={styles.image}
        />

        {/* SVG đè lên hình */}
        {/* <svg viewBox="0 0 900 500" className={styles.svgOverlay}>
          <polygon
            id="apt-path-accurate"
            className={styles.floorPolygon}
            points="
      60,30   120,20   180,20   240,20   300,20   360,20   420,20   480,20
      540,20  600,20   660,20   720,20   780,20   840,30   870,60
      870,180  870,320
      860,440   820,470   740,470   720,450   660,450   640,470   580,470
      560,450   500,450   480,470   420,470   400,450   340,450   320,470
      260,470   240,450   180,450   160,470   80,470   40,440   30,420
      30,320  30,180
      40,60
    "
          />
        </svg> */}

        {/* Ảnh nổi bật khi hover vào polygon */}
        {/* <Image
          src="/assets/images/Levelimg/level-20-21-hover.png"
          alt="Hover Highlight"
          className={styles.hoverImage}
        /> */}
      </div>

      {/* Cột giữa: Status */}
      <div className={styles.keyAreass}>
        <div>
          <Text fw={500} className={styles.keyAreasTitle}>
            Status
          </Text>
          <div>
            <div className={`${styles.statusContent} ${styles.available}`}>
              Available
            </div>
            <div className={`${styles.statusContent} ${styles.interested}`}>
              Interested
            </div>
            <div className={`${styles.statusContent} ${styles.deposit}`}>
              Deposit
            </div>
            <div className={`${styles.statusContent} ${styles.sold}`}>Sold</div>
          </div>
        </div>
        <div>
          <Text fw={500} className={styles.keyAreasTitle}>
            Key
          </Text>
          <div>
            <div className={`${styles.statusContent} ${styles.bed1}`}>
              1 Bedroom
            </div>
            <div className={`${styles.statusContent} ${styles.bed2}`}>
              2 Bedrooms
            </div>
            <div className={`${styles.statusContent} ${styles.bed3}`}>
              3 Bedrooms
            </div>
          </div>
        </div>
      </div>

      {/* Cột phải: danh sách tầng */}
      <Stack className={styles.keyAreas}>
        <Text fw={500} className={styles.keyAreasTitle}>
          Level
        </Text>
        <div className={styles.keyAreaList}>
          {levels.map(({ level, link }) => (
            <KeyAreaItem key={level} level={level} link={link} />
          ))}
        </div>
      </Stack>
    </SimpleGrid>
  );
}
