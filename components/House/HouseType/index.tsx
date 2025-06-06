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
  description?: string;
  [key: string]: any;
}

const HouseTypePage: React.FC = () => {
  const params = useParams();
  const router = useRouter();

  // Lấy zone và type từ params URL
  const zone = params?.zone ? (Array.isArray(params.zone) ? params.zone[0] : params.zone) : "";
  const type = params?.type ? (Array.isArray(params.type) ? params.type[0] : params.type) : "";

  const [buildingDetail, setBuildingDetail] = useState<BuildingDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState<boolean>(false);
  const [detailError, setDetailError] = useState<string>("");

  const handleGoBack = () => {
    router.push("/phan-khu");
  };

  useEffect(() => {
    async function fetchDetail(zoneParam: string, typeName: string) {
      if (!zoneParam || !typeName) {
        setDetailError("Thiếu tham số phân khu hoặc loại nhà");
        setBuildingDetail(null);
        return;
      }
      try {
        setDetailLoading(true);
        setDetailError("");
        setBuildingDetail(null);

        const apiUrl = API_ROUTE.GET_AREA_DETAIL_BY_TYPE(zoneParam, typeName);

        console.log("Gọi API URL:", apiUrl);

        const res = await apiarea.get(apiUrl);

        console.log("Data response:", res.data);

        if (res.data.records && res.data.records.length > 0) {
          setBuildingDetail(res.data.records[0]);
        } else {
          setDetailError("Không tìm thấy dữ liệu cho loại nhà này");
        }
      } catch (error) {
        console.error("Lỗi khi tải chi tiết:", error);
        setDetailError("Lỗi tải chi tiết");
        setBuildingDetail(null);
      } finally {
        setDetailLoading(false);
      }
    }

    fetchDetail(zone, type);
  }, [zone, type]);

  return (
    <div className={styles.container} style={{ position: "relative" }}>
      <div className={styles.logoWrapper}>
        <img src="/logo.png" alt="Eco Retreat Logo" className={styles.logoImage} />
      </div>

      <div style={{ marginTop: 40 }}>
        {detailLoading ? (
          <p>Đang tải chi tiết...</p>
        ) : detailError ? (
          <p style={{ color: "red" }}>{detailError}</p>
        ) : buildingDetail ? (
          <div className={styles.detailContainer}>
            <h3>Chi tiết loại nhà: {type}</h3>
            <pre>{JSON.stringify(buildingDetail, null, 2)}</pre>
          </div>
        ) : (
          <p>Không có chi tiết để hiển thị hoặc chưa chọn loại nhà</p>
        )}
      </div>

      <div className={styles.bottomButtons}>
        <Button variant="filled" className={styles.bottomButton} onClick={handleGoBack}>
          <IconChevronsLeft size={20} />
        </Button>
      </div>
    </div>
  );
};

export default HouseTypePage;

