import type { Component, JSX } from "solid-js";
import "./Logo.module.css";

export const Logo: Component<{
  src: string;
  alt: string;
}> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
