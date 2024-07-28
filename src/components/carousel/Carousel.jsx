import Image from "next/image";
import styles from "./carousel.module.css";
import dog from "../../utils/pictures/cao.png";
import dogface from "../../utils/pictures/dogface4.png";
import catface from "../../utils/pictures/catface.png";
import horseface from "../../utils/pictures/horseface.png";
import araraface from "../../utils/pictures/araraface.jpg";
import oncaface from "../../utils/pictures/oncaface.png";
import foxface from "../../utils/pictures/foxface.png";
import dolphinface from "../../utils/pictures/dolphinface.png";
import sealface from "../../utils/pictures/sealface.png";
import sealface2 from "../../utils/pictures/sealface2.png";

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.textContainer}>
        <span className={styles.title}>
          Nenhum animal merece{" "}
          <span className={styles.highlightText}>maus tratos</span>
        </span>
        <p className={styles.text}>
          A cada cinco minutes recebemos uma denúncia. Vamos lutar juntos para
          prevenir estas ocorrências.
        </p>
        <button className={styles.carouselBtn}>Denuncie</button>
      </div>
      <div>
        <div className={styles.imageContainer}>
          <div className={styles.images}>
            <Image src={dogface} className={styles.image} />
          </div>
          <div className={styles.images}>
            <Image src={catface} className={styles.image} />
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.images}>
            <Image src={horseface} className={styles.image} />
          </div>
          <div className={styles.images}>
            <Image src={araraface} className={styles.image} />
          </div>
        </div>
        <div className={styles.imageContainer && styles.lastImgRow}>
          <div className={styles.images}>
            <Image src={oncaface} className={styles.image} />
          </div>
          <div className={styles.images}>
            <Image src={sealface2} className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
