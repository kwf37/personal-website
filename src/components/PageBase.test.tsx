import { describe, it, expect } from "vitest";
import { render } from "@solidjs/testing-library";
import { PageBase } from "./PageBase";
import "@testing-library/jest-dom/vitest";

describe("<PageBase />", () => {
  it("renders children", async () => {
    const { findByText } = render(() => (
      <PageBase>
        <p>Foo</p>
        <p>Bar</p>
      </PageBase>
    ));
    expect(await findByText("Foo")).toBeInTheDocument();
    expect(await findByText("Bar")).toBeInTheDocument();
  });
});
