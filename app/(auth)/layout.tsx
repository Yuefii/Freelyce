import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <div className="min-h-screen bg-background flex flex-col justify-center sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </>
  );
}
