import { join } from "path";

import React from "react";
import { renderToString } from "react-dom/server";

import { Hono } from "hono";
import { serveStatic } from "hono/bun";

import { RootLayout } from "./components/root-layout";

const app = new Hono();

app.use("/*", serveStatic({ root: "./dist" }));

app.get("*", async (c) => {
  const path = c.req.path;

  if (path === "/") {
    return c.redirect("/home");
  }

  /* -----------------------------------------------------------------------------------------------
   * File system routing
   * -----------------------------------------------------------------------------------------------*/
  const page = await import(join(process.cwd(), "dist", "pages", path));
  const Component = page.default;

  const app = renderToString(
    <HtmlWrapper>
      <RootLayout>
        <Component {...c.req.queries} />
      </RootLayout>
    </HtmlWrapper>
  );

  return c.html(`<!DOCTYPE html>${app}`);
});

export default app;

function HtmlWrapper({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="client.css" />
        <title>🐶 Doggo</title>
      </head>
      <body id="app">
        {children}
        <script type="module" src="/client.js"></script>
      </body>
    </html>
  );
}
