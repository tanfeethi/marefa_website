import { createBrowserRouter } from "react-router";
import NotFound from "../pages/NotFound";
import { lazy } from "react";

// Layout
const Layout = lazy(() => import("../components/layout/Layout"));

// Pages (lazy)
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/ContactUs"));
const Blog = lazy(() => import("../pages/Blog"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));
const Privacy = lazy(() => import("../pages/Privacy"));
const Rules = lazy(() => import("../pages/Rules"));
const WhyUs = lazy(() => import("../pages/WhyUs"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact-us", element: <Contact /> },

      { path: "blogs", element: <Blog /> },
      { path: "blog-details/:id", element: <BlogDetails /> },

      { path: "privacy", element: <Privacy /> },
      { path: "rules", element: <Rules /> },
      { path: "why-us", element: <WhyUs /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
