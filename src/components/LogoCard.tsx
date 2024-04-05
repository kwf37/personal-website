import type { Component, JSX } from "solid-js";
import styles from "./LogoCard.module.css";
import "@fontsource-variable/comfortaa";
import { type CollectionEntry } from "astro:content";
import { Logo } from "./Logo";

export const LogoCard: Component<{
  frontmatter: CollectionEntry<"software">;
}> = ({ frontmatter }) => {
  return (
    <div class={styles.card}>
      <a href={`/software/${frontmatter.slug}`}>
        <Logo src={frontmatter.data.logo.src} alt={frontmatter.data.logoAlt} />
      </a>
    </div>
  );
};
