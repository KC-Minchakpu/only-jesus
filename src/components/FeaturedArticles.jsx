'use client';

import { IKImage } from "imagekitio-react";
import Link from "next/link"; // import Link
import styles from "./FeaturedArticles.module.css";

const articles = [
  {
    title: "The Bridge: Peace with God",
    slug: "the-bridge-peace-with-god",
    description: "The fall of Adam and Eve separated us from God. Learn how you can be reconciled to Him.",
    image: "/the-cross.jpg",
  },
  {
    title: "Nobody but Jesus",
    slug: "nobody-but-jesus",
    description: "Living a Christ-centered life is the hallmark of true discipleship. May others find Christ in you.",
    image: "/crown.jpg",
  },
  {
    title: "Only Jesus",
    slug: "only-jesus",
    description: "After all is said and done, may Jesus Christ be the reason and the purpose we ever lived.",
    image: "/images/article3.jpg",
  },
  {
    title: "In The Hands of the Potter",
    slug: "in-the-hands-of-the-potter",
    description: "Allow God to mould you and shape you into the person He created you to be.",
    image: "/images/article4.jpg",
  },
  {
    title: "Even When You're Running",
    slug: "even-when-youre-running",
    description: "From the moment we are born, we begin running away from God. Learn how to stop running and find rest in Him.",
    image: "/images/article5.jpg",
  },
  {
    title: "Peace in the Storm",
    slug: "peace-in-the-storm",
    description: "Peace is not the absence of war, but the feeling of God's presence in the midst of it.",
    image: "/images/article6.jpg",
  },
];

export default function FeaturedArticles() {
  return (
    <section className={styles.featuredSection}>
      <h2 className={styles.sectionTitle}>Featured Articles</h2>
      <div className={styles.grid}>
        {articles.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} passHref>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <IKImage
                  path={article.image}
                  alt={article.title}
                  className={styles.image}
                  lqip={{ active: true }}
                  transformation={[{ width: 400, quality: 90 }]}
                />
              </div>
              <div className={styles.text}>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.description}>{article.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
