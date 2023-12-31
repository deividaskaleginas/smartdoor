"use client";

import { CategoriesList } from "@/components/admin/categories/categoriesList/CategoriesList";
import styles from "./VartuAutomatika.module.scss";
import { AddCategory } from "@/components/admin/categories/addCategory/AddCategory";

export default function Page() {
  return (
    <main className={styles.vartuAutomatika}>
      <div className={styles.wrapper}>
        <CategoriesList getFrom="vartuautomatika" />
        <AddCategory addWhere="vartuautomatika" />
      </div>
    </main>
  );
}
