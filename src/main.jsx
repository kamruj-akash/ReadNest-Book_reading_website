import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./Components/ErrorPage";
import "./index.css";
import Dashboard from "./Layouts/Dashboard";
import RootLayout from "./Layouts/RootLayout";
import BookDetails from "./Pages/BookDetails";
import Home from "./Pages/Home";
import ListedBooks from "./Pages/ListedBooks";
import PageToRead from "./Pages/PageToRead";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,

        Component: Home,
        loader: () => axios("/booksData.json"),
        // <PropagateLoader size={15} />
      },
      {
        path: "/listed-book",
        Component: ListedBooks,
      },
      {
        path: "/page-to-read",
        Component: PageToRead,
      },
      {
        path: "/book-details/:id",
        loader: ({ params }) => axios("/booksData.json", params),
        Component: BookDetails,
      },
    ],
  },
  { path: "/dashboard", Component: Dashboard },
  { path: "*", Component: ErrorPage },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
