import { createBrowserRouter } from "react-router";
import NotFound from "../pages/NotFound";
import { lazyMinLoadTime } from "../hooks/helpers/lazyMinLoadTime";

// Layout
const Layout = lazyMinLoadTime(() => import("../components/layout/Layout"));

// Pages (lazy)
const Home = lazyMinLoadTime(() => import("../pages/Home"));
const About = lazyMinLoadTime(() => import("../pages/About"));
const Contact = lazyMinLoadTime(() => import("../pages/ContactUs"));
const Blog = lazyMinLoadTime(() => import("../pages/Blog"));
const BlogDetails = lazyMinLoadTime(() => import("../pages/BlogDetails"));
const Privacy = lazyMinLoadTime(() => import("../pages/Privacy"));
const Rules = lazyMinLoadTime(() => import("../pages/Rules"));
const WhyUs = lazyMinLoadTime(() => import("../pages/WhyUs"));

// Components
// const ServicesDetails = lazy(
//   () => import("../components/once/ourServices/ServicesDetails")
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact-us", element: <Contact /> },

      { path: "blogs", element: <Blog /> },
      { path: "blogs/:id", element: <BlogDetails /> },

      { path: "privacy", element: <Privacy /> },
      { path: "rules", element: <Rules /> },
      { path: "why-us", element: <WhyUs /> },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
