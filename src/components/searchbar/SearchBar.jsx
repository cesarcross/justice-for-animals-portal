import { casesData } from "@/utils/data/casesData";
import { useState } from "react";
import styles from "./SearchBar.module.css";

export const SearchBar = ({ setFilteredCases }) => {
  const [search, setSearch] = useState("");

  const searchCase = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearch(searchTerm);

    const filtered = casesData.filter(
      (caseItem) =>
        caseItem.description.toLowerCase().includes(searchTerm) ||
        caseItem.title.toLowerCase().includes(searchTerm)
    );

    setFilteredCases(filtered);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        value={search}
        onChange={(e) => searchCase(e)}
        placeholder={"Busca"}
      />
    </div>
  );
};
