import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";

import { QueryClient, QueryClientProvider } from "react-query";
import AppProvider from "./Context/AuthContext";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={Router} />
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// document.documentElement.classList.add('dark')
