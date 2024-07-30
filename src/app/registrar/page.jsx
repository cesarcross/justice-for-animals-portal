"use client";

import { useState } from "react";
import styles from "./Registrar.module.css";
import sociallogin from "../../utils/pictures/sociallogin.png";
import Image from "next/image";

const Registrar = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    cpf: "",
    telefone: "",
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const formatPhoneNumber = (phoneNumber) => {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, "");

    // Format the cleaned number
    if (cleaned.length <= 2) {
      return `(${cleaned}`;
    } else if (cleaned.length <= 7) {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    } else {
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
        7,
        11
      )}`;
    }
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      telefone: formatPhoneNumber(value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, sobrenome, cpf, email, telefone, senha } = formData;

    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

    if (!nome || !sobrenome || !cpf || !email || !telefone || !senha) {
      alert("Este campo não pode ficar vazio");
    } else if (!phoneRegex.test(telefone)) {
      alert(
        "Por favor, insira um número de telefone válido no formato (11) 95952-5643"
      );
    } else if (!email.includes("@")) {
      alert("Por favor, insira um email válido");
    } else {
      alert("Obrigado por se registrar. Retornaremos em breve!");
      setFormData({
        nome: "",
        sobrenome: "",
        cpf: "",
        telefone: "",
        email: "",
        senha: "",
      });
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Registre-se</p>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          id="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome "
        />
        <input
          type="text"
          id="sobrenome"
          value={formData.sobrenome}
          onChange={handleChange}
          placeholder="Sobrenome "
        />
        <input
          type="text"
          id="cpf"
          value={formData.cpf}
          onChange={handleChange}
          maxLength="11"
          placeholder="CPF"
        />
        <input
          type="text"
          id="telefone"
          value={formData.telefone}
          onChange={handlePhoneChange}
          maxLength="15"
          placeholder="Telefone"
        />
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          id="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Senha"
        />

        <button type="submit" className={styles.button}>
          Registrar
        </button>
      </form>
      <div className={styles.socialContainer}>
        <p className={styles.text}>Registre-se com suas redes sociais</p>
        <div>
          <Image src={sociallogin} className={styles.socialLoginImg} />
        </div>
      </div>
    </div>
  );
};

export default Registrar;
