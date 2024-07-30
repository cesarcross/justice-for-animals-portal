"use client";

import { useState } from "react";
import { casesData } from "@/utils/data/casesData";
import { SearchBar } from "@/components/searchbar/SearchBar";
import Card from "@/components/card/Card";
import styles from "./Cases.module.css";
import Link from "next/link";
import Image from "next/image";
import aboutdog from "../../utils/pictures/aboutdog.png";

const Cases = () => {
  const [filteredCases, setFilteredCases] = useState(casesData);

  return (
    <div className={styles.container}>
      <SearchBar setFilteredCases={setFilteredCases} />
      <p className={styles.text}>Acompanhe os últimos casos</p>
      <div className={styles.cards}>
        {filteredCases.map((e) => (
          <div key={e.id}>
            <Card
              title={e.title}
              description={e.description}
              imageSrc={e.imageSrc}
              link={`/cases/${e.id}`}
            />
          </div>
        ))}
      </div>

      <div className={styles.sobreHome}>
        <div>
          <p className={styles.sobreHomeText}>
            Somos um grupo dedicado a implementar novas leis e garantir que
            autores de maus tratos sejam detidos.
          </p>
          <Link href="/sobre">
            <button className={styles.button}>Saiba mais</button>
          </Link>
        </div>

        <Image src={aboutdog} className={styles.aboutDogImage} width={200} />
      </div>
    </div>
  );
};

export default Cases;
