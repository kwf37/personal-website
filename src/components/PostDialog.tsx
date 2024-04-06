import { onMount, type Component, type JSX } from "solid-js";
import "./PostDialog.module.css";
import type { CollectionEntry, InferEntrySchema } from "astro:content";
import { navigate } from "astro:transitions/client";
import { Logo } from "./Logo";

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
    <dialog ref={dialogRef} onCancel={cancelHandler}>
      <div>
        <Logo
          src={props.frontmatter.logo.src}
          alt={props.frontmatter.logoAlt}
        ></Logo>
        <h2>{props.frontmatter.title}</h2>
        <h3>{props.frontmatter.company}</h3>
        {props.children}
      </div>
    </dialog>
  );
};
