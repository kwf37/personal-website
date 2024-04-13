import { onMount, type Component, type JSX } from "solid-js";
import styles from "./PostDialog.module.css";
import type { CollectionEntry, InferEntrySchema } from "astro:content";
import { navigate } from "astro:transitions/client";
import { Logo } from "./Logo";
import "@fontsource-variable/open-sans";
import "@fontsource/average-sans";

const dateString = (start: Date, end: Date | undefined) => {
  // TODO use Internationalization API to get proper month names
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
  if (end)
    return `${start.getMonth() + 1}/${start.getFullYear()}-${
      end.getMonth() + 1
    }/${end.getFullYear()}`;
  else return `${start.getMonth() + 1}/${start.getFullYear()}-Present`;
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
            size="60px"
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
