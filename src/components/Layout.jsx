import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import Footer from "./Footer/Footer";

export const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

<Toaster position="top-right" reverseOrder={false} />
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer style={{ marginTop: "auto", position: "fixed", bottom: 0, left: 0, right: 0 }} />
    </div>
  );
};