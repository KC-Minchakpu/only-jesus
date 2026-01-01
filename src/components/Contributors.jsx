"use client";

import Image from "next/image";
import styles from "./Contributors.module.css";
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";

const contributors = [
  {
    name: "Kevin Cross Minchakpu",
    role: "Science Writer",
    bio: "Praesentium nihil ut laudantium cumque. Ut et consequatur ab ut totam architecto.",
    image: "/kevin2.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
      facebook: "#",
    },
  },
  {
    name: "Janet O. Daniels",
    role: "Family Therapist",
    bio: "Voluptas qui enim omnis est atque. Enim sunt quo et amet corporis.",
    image: "/janety.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Laura Rodriguez",
    role: "Marketing Director",
    bio: "Qui ut autem quo error molestiae. Voluptatem quia eligendi.",
    image: "/contributors/laura.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      facebook: "#",
    },
  },
  {
    name: "Michael Brown",
    role: "Lead Engineer",
    bio: "Rerum et sint voluptatem enim aut. Quisquam et alias ut qui.",
    image: "/contributors/michael.jpg",
    socials: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export default function Contributors() {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {contributors.map((person) => (
          <article key={person.name} className={styles.card}>
            {/* Full-bleed image */}
            <div className={styles.imageWrapper}>
              <Image
                src={person.image}
                alt={person.name}
                fill
                className={styles.image}
                priority
              />
            </div>

            {/* Card content */}
            <div className={styles.cardBody}>
              <h3 className={styles.name}>{person.name}</h3>
              <p className={styles.role}>{person.role}</p>
              <p className={styles.bio}>{person.bio}</p>

              <div className={styles.socials}>
                {person.socials.twitter && (
                  <a href={person.socials.twitter} aria-label="Twitter">
                    <FaTwitter />
                  </a>
                )}
                {person.socials.linkedin && (
                  <a href={person.socials.linkedin} aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                )}
                {person.socials.github && (
                  <a href={person.socials.github} aria-label="GitHub">
                    <FaGithub />
                  </a>
                )}
                {person.socials.facebook && (
                  <a href={person.socials.facebook} aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
