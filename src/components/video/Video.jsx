import React from "react";
import styles from "./Video.module.css";

const Video = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Confira nossos videos</p>
      <div className={styles.videoContainer}>
        <div className={styles.videoFrame}>
          <iframe
            src="https://www.youtube.com/embed/reUp_qp04yI?si=EjPmrHBZmaee0jGm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className={styles.responsiveIframe}
          ></iframe>
        </div>
        <div className={styles.videoFrame}>
          <iframe
            src="https://www.youtube.com/embed/4UDNcDlNAUo?si=ti4Uz9uyWX8Ehn8Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className={styles.responsiveIframe}
          ></iframe>
        </div>
        <div className={styles.videoFrame}>
          <iframe
            src="https://www.youtube.com/embed/P1JLEj-j6RM?si=Es1Pb6xydLzjDf0X"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className={styles.responsiveIframe}
          ></iframe>
        </div>
        <div className={styles.videoFrame}>
          <iframe
            src="https://www.youtube.com/embed/wwFKJbt46EQ?si=1cqrAzg9TEBaOx36"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className={styles.responsiveIframe}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
