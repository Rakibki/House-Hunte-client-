import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-auto max-w-[1250px]">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
