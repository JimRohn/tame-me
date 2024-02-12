import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/global.scss";


function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />

        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>

          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      // //to the children listed below, the path is appended to the parent path, meaning eacgh child path is a subpath of the parent path 
      // and they will get the Layout component as their parent.
      path: "/",
      element: <Layout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "users", element: <Users /> },
      ],
    },

    {
      //the component below doesn't have a parent path, so it will be rendered as a standalone component. 
      //if we want a page to be rendered as a standalone component, we can add it below as we did for the Login component.
      path:"/login",
      element: <Login />
      
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
