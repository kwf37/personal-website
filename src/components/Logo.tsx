import type { Component, JSX } from "solid-js";

export const Logo: Component<{
  src: string;
  alt: string;
  size: string;
}> = ({ src, alt, size }) => {
  return <img src={src} alt={alt} width={size} height={size} />;
};
