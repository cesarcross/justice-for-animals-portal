import styles from "./Denuncia.module.css";

const Denuncia = () => {
  return (
    <>
      <h1>Envie sua denúncia</h1>

      <form className={styles.container}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
        <label htmlFor="sobrenome">Sobrenome</label>
        <input type="text" id="sobrenome" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="descreva">Descreva sua denúncia</label>
        <input type="text" id="denuncia" />
        <button>Enviar</button>
      </form>
    </>
  );
};

export default Denuncia;
