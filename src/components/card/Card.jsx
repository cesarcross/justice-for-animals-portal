import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";
import nextpageicon from "../../utils/pictures/nextpageicon.png";

const Card = ({ title, imageSrc, link }) => {
  return (
    <div className={styles.card}>
      <Link href={link} passHref>
        <Image src={imageSrc} alt={title} className={styles.image} />
        <p className={styles.title}>{title}</p>

        <div className={styles.nextPageContainer}>
          <Image src={nextpageicon} width={35} height={35} />
        </div>
      </Link>
    </div>
  );
};

export default Card;
