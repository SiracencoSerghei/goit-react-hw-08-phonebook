import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import Footer from "./Footer/Footer";

export const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", gap: "15px" }}>

<Toaster position="top-right" reverseOrder={false} />
<div style={{ flex: "1 0 auto" }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet style={{ marginBottom: "15px",
      height: "100%" }}/>
      </Suspense>
      </div>
      <Footer style={{ marginTop: "auto" }} />
    </div>
  );
};