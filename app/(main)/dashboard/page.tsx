"use client";

import { useState } from "react";
import { Dashboard } from "../components/Dashboard";

type ViewState = "login" | "dashboard" | "invoice-form" | "invoice-preview";

export default function HomePage() {
  const [currentView, setCurrentView] = useState<ViewState>("login");

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return (
          <Dashboard onCreateInvoice={() => setCurrentView("invoice-form")} />
        );
      default:
        return (
          <Dashboard onCreateInvoice={() => setCurrentView("invoice-form")} />
        );
    }
  };

  return <>{renderCurrentView()}</>;
}
