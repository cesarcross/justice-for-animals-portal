import Image from "next/image";
import Link from "next/link";
import styles from "./Login.module.css";
import sociallogin from "../../utils/pictures/sociallogin.png";

const Login = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Acesse sua conta</p>
      <form className={styles.formContainer}>
        <input type="text" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />
        <button className={styles.button}>Entrar</button>
      </form>
      <div className={styles.socialContainer}>
        <p className={styles.text}>Ou entre com suas redes sociais</p>
        <div>
          <Image src={sociallogin} className={styles.socialLoginImg} />
        </div>
      </div>
      <div className={styles.registerContainer}>
        <p className={styles.text}>Ainda não tem conta?</p>
        <Link href="/registrar">
          <button className={styles.button}>Registrar agora</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
