import { Outlet, ScrollRestoration } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Outlet />
      <ScrollRestoration />
      <Footer />
    </>
  );
};

export default Layout;
