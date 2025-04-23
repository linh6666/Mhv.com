import { Image, SimpleGrid, Text, Stack } from "@mantine/core";
import { IconDiamonds } from "@tabler/icons-react";
import React, { useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks"; // ✅ Hook kiểm tra độ rộng màn hình
import styles from "./ImageGallery.module.css";

export default function ModelInteractive() {
  const [hoveredFloor, setHoveredFloor] = useState<number | null>(null);
  // Để xử lý click trên mobile

  // ✅ Kiểm tra nếu đang là thiết bị mobile (độ rộng tối đa 768px)
  const isMobile = useMediaQuery("(max-width: 768px)");

  // ✅ Xác định tầng nào đang được hover/touch
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return; // ❌ Không xử lý hover trên mobile

    const imageHeight = e.currentTarget.getBoundingClientRect().height;
    const mouseY = e.clientY - e.currentTarget.getBoundingClientRect().top;
    setHoveredFloor(mouseY < imageHeight * 0.5 ? 1 : 2); // Trên nửa ảnh là tầng 1, dưới là tầng 2
  };

  const handleTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    const imageHeight = e.currentTarget.getBoundingClientRect().height;
    const touchY =
      e.touches[0].clientY - e.currentTarget.getBoundingClientRect().top;
    setHoveredFloor(touchY < imageHeight * 0.5 ? 1 : 2);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setHoveredFloor(null); // Không tắt hover trên mobile
  };

  const handleMouseEnter = (floor: number) => {
    if (isMobile) return; // ❌ Không xử lý hover trên mobile
    setHoveredFloor(floor);
  };

  return (
    <SimpleGrid cols={2} spacing="xl" className={styles.simpleGrid}>
      {/* ✅ Cột trái: phần hình ảnh tương tác */}
      <div
        className={styles.imageWrapper}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouch}
        onTouchEnd={() => setHoveredFloor(null)}
      >
        {/* ✅ Ảnh nền: hiển thị khác nhau trên desktop & mobile */}
        <Image
          src={
            isMobile
              ? "/assets/images/INTERACTIVE/model_color.png" // ảnh cho mobile
              : "/assets/images/INTERACTIVE/model_bw.png" // ảnh cho desktop
          }
          alt="Model"
          className={styles.image}
        />

        {/* ✅ Overlay cho tầng 1 (Residential) */}
        <div
          className={`${styles.floorOverlay} ${
            hoveredFloor === 1 && !isMobile ? styles.show : "" // Chỉ hiển thị trên web, không trên mobile
          }`}
        >
          <Image
            src="/assets/images/INTERACTIVE/recidential.png"
            alt="Residential"
          />
          <Text className={`${styles.overlayText} ${styles.overlayText1}`}>
            Residential
          </Text>
        </div>

        {/* ✅ Overlay cho tầng 2 (Commercial) */}
        <div
          className={`${styles.floorOverlay} ${
            hoveredFloor === 2 && !isMobile ? styles.show : "" // Chỉ hiển thị trên web, không trên mobile
          }`}
        >
          <Image
            src="/assets/images/INTERACTIVE/commercial.png"
            alt="Commercial"
          />
          <Text className={`${styles.overlayText} ${styles.overlayText2}`}>
            Commercial
          </Text>
        </div>
      </div>

      {/* ✅ Cột phải: danh sách key area (click vào tên để hover tầng, có thể có link) */}
      <Stack className={styles.keyAreas}>
        <Text fw={500} className={styles.keyAreasTitle}>
          Key Areas
        </Text>

        {/* ✅ Mục Residential (chỉ hover, không có link) */}
        <Link
          href="/residential" // ✅ Đường dẫn bạn muốn chuyển đến
          className={styles.keyAreaItem} // ✅ Dùng class này trên Link để giữ layout
          style={{ textDecoration: "none" }} // ✅ Bỏ gạch chân
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          // Chỉ xử lý click trên mobile
          onTouchEnd={() => setHoveredFloor(null)}
        >
           <div className={styles.diamondShape}></div>
          <Text className={styles.keyAreaItemText}>Residential</Text>
        </Link>

        {/* ✅ Mục Commercial (có link đến trang /commercial) */}
        <Link
          href="/commercial"
          className={styles.keyAreaItem}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
          // Chỉ xử lý click trên mobile
          onTouchEnd={() => setHoveredFloor(null)}
          style={{ textDecoration: "none" }}
        >
            <div className={styles.diamondShape}></div>
          <Text className={styles.keyAreaItemText}>Commercial</Text>
        </Link>
      </Stack>
    </SimpleGrid>
  );
}
