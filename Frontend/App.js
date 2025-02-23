// src/App.js
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';

import { AuthProvider } from './src/Components/AuthContext';

import Header from '/src/Components/Header';
import About from '/src/Components/AboutPage/About';
import Footer from '/src/Components/Footer';
import PlantReminders from './src/Components/PlantReminders';
import PlantShop from './src/Components/ShopPage/PlantShop';
import PlantDetails from './src/Components/PlantPages/PlantDetails';
import CartPage from './src/Components/Cart/CartPage';
import BuyCourse from './src/Components/Courses/BuyCourse';
import PlanList from './src/Components/Courses/PlanList'; // Import PlanList component
import { CartProvider } from './src/Components/Cart/CartContext';
import Home from './src/Components/HomePage/Home';
import Contact from './src/Components/ContactPage/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FavoritesPage from './src/Components/ShopPage/FavouritesPage';
import { FavoritesProvider } from './src/Components/ShopPage/FavouritesContext';
import CourseAccordion from './src/Components/Courses/CourseAccordian';
import PaymentPage from './src/Components/Cart/PaymentPage';
import OrderSuccessPage from './src/Components/Cart/OrderSuccessPage';
import PlantDashboard from './src/Components/PlantDashboard';
import Signup from './src/Components/Signup';
import Login from './src/Components/Login';



const AppLayout = () => {
  return (
    <AuthProvider>
    <CartProvider>
      <FavoritesProvider>
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      </FavoritesProvider>
      
    </CartProvider>
    </AuthProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/learn",
        element: <BuyCourse />,
      },
      {
        path: "/planlist/:id",
        element: <PlanList /> // PlanList route
      },
      {
        path: "/courses/:id",
        element: <CourseAccordion/>
      },
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/payment",
        element: <PaymentPage/>
      },
      {
        path: "/reminder",
        element: <PlantReminders />
      },
      {
        path: "/orderSuccess",
        element: <OrderSuccessPage/>
      },
      {
        path: "/myPlants",
        element: <PlantDashboard/>
      },
      {
        path: "/plant/:id",
        element: <PlantDetails />
      },
      {
        path: "/shop",
        element: <PlantShop />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/favourites",
        element: <FavoritesPage />
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
