'use client';

import React from "react";
import { useParams } from "next/navigation";
import HouseTypePage from "./HouseType/index";
import styles from "./House.module.css";
import { slugify } from "../../library/slugify";

export default function App() {
  const params = useParams();

  // Nếu params null thì không render gì hoặc trả fallback
  if (!params) {
    return <div>Đang tải...</div>; // hoặc spinner
  }

  const rawZoneParam = typeof params.zone === "string" ? params.zone : "";
  const rawTypeParam = typeof params.type === "string" ? params.type : "";

  const zoneParam = decodeURIComponent(rawZoneParam);
  const typeParam = decodeURIComponent(rawTypeParam);

  const zoneSlug = slugify(zoneParam);
  const typeSlug = typeParam ? slugify(typeParam) : zoneSlug;

  const imageUrl = `/assets/giaodien/${zoneSlug}/${typeSlug}.png`;

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <img
          className={styles.image}
          src={imageUrl}
          alt={`Hình ảnh ${zoneParam} - ${typeParam || "default"}`}
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = `/assets/giaodien/${zoneSlug}/${zoneSlug}.png`;
          }}
        />
      </div>
      <HouseTypePage zoneParam={zoneParam} />
    </div>
  );
}
