import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Users from "./components/Users/Users";
import Blog from "./components/Blog/Blog";
import BlogDetails from "./components/BlogDetails/BlogDetails";
import BlgDetail from "./components/BlgDetail/BlgDetail";

// Import your pages/components


// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "user",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users /> },
      { path: "blog",
        loader:()=>fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Blog /> },
        {path:'blog/:id',
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`),
          element:<BlgDetail></BlgDetail>}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);