import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Components/Cart/CartContext";
import { useAuth } from "../Components/AuthContext";

const Header = () => {
    const { user, logout } = useAuth(); // Use AuthContext
    const { cartItems } = useCart();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Calculate total quantity
    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className="flex justify-between items-center p-4 bg-none px-10 relative">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
                <img className="w-16 h-16 rounded-full shadow-md" src={LOGO_URL} alt="Logo" />
                <h1 className="font-bold text-3xl text-green-900">Green Thumb</h1>
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center space-x-8 text-green-800 font-semibold text-lg">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/learn">Learn</Link>
                </li>
                <li>
                    <Link to="/myPlants">My Plants</Link>
                </li>
                <li className="relative flex items-center gap-1">
                    <Link to="/favourites" className="flex items-center"> 
                        Favourites
                        <i className="fas fa-heart text-green-800 text-xl ml-2"></i> {/* Heart Icon */}
                    </Link>
                </li>
                <li>
                    <Link to="/cart" className="relative flex items-center gap-1">
                        {/* Cart SVG Icon */}
                        Cart
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3" />
                        </svg>

                        {/* Cart Count Badge */}
                        {totalQuantity > 0 && (
                            <span className="absolute -top-2 -right-3 rounded-full bg-green-800 text-white text-sm w-5 h-5 flex items-center justify-center p-1">
                                {totalQuantity}
                            </span>
                        )}
                    </Link>
                </li>

                <li className="relative flex items-center gap-2">
                    {/* Profile Icon and Username */}
                    <i 
                        className="fas fa-user-circle text-green-800 text-2xl cursor-pointer"
                        onMouseEnter={() => setDropdownOpen(true)} 
                    />
                    <span 
                        className="text-green-800 font-semibold text-lg cursor-pointer"
                        onMouseEnter={() => setDropdownOpen(true)} 
                    >
                        {user.username || 'Login'}
                    </span>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div 
                            className="absolute right-0 mt-10 w-48  z-10"
                            onMouseEnter={() => setDropdownOpen(true)} 
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                           
                                {user.token ? (
                                    <>
                                     <ul className="py-2 text-sm mt-48 bg-white shadow-lg rounded-md">
                                        <li>
                                            <Link to="/cart" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 logout-link">Cart</Link>
                                        </li>
                                        <li>
                                            <Link to="/favourites" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 logout-link">Favourites</Link>
                                        </li>
                                        <li>
                                            <Link to="/myPlants" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 logout-link">My Plants</Link>
                                        </li>
                                        <li>
                                            <Link to="/learn" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 logout-link">Courses</Link>
                                        </li>
                                        <li>
                                            <button
                                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 login-link"
                                                onClick={logout} // Call logout function from context
                                            >
                                                Logout
                                            </button>
                                        </li> </ul>
                                    </>
                                ) : (
                                    <ul className="py-2 text-sm mt-10 bg-white shadow-lg rounded-md">
                                    <li>
                                        <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 login-link">Login</Link>
                                    </li></ul>
                                )}
                            
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Header;
