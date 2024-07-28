import Image from "next/image";
import styles from "./Footer.module.css";
import animals from "../../utils/pictures/animalshadows.png";
import socialmediaicons from "../../utils/pictures/socialmediaicons.png";

export const Footer = () => {
  return (
    <>
      <div className={styles.footerImg}>
        <Image src={animals} className={styles.footerImgRatio} />
      </div>
      <footer className={styles.footer}>
        <Image src={socialmediaicons} width={350} />
        <div className={styles.footerInfos}>
          <div className={styles.footerTitle}>
            <p>JUSTIÇA AOS ANIMAIS</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinksTexts}>
              <p className={styles.footerSubtitle}>Créditos</p>
              <p className={styles.footerText}>Mapa do site</p>
              <p className={styles.footerText}>Acessibilidade</p>
              <p className={styles.footerText}>Assine a newsletter</p>
              <p className={styles.footerText}>© 2024 Justiça Aos Animais</p>
            </div>
            <div className={styles.footerLinksTexts}>
              <p className={styles.footerSubtitle}>Navegação</p>
              <p className={styles.footerText}>Sobre</p>
              <p className={styles.footerText}>Denuncie</p>
              <p className={styles.footerText}>Conheça as Leis</p>
              <p className={styles.footerText}>Contato</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
