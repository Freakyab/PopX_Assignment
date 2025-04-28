import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Paths from "../components/paths";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    < Paths/>
  </StrictMode>
);
