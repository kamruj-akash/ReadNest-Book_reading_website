import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";

const RootLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);

  return (
    <>
      <Navbar />
      {navigation.state == "Loading" ? (
        <Loader />
      ) : (
        <main className="min-h-[calc(100vh-300px)]">
          <Outlet />
        </main>
      )}

      <Footer />
    </>
  );
};

export default RootLayout;
