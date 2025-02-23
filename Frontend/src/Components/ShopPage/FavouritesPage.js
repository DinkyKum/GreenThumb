import React from 'react';
import { useFavorites } from './FavouritesContext';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl">No favorite plants yet!</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-semibold mb-6">Your Favorite Plants</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favorites.map((plant) => (
          <div key={plant.id} className="relative bg-white rounded-lg shadow-lg p-4">
            {/* Image */}
            <img
              src={plant.images[0]}
              alt={plant.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            
            {/* Plant Name */}
            <h3 className="text-xl mt-4">{plant.name}</h3>
            
            {/* Plant Description */}
            <p className="text-gray-600 mt-2">{plant.description}</p>
            
            {/* Price */}
            <p className="text-green-700 text-lg font-semibold mt-2">
            ₹{plant.price.toFixed(2)}
            </p>

            {/* View Details Link */}
            <div className="flex justify-between mt-4">
              <Link
                to={`/plant/${plant._id}`}
                className="text-green-600 hover:text-green-800"
              >
                View Details 
              </Link>
            </div>

            {/* Remove from Favorites Icon */}
            <button
              onClick={() => removeFromFavorites(plant.id)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 focus:outline-none"
              aria-label="Remove from favorites"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
