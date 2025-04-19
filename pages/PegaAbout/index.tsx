// components/AboutUs.tsx
import React from "react";
import Image from "next/image";
import styles from "./PagaAbout.module.css";

const logos = [
  "/logos/gmp.png",
  "/logos/dwp.png",
  "/logos/tahg.png",
  "/logos/aedas.png",
  "/logos/nihon.png",
  "/logos/thi.png",
];

const clients = [
  {
    name: "Nikken Sekkei Civil Engineering, Japan",
    desc: "Yen Binh Masterplan - Nong Ping Master Plan - Duong Dong, An Thoi Master Plan.",
  },
  {
    name: "Nikken Sekkei Head Office, Japan",
    desc: "Hochiminh City People Committee - Viettel Head Office.",
  },
  {
    name: "Aedas, England",
    desc: "Minh Khai Plaza.",
  },
  {
    name: "Nihon Sekkei, Japan",
    desc: "Viettel Head Office - Vietcom Bank Head Office.",
  },
  {
    name: "Kume Sekkei",
    desc: "Ecopark Apartments - The Manor Central Park Apartments.",
  },
  {
    name: "GMP, Germany",
    desc: "Viettel Head Office.",
  },
  {
    name: "Venture International Property, Dubai UAE",
    desc: "Royal palaces - Royal Tower.",
  },
  {
    name: "TAHG, Dubai UAE",
    desc: "Seaview Villas.",
  },
  {
    name: "Thurlow Corp, Melbourne Australia",
    desc: "Elisian Tower.",
  },
];

const AboutUs = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Title */}
        <div className={styles.titleBlock}>
          <h2>
            A<span>Bout us</span>
          </h2>
        </div>

        {/* Right Text */}
        <div className={styles.contentBlock}>
          <p>
            Established in 2001, Viet Model is proud to be one of the most
            prestigious professional architectural scale model manufacturers in
            Viet Nam, particularly as the pioneer in bringing Viet (Vietnam)
            models to the international market.
          </p>
          <p>
            With a well-trained, skillful and hardworking technical team,
            State-Of-The-Art Laser Cutting, 3D Printing application,
            high-quality materials and above all, a professional and systematic
            management, Viet Model enthusiastically brings ingenious solutions
            to create effective models at a global level to serve our discerning
            clients.
          </p>
          <p>
            Being associated with a number of well-known Property Developers in
            Vietnam such as BIM Group, Ecopark, VinGroup, Bitexco Group, Gamuda,
            Ciputra, SunShine Group as well as global class Architectural
            Consultants such as Nikken Sekkei, Aedas, SOM, PTW, DWP and so many
            others. We have been honoured to bring clients our experience and
            liability for many years and for years ahead.
          </p>
          <p>
            We understand that our clients are not only the designers, but also
            the audiences for their project. Thus, we are responsible for
            bringing “the most wonderful performance of ideas” within our
            enthusiastic brains and via our skillful and creative hands to
            produce architectural models that are as dynamic as in real life.
            And after 16 years striving for mastery, Viet Model definitely
            deserves its clients’.
          </p>
        </div>
      </div>

      {/* Hình ảnh minh họa bên dưới */}
      <div className={styles.imageGrid}>
        {["bathroom_sang.jpg", "bathroom_toi.jpg", "bedroom_sang.jpg"].map(
          (img, idx) => (
            <div className={styles.imageBox} key={idx}>
              <Image
                src={`/assets/images/${img}`}
                alt={`Model ${idx + 1}`}
                fill
                className={styles.imageInside}
              />
            </div>
          )
        )}
      </div>

      {/* Logo slider tự động chạy */}
      <div className={styles.logoSlider}>
        <div className={styles.logoTrack}>
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className={styles.logoItem}>
              <Image
                src={logo}
                alt={`logo-${idx}`}
                fill
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Clients Projects Section */}
      <div className={styles.clientsSection}>
        <div className={styles.clientsContainer}>
          <div className={styles.clientsTitle}>
            <h2>
              International Clients
              <br />
              and Projects
            </h2>
          </div>
          <ul className={styles.clientsList}>
            {clients.map((client, idx) => (
              <li key={idx}>
                <span>{client.name}</span> - {client.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.logoSlider}>
        <div className={styles.logoTrack}>
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className={styles.logoItem}>
              <Image
                src={logo}
                alt={`logo-${idx}`}
                fill
                className={styles.logoImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
