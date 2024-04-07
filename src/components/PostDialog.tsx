import { onMount, type Component, type JSX } from "solid-js";
import styles from "./PostDialog.module.css";
import type { CollectionEntry, InferEntrySchema } from "astro:content";
import { navigate } from "astro:transitions/client";
import { Logo } from "./Logo";
import "@fontsource-variable/open-sans";
import "@fontsource/average-sans";

const dateString = (start: Date, end: Date | undefined) => {
  if (end)
    return `${start.getMonth()}/${start.getFullYear()}-${end.getMonth()}/${end.getFullYear()}`;
  else return `${start.getMonth()}/${start.getFullYear()}-Present`;
};

export const PostDialog: Component<{
  frontmatter: InferEntrySchema<"software">;
  children: JSX.Element;
}> = (props) => {
  let dialogRef: HTMLDialogElement | undefined;
  onMount(() => {
    if (dialogRef) {
      dialogRef.showModal();
    }
  });

  const cancelHandler = () => {
    navigate("/");
  };

  return (
    <dialog ref={dialogRef} onCancel={cancelHandler} onClick={cancelHandler}>
      <div
        class={styles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <span class={styles.header}>
          <Logo
            src={props.frontmatter.logo.src}
            alt={props.frontmatter.logoAlt}
          ></Logo>
          <div class={styles["title-container"]}>
            <h3>{props.frontmatter.title}</h3>
            <span class={styles.subtitle}>
              <h4>{props.frontmatter.company}</h4>
              <h4>
                {dateString(
                  props.frontmatter.startDate,
                  props.frontmatter.endDate
                )}
              </h4>
            </span>
          </div>
        </span>
        {props.children}
        <a href="/">
          <h4>Back</h4>
        </a>
      </div>
    </dialog>
  );
};
