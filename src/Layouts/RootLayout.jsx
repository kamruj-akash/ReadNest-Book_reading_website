import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RootLayout;
