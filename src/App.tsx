import React from "react";
import { useTranslation } from "react-i18next";
import "./App.scss";
import AccessConfigurator from "./pages/accessConfigurator/AccessConfigurator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharacteristicsSetup from "./pages/characteristicsSetup/CharacteristicsSetup";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AccessConfigurator />,
    },
    {
      path: "/characteristics-setup",
      element: <CharacteristicsSetup />,
    },
  ]);

  const { t } = useTranslation();
  return (
    <div className="App">
      <div className="header" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
