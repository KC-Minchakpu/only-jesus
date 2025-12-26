import Hero from "@/components/Hero";
import Path from "@/components/Path";
import styles from "./page.module.css";
import FeaturedArticles from "@/components/FeaturedArticles";

export default function Home() {
  return (
    <div className={styles.mainSection}>
      <Hero />
      <Path />
      <FeaturedArticles />
     </div>
  );
}