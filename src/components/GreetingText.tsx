import type { Component, JSX } from "solid-js";
import styles from "./GreetingText.module.css";
import "@fontsource-variable/comfortaa";

export const GreetingText: Component<{}> = () => {
  return (
    <div class={styles["greeting-container"]}>
      <h1>
        <span class={styles["animate-hi"]}>Hi</span>
        <span class={styles["animate-comma"]}>, </span>
        <span class={styles["animate-my"]}>my </span>
        <span class={styles["animate-name"]}>name </span>
        <span class={styles["animate-is"]}>is </span>
        <span class={styles["animate-ken"]}>Ken</span>
      </h1>
    </div>
  );
};
