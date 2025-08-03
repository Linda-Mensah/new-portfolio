import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="nav-layout-container">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
