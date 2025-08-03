import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <div className="nav-layout-container">
          <Navbar />
        </div>

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
