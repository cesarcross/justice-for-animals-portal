import Image from "next/image";
import bannerabout from "../../utils/pictures/bannerabout.jpeg";
import bannerabout2 from "../../utils/pictures/bannerabout2.jpg";

import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Quem Somos</p>
      <p className={styles.text}>
        Diariamente, diversos casos de maus tratos são reportados. E apesar dos
        esforços para coibir tais práticas, além das condenações bem sucedidas,
        a justiça brasileira é muito branda. Por conta disso, temos visto
        frequentemente condenados que são libertados em pouco tempo, voltando a
        praticar maus tratos diante de tamanha impunidade.
      </p>

      <p className={styles.text}>
        Pensando nisso, este grupo existe para lutar em duas frentes: Na
        construção de leis mais rígidas e no monitoramento dos casos para
        garantir que as penas sejam cumpridas. Desta forma, queremos evitar que
        os casos caiam no esquecimento, e garantir que a justiça em favor dos
        animais sejam plenamente cumprida.
      </p>
      <div className={styles.image}>
        <Image src={bannerabout} />
      </div>
      <p className={styles.title}>Conheça as Leis</p>
      <div className={styles.lawCard}>
        <p className={styles.lawTitle}>
          Constituição Federal de 1988 (Artigo 225)
        </p>
        <p className={styles.lawText}>
          A crueldade contra os animais é proibida. A Constituição assegura o
          direito a um ambiente ecologicamente equilibrado e impõe ao poder
          público e à coletividade o dever de defender e preservar o meio
          ambiente, o que inclui a fauna.
        </p>
      </div>
      <div className={styles.lawCard}>
        <p className={styles.lawTitle}>
          Lei de Crimes Ambientais (Lei Federal nº 9.605/98)
        </p>
        <p className={styles.lawText}>
          Esta lei tipifica crimes contra o meio ambiente, incluindo a fauna. O
          artigo 32 especificamente trata dos maus-tratos a animais, prevendo
          penas de detenção de três meses a um ano e multa. Em 2020, uma
          alteração aumentou a pena para dois a cinco anos de reclusão para
          casos de maus-tratos contra cães e gatos.
        </p>
      </div>
      <div className={styles.lawCard}>
        <p className={styles.lawTitle}>Decreto-Lei nº 24.645/34</p>
        <p className={styles.lawText}>
          Promulgado por Getúlio Vargas, este decreto estabelece medidas de
          proteção aos animais, incluindo a proibição de maus-tratos e a
          obrigação de fornecer cuidados adequados.
        </p>
      </div>
      <div className={styles.lawCard}>
        <p className={styles.lawTitle}>
          Lei de Proteção à Fauna (Lei Federal nº 5.197/67)
        </p>
        <p className={styles.lawText}>
          Criminaliza a caça, captura, cativeiro e comercialização de espécies
          silvestres. Esta lei é crucial para a proteção da fauna nativa
          brasileira.
        </p>
      </div>
      <div className={styles.lawCard}>
        <p className={styles.lawTitle}>Código Penal Brasileiro (Artigo 164)</p>
        <p className={styles.lawText}>
          Trata do abandono de animais, prevendo pena de 15 dias a seis meses de
          prisão ou multa para quem abandona animais.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
