import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className=" bg-gray-50 text-gray-600 ">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">ReadNest</a>
        </div>
        <div className="navbar-center flex gap-5">
          <NavLink
            className={({ isActive }) =>
              `hover:bg-teal-100 py-3 px-5 cursor-pointer ${
                isActive &&
                "bg-teal-500 text-white hover:bg-teal-500 hover:text-white"
              }`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:bg-teal-100 py-3 px-5 cursor-pointer ${
                isActive &&
                "bg-teal-500 text-white hover:bg-teal-500 hover:text-white"
              }`
            }
            to={"/listed-book"}
          >
            Listed Books
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:bg-teal-100 py-3 px-5 cursor-pointer ${
                isActive &&
                "bg-teal-500 text-white hover:bg-teal-500 hover:text-white"
              }`
            }
            to={"/page-to-read"}
          >
            Pages to Read
          </NavLink>
        </div>
        <div className="navbar-end gap-5">
          <NavLink className="btn btn-ghost text-black font-semibold hover:bg-teal-100">
            Sign In
          </NavLink>
          <NavLink className="btn  bg-teal-600 text-white font-semibold hover:bg-teal-700">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
