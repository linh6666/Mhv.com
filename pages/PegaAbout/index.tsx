import React from "react";
import Image from "next/image";
import styles from "./PagaAbout.module.css";


const logos = [
  "/assets/images/Logo/Bim-group-1.png",
  "/assets/images/Logo/Bitexco.png",
  "/assets/images/Logo/CANOPY SANDS.png",
  "/assets/images/Logo/CDC HA NOI.png",
  "/assets/images/Logo/Ciputra.png",
  "/assets/images/Logo/dwp.png",
  "/assets/images/Logo/Ecopark.png",
  "/assets/images/Logo/Gamuda_Berhad_Logo.png",
  "/assets/images/Logo/gensler-logo-png-transparent@2x (1).png",
  "/assets/images/Logo/GMP.png",
  "/assets/images/Logo/HIM LAM.png",
  "/assets/images/Logo/HTT GROUP.png",
  "/assets/images/Logo/kume sekkei.png",
  "/assets/images/Logo/Lac Hong.png",
  "/assets/images/Logo/LOGO_login.png",
  "/assets/images/Logo/MIK group.png",
  "/assets/images/Logo/nihon sekkei.png",
  "/assets/images/Logo/PRINCE HOLDING GROUP.png",
  "/assets/images/Logo/Sun group.png",
  "/assets/images/Logo/Sunshine group.png",
  "/assets/images/Logo/TAHG.png",
  "/assets/images/Logo/tasco.png",
  "/assets/images/Logo/thurlow.png",
  "/assets/images/Logo/Vinhomes.png",
  "/assets/images/Logo/VSIP.png",
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
           <div className={styles.clientsTitle}>
  <h2>
    <span className={styles.largeI}>A</span>bout
   
  
  </h2>
</div>
        {/* <div className={styles.titleBlock}>
  <h2>
    <span className={styles.largeI}>A</span> Bout us
  </h2>
</div> */}


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

      {/* Hình ảnh minh họa */}
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

      {/* International Clients Section */}
      <div className={styles.clientsSection}>
        <div className={styles.clientsContainer}>
        <div className={styles.clientsTitle}>
  <h2>
    <span className={styles.largeI}>I</span>nternational Clients
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

      {/* Logo slider again */}
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

      {/* Domestic Clients Section */}
      <div className={styles.domesticSection}>
        <div className={styles.domesticContainer}>
          <div className={styles.domesticLeft}>
            <h2>
              <span className={styles.bigLetter}>D</span>omestic{" "}
              <span className={styles.lightText}>Clients</span>
                <span className={styles.lightText}>and Projects</span>
            </h2>
          
          </div>
          <div className={styles.domesticRight}>
            <ul>
              <li>
                <span className={styles.highlight}>* Vihajico JSC</span> – Ecopark Urban City.
              </li>
              <li>
                <span className={styles.highlight}>* Bitexco Group</span> – The Manor Central Park – The Manor Hue – The Manor Tower Lao Cai.
              </li>
              <li>
                <span className={styles.highlight}>* Vinhomes, VinGroup</span> – Vinhomes Sky Lake – Vinhomes Me Tri – Vinhomes Riverside – Vinhomes Star City.
              </li>
              <li>
                <span className={styles.highlight}>* BIM Group</span> – Hung Thang Urban City – Intercontinental Phu Quoc – Intercontinental Ha Long – Sailing Club Villa Ha Long – Samples Villas of its sub-project.
              </li>
              <li>
                <span className={styles.highlight}>* Hanoi People Committe</span> – Hanoi Nhat Tan Noi Bai Masterplan – Hanoi High-rise Limitation Study Masterplan.
              </li>
              <li>
                <span className={styles.highlight}>* Gamuda Land Vietnam</span> – Gamuda Garden Masterplan and its sub-projects.
              </li>
              <li>
                <span className={styles.highlight}>* Sun Group</span> – Tu Lien Bridge – Sun City – South Phu Quoc Masterplan – An Thoi Masterplan – Sun Premier Village Primavera.
              </li>
              <li>
                <span className={styles.highlight}>* Star Lake Development</span> – Star Lake Master Plan – Samples Villas of its sub-project.
              </li>
              <li>
                <span className={styles.highlight}>* Alma, Israel</span> – Alma Resort.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.domesticImageWrapper}>
  <img
    src="/assets/images/cty.jpg"
    alt="Decorative"
    className={styles.domesticImage}
  />
</div>
    </section>
  );
};

export default AboutUs;

