import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

export default function App() {
  return (
    <Router
<<<<<<< HEAD
      root={(props) => (
        <MetaProvider>
          <Title>Ken's Website</Title>
=======
      root={props => (
        <MetaProvider>
          <Title>SolidStart - with Vitest</Title>
>>>>>>> e790a4c (Feat: Initialize SoiidJS project (#2))
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
