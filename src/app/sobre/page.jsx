import Image from "next/image";
import aboutdog from "../../utils/pictures/aboutdog.png";

const Sobre = () => {
  return (
    <>
      <h1>Quem Somos</h1>
      <p>
        Diariamente, diversos casos de maus tratos são reportados. E apesar dos
        esforços para coibir tais práticas, além das condenações bem sucedidas,
        a justiça brasileira é muito branda. Por conta disso, temos visto
        frequentemente condenados que são libertados em pouco tempo, voltando a
        praticar maus tratos diante de tamanha impunidade.
      </p>

      <p>
        Pensando nisso, este grupo existe para lutar em duas frentes: Na
        construção de leis mais rígidas e no monitoramento dos casos para
        garantir que as penas sejam cumpridas. Desta forma, queremos evitar que
        os casos caiam no esquecimento, e garantir que a justiça em favor dos
        animais sejam plenamente cumprida.
      </p>
      <Image src={aboutdog} width={200} />
    </>
  );
};

export default Sobre;
