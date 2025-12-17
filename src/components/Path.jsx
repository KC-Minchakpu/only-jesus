"use client";

import { IKImage } from "imagekitio-react";
import styles from "./Path.module.css";

export default function Path() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Left Content */}
        <div className={styles.content}>
          <h2>Find Peace with God </h2>
          <p>
            Even when the world is in turmoil all around us, we can receive the blessing of inner peace. 
            This blessing will continue with us as we stay true to our testimony of the gospel and as we 
            remember that Heavenly Father and Jesus Christ love us and watch over us.
          </p>

          <button className={styles.cta}>
            Find Out How
            <span className={styles.arrow}>➜</span>
          </button>
        </div>

        {/* Right Image */}
        <div className={styles.imageWrapper}>
          <IKImage
            path="/child.png"
            alt="Smiling child"
            fill="true"
            priority="true"
            className={styles.image}
            loading="lazy"
            lqip={{ active: true }}
            transformation={[{ width: 480, Height: 600, quality: 90 }]} />
        </div>
      </div>
    </section>
  );
}
