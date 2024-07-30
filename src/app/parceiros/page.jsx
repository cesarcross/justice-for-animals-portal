import Image from "next/image";
import styles from "./Parceiros.module.css";
import parceiro1 from "../../utils/pictures/parceiro1.png";
import parceiro2 from "../../utils/pictures/parceiro2.png";
import parceiro3 from "../../utils/pictures/parceiro3.png";
import parceiro4 from "../../utils/pictures/parceiro4.png";
import parceiro5 from "../../utils/pictures/parceiro5.png";
import parceiro6 from "../../utils/pictures/parceiro6.png";

const Parceiros = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Conheça nossos parceiros</p>
      <span className={styles.text}>
        Toda a nossa luta em defesa dos animais tem sido bem sucedida graças a
        você, e também aos nossos estimdos parceiros que nos acompanham nos
        resgates e providenciam respaldo jurídico sempre que necessário. Veja
        abaixo quem são e saiba mais sobre as diversas formas de atuação que tem
        nos auxiliado para tornar o planeta um lugar de mais empatia e harmonia.
      </span>

      <div className={styles.partnersContainer}>
        <div className={styles.partners}>
          <div>
            <Image src={parceiro1} alt="parceiro" className={styles.image} />
          </div>
        </div>
        <div className={styles.partners}>
          <div>
            <Image src={parceiro2} alt="parceiro" className={styles.image} />
          </div>
        </div>
        <div className={styles.partners}>
          <div>
            <Image src={parceiro3} alt="parceiro" className={styles.image} />
          </div>
        </div>
        <div className={styles.partners}>
          <div>
            <Image src={parceiro4} alt="parceiro" className={styles.image} />
          </div>
        </div>
        <div className={styles.partners}>
          <div>
            <Image src={parceiro5} alt="parceiro" className={styles.image} />
          </div>
        </div>
        <div className={styles.partners}>
          <div>
            <Image src={parceiro6} alt="parceiro" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parceiros;
