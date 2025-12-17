"use client"; 

import { SignUp } from "@clerk/nextjs";
import styles from "./register.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <SignUp/>
    </div>
  );
}
