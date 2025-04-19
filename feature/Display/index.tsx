"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import classes from "./display.module.css";
import { IconArrowRight } from "@tabler/icons-react";

type Project = {
  img: string;
  title: string;
  client: string;
  scale: string;
  dimension: string;
  production: string;
  className: string;
  link: string;
};

const projects: Project[] = [
  {
    img: "/assets/images/portfolio/2023- DIAMOND RIVER 1-140 (2).JPG",
    title: "Diamond River",
    client: "SUNSHINE GROUP",
    scale: "1:140",
    dimension: "5,000 x 2,200 mm",
    production: "2023",
    className: "high-rise",
    link: "/projects/diamond-river",
  },
  {
    img: "/assets/images/portfolio/BAY OF LIGHTS (2).jpg",
    title: "BAY OF LIGHTS",
    client: "CANOPY SANDS DEVELOPMENT",
    scale: "1/700",
    dimension: "6600 x 12000 mm",
    production: "October 2023",
    className: "urban",
    link: "/projects/bay-of-lights",
  },
  {
    img: "/assets/images/portfolio/2020- BRG PARK RESIDENCES 1-100 (5).JPG",
    title: "BRG PARK RESIDENCES",
    client: "BRG GROUP",
    scale: "1:100",
    dimension: "2,200 x 2,200 mm",
    production: "2020",
    className: "high-rise",
    link: "/projects/brg-park-residences",
  },
  {
    img: "/assets/images/portfolio/2024- LAYAN VERDE PHUKET (5).JPG",
    title: "LAYAN VERDE PHUKET",
    client: "LAYAN BEST VIEW",
    scale: "1/200",
    dimension: "2600 x 1800 mm",
    production: "November 2024",
    className: "commercial",
    link: "/projects/layan-verde-phuket",
  },
  {
    img: "/assets/images/portfolio/GARDEN VILLA (9).JPG",
    title: "GARDEN VILLA",
    client: "BIM GROUP",
    scale: "1/30",
    dimension: "900 x 900 mm",
    production: "2/2021",
    className: "interiors",
    link: "/projects/garden-villa",
  },
  {
    img: "/assets/images/portfolio/2024- SUNSHINE NOBLE 1-100 (11).jpg",
    title: "NOBLE CRYSTAL",
    client: "SUNSHINE E&C CONSTRUCTION., JSC",
    scale: "1:100",
    dimension: "4,800 x 2,400 mm",
    production: "2019",
    className: "high-rise",
    link: "/projects/noble-crystal",
  },
  {
    img: "/assets/images/portfolio/2023- DU AN THANH XUAN 1-500 (3).jpg",
    title: "THANH XUAN VALLEY",
    client: "BIM GROUP",
    scale: "1/500",
    dimension: "6000 x 4000 mm",
    production: "Sep, 2023",
    className: "urban",
    link: "/projects/thanh-xuan-valley",
  },
  {
    img: "/assets/images/portfolio/DIA TRUNG HAI (2).jpg",
    title: "SUN PREMIER VILLAGE PRIMAVERA",
    client: "SUN GROUP",
    scale: "1/500",
    dimension: "3,000 x 1,500 mm",
    production: "November, 2021",
    className: "urban",
    link: "/projects/sun-premier-village",
  },
  {
    img: "/assets/images/portfolio/2023- PARK ZONE THANH XUAN 1-500 (3).JPG",
    title: "PARK ZONE",
    client: "BIM GROUP",
    scale: "1/300",
    dimension: "2,600 x 1,400 mm",
    production: "2023",
    className: "commercial",
    link: "/projects/park-zone",
  },
];

const Display = () => {
  const [selectedFilter, setSelectedFilter] = useState("*");

  const filteredProjects =
    selectedFilter === "*"
      ? projects
      : projects.filter((project) => project.className === selectedFilter);

  return (
    <section className="portfolio_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2 className={classes.title}>WHAT WE DO</h2>
        </div>

        <ul className={classes.filters_menu}>
          <li
            className={selectedFilter === "*" ? classes.active : ""}
            onClick={() => setSelectedFilter("*")}
          >
            All
          </li>
          <li
            className={selectedFilter === "urban" ? classes.active : ""}
            onClick={() => setSelectedFilter("urban")}
          >
            Urban Area Master Plan
          </li>
          <li
            className={selectedFilter === "high-rise" ? classes.active : ""}
            onClick={() => setSelectedFilter("high-rise")}
          >
            High-Rise
          </li>
          <li
            className={selectedFilter === "commercial" ? classes.active : ""}
            onClick={() => setSelectedFilter("commercial")}
          >
            Commercial
          </li>
          <li
            className={selectedFilter === "interiors" ? classes.active : ""}
            onClick={() => setSelectedFilter("interiors")}
          >
            Interiors
          </li>
        </ul>

        <div className="filters-content">
          <div className={classes.grid}>
            {filteredProjects.map((item, index) => (
              <div
                key={index}
                className={`${classes["box-item"]} all ${item.className}`}
              >
                <div className="box">
                  <div className={classes["img-box"]}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={classes["detail-box"]}>
                    <h5>{item.title}</h5>
                    <p>
                      Client: {item.client} <br />
                      Scale: {item.scale} <br />
                      Dimension: {item.dimension} <br />
                      Production time: {item.production}
                    </p>
                    <div className={classes["icon-link"]}>
                      <Link href={item.link}>
                        <IconArrowRight size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={classes["btn-box"]}>
          <Link href="">View More</Link>
        </div>
      </div>
    </section>
  );
};

export default Display;
