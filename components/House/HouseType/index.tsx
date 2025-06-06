'use client';

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@mantine/core";
import { IconChevronsLeft } from "@tabler/icons-react";
import styles from "./HouseType.module.css";
import { apiarea } from "../../../library/axios";
import { API_ROUTE } from "../../../const/apiRouter";

interface BuildingDetail {
  id?: string;
  building_name?: string;
  building_type?: string;
  zone?: string;
  zone_name?: string;
  amenity?: string;
  amenity_type?: string;
  [key: string]: any;
}

interface HouseTypePageProps {
  zoneParam: string;
  
}

const HouseTypePage: React.FC<HouseTypePageProps> = ({ zoneParam }) => {
  const params = useParams();
  const router = useRouter();

  // Lấy type từ URL param, nếu không có thì rỗng
  const typeRaw = params?.type ?? "";
  const type = decodeURIComponent(Array.isArray(typeRaw) ? typeRaw[0] : typeRaw);

  const [buildingDetails, setBuildingDetails] = useState<BuildingDetail[]>([]);
  const [detailLoading, setDetailLoading] = useState<boolean>(false);
  const [detailError, setDetailError] = useState<string>("");

  const handleGoBack = () => {
    router.push(`/building-type/${encodeURIComponent(zoneParam)}`);
  };

  // Khi click vào 1 loại nhà thì push URL mới với type tương ứng để cập nhật ảnh ở component cha
  const handleSelectType = (selectedType: string) => {
    router.push(`/building-type/${encodeURIComponent(zoneParam)}/${encodeURIComponent(selectedType)}`);
  };

  useEffect(() => {
    async function fetchDetail(zone: string, typeName: string) {
      if (!zone || !typeName) {
        setDetailError("Thiếu tham số phân khu hoặc loại nhà");
        setBuildingDetails([]);
        return;
      }

      try {
        setDetailLoading(true);
        setDetailError("");
        setBuildingDetails([]);

        const apiUrl = API_ROUTE.GET_AREA_DETAIL_BY_TYPE(zone, typeName);
        console.log("Gọi API URL:", apiUrl);

        const res = await apiarea.get(apiUrl);
        console.log("Data response:", res.data);

        if (res.data.records && res.data.records.length > 0) {
          setBuildingDetails(res.data.records);
        } else {
          setDetailError("Không tìm thấy dữ liệu cho loại nhà này");
        }
      } catch (error) {
        console.error("Lỗi khi tải chi tiết:", error);
        setDetailError("Lỗi tải chi tiết");
        setBuildingDetails([]);
      } finally {
        setDetailLoading(false);
      }
    }

    // Chỉ fetch nếu có type
    if (type) {
      fetchDetail(zoneParam, type);
    } else {
      // Nếu chưa có type thì reset data
      setBuildingDetails([]);
      setDetailError("");
    }
  }, [zoneParam, type]);

  return (
    <div className={styles.container} style={{ position: "relative" }}>
      <div className={styles.logoWrapper}>
        <img src="/logo.png" alt="Eco Retreat Logo" className={styles.logoImage} />
      </div>

      {detailLoading ? (
        <p>Đang tải chi tiết...</p>
      ) : detailError ? (
        <p style={{ color: "red" }}>{detailError}</p>
      ) : buildingDetails.length === 0 && type ? (
        <p>Không có loại nhà nào</p>
      ) : (
        <>
          <h2 className={styles.mainHeading}>{type || "Chọn loại nhà"}</h2>
          <div className={styles.buttonGroup}>
            {buildingDetails.map((detail) => {
              const buildingType = detail.building_name?.trim() || "Không rõ loại nhà";

              return (
                <Button
                  key={detail.id || buildingType}
                  className={styles.button}
                  title={detail.building_name}
                  onClick={() => handleSelectType(buildingType)}
                  color={buildingType === type ? "blue" : undefined}
                >
                  {buildingType}
                </Button>
              );
            })}
          </div>
        </>
      )}

      <div className={styles.bottomButtons}>
        <Button variant="filled" className={styles.bottomButton} onClick={handleGoBack}>
          <IconChevronsLeft size={20} />
        </Button>
      </div>
    </div>
  );
};

export default HouseTypePage;


