import Link from "next/link";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <>
      <h1>Acesse sua conta</h1>
      <form className={styles.formContainer}>
        <input type="text" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />
        <button>Entrar</button>
      </form>
      <div className={styles.socialContainer}>
        <p>Ou acesse com suas redes sociais</p>
        <div>
          <p>Redes Sociais</p>
        </div>
      </div>
      <div className={styles.registerContainer}>
        <p>Ainda não tem conta?</p>
        <Link href="/registrar">
          <button>Registrar agora</button>
        </Link>
      </div>
    </>
  );
};

export default Login;
