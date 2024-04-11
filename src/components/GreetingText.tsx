import { createSignal, type Component, type JSX, onMount } from "solid-js";
import styles from "./GreetingText.module.css";
import "@fontsource-variable/comfortaa";

export const GreetingText: Component<{}> = () => {
  const [animationDone, setAnimationDone] = createSignal(false);

  const skipHandler = () => {
    setAnimationDone(true);
  };

  onMount(() => {
    // Set a timeout for
    setTimeout(() => {
      setAnimationDone(true);
    }, 8000);

    // Listen for an initial click
    document.addEventListener("mousedown", skipHandler);
    return () => {
      // Unbind after click
      document.removeEventListener("mousedown", skipHandler);
    };
  });

  return (
    <div class={styles["greeting-container"]}>
      <h1>
        <span class={animationDone() ? undefined : styles["animate-hi"]}>
          Hi
        </span>
        <span class={animationDone() ? undefined : styles["animate-comma"]}>
          ,{" "}
        </span>
        <span class={animationDone() ? undefined : styles["animate-my"]}>
          my{" "}
        </span>
        <span class={animationDone() ? undefined : styles["animate-name"]}>
          name{" "}
        </span>
        <span class={animationDone() ? undefined : styles["animate-is"]}>
          is{" "}
        </span>
        <span class={animationDone() ? undefined : styles["animate-ken"]}>
          Ken
        </span>
      </h1>
      <h2>
        <span class={animationDone() ? undefined : styles["animate-i"]}>
          I{" "}
        </span>
        <span class={animationDone() ? undefined : styles["animate-am"]}>
          am{" "}
        </span>
        <span class={animationDone() ? undefined : styles["animate-a"]}>
          a{" "}
        </span>
        <span class={animationDone() ? undefined : styles["animate-software"]}>
          software{" "}
        </span>
        <span class={animationDone() ? undefined : styles["animate-engineer"]}>
          engineer
        </span>
      </h2>
    </div>
  );
};
