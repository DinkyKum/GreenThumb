import React, { createContext, useState, useContext } from 'react';

// Create the Favorites context
const FavoritesContext = createContext();

// Custom hook to use FavoritesContext
export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Function to add a plant to favorites
  const addToFavorites = (plant) => {
    setFavorites((prevFavorites) => {
      // Avoid adding duplicates
      if (!prevFavorites.some((favPlant) => favPlant.id === plant.id)) {
        return [...prevFavorites, plant];
      }
      return prevFavorites;
    });
  };

  // Function to remove a plant from favorites
  const removeFromFavorites = (plantId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((plant) => plant.id !== plantId)
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
