import React from "react";
import AppBar from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "./Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Layout() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2500} position="top-center" />
    </>
  );
}
export default Layout;
