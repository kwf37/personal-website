import type { Component, JSX } from "solid-js";
import styles from "./GreetingText.module.css";
import "@fontsource-variable/comfortaa";
import { getCollection, type CollectionEntry } from "astro:content";

export const Card: Component<{ data: CollectionEntry<"software"> }> = () => {
  return <div class={styles["card"]}></div>;
};
