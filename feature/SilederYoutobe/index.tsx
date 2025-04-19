import React from "react";
import classes from "./SilederYoutobe.module.css";

export default function SilederYoutobe() {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>PREMIUM MODELCRAFT IN VIET NAM</h3>
      <section
        style={{
          display: "flex",
          padding: "20px 0",
          justifyContent: "center",
        }}
      >
        <div className={classes.container1}>
          <div className="row">
            <div className="col-12">
              <div
                className="video-box"
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  overflow: "hidden",
                  maxWidth: "100%",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/T1wOSectc2Y?si=4WeU4pcDtzuNLcqT"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
