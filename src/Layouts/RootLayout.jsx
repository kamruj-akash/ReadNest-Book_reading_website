import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1">
        {navigation.state == "loading" ? (
          <Loader />
        ) : (
          // <main className="min-h-[calc(100vh-300px)]">
          // </main>
          <Outlet />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
