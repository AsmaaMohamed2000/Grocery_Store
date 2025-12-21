import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/ContextCard/contexts/CartProvider";
import Favourites from "./components/Favourites/Favourites";
import AboutUs from "./components/AboutUs/AboutUs";
import Proces from "./components/Proces/Proces";
import Suggestion from "./components/Suggestion/Suggestion";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Contact from "./components/Contact/Contact";
import ForgetPassword from "./components/ForgetPassword";
import AuthProvider from "./components/AuthContext";


function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/forgetpassword",
      element: <ForgetPassword />,
    },
   
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/fruits",
          element: <Fruits />,
        },
        {
          path: "/dairy",
          element: <Dairy />,
        },
        {
          path: "/seafood",
          element: <SeaFood />,
        },
        { path: "/cart", element: <Cart /> },
        { path: "/Favourites", element: <Favourites /> },
        { path: "/aboutUs", element: <AboutUs /> },
        { path: "/Proces", element: <Proces /> },
        { path: "/contact", element: <Contact /> },
        { path: "/suggestion", element: <Suggestion /> },
      ],
    },
  ],{
    basename:'/Grocery_Store'
  }
);
  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
