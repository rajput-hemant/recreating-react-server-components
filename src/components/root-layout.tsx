import React from "react";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

export function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="container min-h-[calc(100dvh-3.5rem)]">{children}</main>
      <Footer />
    </>
  );
}
