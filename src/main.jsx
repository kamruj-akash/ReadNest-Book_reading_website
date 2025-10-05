import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./Routes/Routes";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: RootLayout,
//     children: [
//       {
//         index: true,
//         Component: Home,
//         loader: () => axios("/booksData.json"),
//         // <PropagateLoader size={15} />
//       },
//       {
//         path: "/listed-book",
//         Component: ListedBooks,
//       },
//       {
//         path: "/page-to-read",
//         Component: PageToRead,
//       },
//       {
//         path: "/book-details/:id",
//         loader: ({ params }) => axios("/booksData.json", params),
//         Component: BookDetails,
//       },
//     ],
//   },
//   { path: "/dashboard", Component: Dashboard },
//   { path: "*", Component: ErrorPage },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
