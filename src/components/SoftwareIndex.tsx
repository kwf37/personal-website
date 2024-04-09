import type { Component, JSX } from "solid-js";
import styles from "./SoftwareIndex.module.css";
import "@fontsource-variable/comfortaa";
import { getCollection, type CollectionEntry } from "astro:content";
import { LogoCard } from "./LogoCard";

export const SoftwareIndex: Component<{
  entries: CollectionEntry<"software">[];
}> = ({ entries }) => {
  const sortedEntries = entries.sort(
    (a, b) => a.data.sortOrder - b.data.sortOrder
  );
  return (
    <div class={styles.container}>
      {sortedEntries.map((frontmatter) => {
        return <LogoCard frontmatter={frontmatter} />;
      })}
    </div>
  );
};
