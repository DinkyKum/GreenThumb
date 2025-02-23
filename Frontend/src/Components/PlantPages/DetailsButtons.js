import { useCart } from '../Cart/CartContext';
import { useFavorites } from '../ShopPage/FavouritesContext';
import { useNavigate } from "react-router-dom";

const DetailsButtons=({plant})=>{

const { addToCart, cartItems } = useCart(); // Extract cartItems from useCart
const { favorites, addToFavorites, removeFromFavorites } = useFavorites(); // Destructure from useFavorites

const isInCart = cartItems.some((cartItem) => cartItem.id === plant?.id);
const isFavorite = favorites.some((favPlant) => favPlant.id === plant.id);

const navigate = useNavigate();

    return(
        <div className="mt-auto flex space-x-4">
              <button
                onClick={() => {
                  isFavorite ? removeFromFavorites(plant.id) : addToFavorites(plant);
                }}
                className={`flex-1 py-2 px-4 rounded-lg transition-colors duration-300 focus:outline-none ${
                  isFavorite
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-gray-300 text-gray-700 hover:bg-gray-400"
                }`}
              >
                {isFavorite ? (
                  <>
                    <i className="fas fa-heart mr-2"></i> Remove from Favorites
                  </>
                ) : (
                  <>
                    <i className="far fa-heart mr-2"></i> Add to Favorites
                  </>
                )}
              </button>

              {/* Conditionally Render Add to Cart or Go to Bag Button */}
              {isInCart ? (
                <button
                  onClick={() => navigate("/cart")}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center focus:outline-none"
                >
                  Go to Cart <i className="fas fa-arrow-right ml-2"></i>
                </button>
              ) : (
                <button
                  onClick={() => addToCart(plant)}
                  className="flex-1 bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center focus:outline-none"
                >
                  Add to Cart
                </button>
              )}
            </div>
    )
};
export default DetailsButtons;
