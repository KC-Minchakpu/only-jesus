"use client";

import { SignIn } from "@clerk/nextjs";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <SignIn routing="path" path="/login" />
    </div>
  );
}
