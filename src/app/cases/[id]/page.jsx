"use client";

import { casesData } from "@/utils/data/casesData";
import Image from "next/image";
import Link from "next/link";
import styles from "./Case.module.css";

const Case = ({ params }) => {
  const { id } = params;
  const caseData = casesData.find((e) => e.id === id);

  if (!id) {
    return (
      <div>
        <p>Nenhum caso encontrado</p>
      </div>
    );
  }

  const processo =
    "https://www.jusbrasil.com.br/processos/243543241/processo-n-000XXXX-8420198260090-do-tjsp";

  return (
    <div className={styles.container}>
      <div>
        <Image src={caseData.imageSrc} className={styles.image} />
        <p className={styles.title}>{caseData.title}</p>
        <p className={styles.description}>{caseData.description}</p>
      </div>
      <div className={styles.statusContainer}>
        <p className={styles.statusTitle}>Situação:</p>
        <p>{caseData.status}</p>
      </div>
      <div className={styles.statusContainer}>
        <p className={styles.statusTitle}>Acompanhe o processo:</p>
        <Link href={processo}>
          <p className={styles.statusText}>{caseData.lawsuitNumber}</p>
        </Link>
      </div>
      <Link href="/">
        <button className={styles.button}>Voltar</button>
      </Link>
    </div>
  );
};

export default Case;
