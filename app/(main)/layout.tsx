import React from "react";
import MainNavbar from "./components/main-navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <MainNavbar />
        {children}
      </main>
    </>
  );
}
