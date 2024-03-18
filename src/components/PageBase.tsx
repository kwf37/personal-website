import { Component, JSX } from "solid-js";
import "./PageBase.module.css";

export const PageBase: Component<{ children: JSX.Element }> = (props) => {
  return <main>{props.children}</main>;
};
