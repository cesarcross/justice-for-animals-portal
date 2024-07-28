import styles from "./Registrar.module.css";

const Registrar = () => {
  return (
    <>
      <p>Registrar</p>
      <form className={styles.registerFormContainer}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" />
        <label htmlFor="sobrenome">Sobrenome</label>
        <input type="text" id="sobrenome" />
        <label htmlFor="cpf">Insira seu CPF</label>
        <input type="text" id="cpf" />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="telefone">Telefone</label>
        <input type="text" id="telefone" />
        <button>Enviar</button>
      </form>
    </>
  );
};

export default Registrar;
