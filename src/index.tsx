import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { BrowserRouter as RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import { productsApi } from "./api/productsApi";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApiProvider api={productsApi}>
      <RouterProvider>
        <App />
        <ToastContainer />
      </RouterProvider>
    </ApiProvider>
  </React.StrictMode>
);