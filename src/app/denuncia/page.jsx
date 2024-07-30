"use client";

import { useState } from "react";
import styles from "./Denuncia.module.css";

const Denuncia = () => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    denuncia: "",
    files: [], // to store selected files
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "fileInput") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        files: e.target.files,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [id]: value,
      }));
    }
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
    const { nome, sobrenome, email, telefone, denuncia, files } = formData;

    const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;

    if (!nome || !sobrenome || !email || !telefone || !denuncia) {
      alert("Este campo não pode ficar vazio");
    } else if (!phoneRegex.test(telefone)) {
      alert(
        "Por favor, insira um número de telefone válido no formato (11) 95952-5643"
      );
    } else if (!email.includes("@")) {
      alert("Por favor, insira um email válido");
    } else {
      // Handle file upload logic here (e.g., send formData to server)
      alert("Obrigado pela sua mensagem. Retornaremos em breve!");
      setFormData({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        denuncia: "",
        files: [],
      });
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>Envie sua denúncia</p>

      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <label htmlFor="sobrenome">Sobrenome</label>
        <input
          type="text"
          id="sobrenome"
          value={formData.sobrenome}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="telefone">Telefone</label>
        <input
          type="text"
          id="telefone"
          value={formData.telefone}
          onChange={handlePhoneChange}
          maxLength="15" // Limit length to match the formatted phone number
        />
        <label htmlFor="denuncia">Descreva sua denúncia</label>
        <textarea
          id="denuncia"
          value={formData.denuncia}
          onChange={handleChange}
        />

        <div className={styles.attach}>
          <label htmlFor="fileInput">Anexar foto ou vídeo</label>
          <input
            type="file"
            id="fileInput"
            accept="image/*, video/*"
            onChange={handleChange}
            multiple // Allow multiple files to be selected
          />
        </div>

        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Denuncia;
