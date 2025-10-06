import { createBrowserRouter } from "react-router";
import Loader from "../Components/Loader";
import Dashboard from "../Layouts/Dashboard";
import RootLayout from "../Layouts/RootLayout";
import BookDetails from "../Pages/BookDetails";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PageToRead from "../Pages/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        Component: Home,
        // loader: () => axios("/booksData.json"),
        // <PropagateLoader size={15} />
      },
      {
        path: "/listed-book",
        // loader: () => axios("/booksData.json"),
        Component: ListedBooks,
      },
      {
        path: "/page-to-read",
        Component: PageToRead,
      },
      {
        path: "/book-details/:id",
        // loader: ({ params }) => axios("/booksData.json", params),
        Component: BookDetails,
      },
    ],
  },
  { path: "/dashboard", Component: Dashboard },
  { path: "*", Component: ErrorPage },
]);
