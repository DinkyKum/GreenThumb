import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Ensure you import Link from react-router-dom
import { useCart } from '../Cart/CartContext';

// CartIcon component
export const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="white"
    strokeWidth="2"
    className="h-6 w-6"
  >
    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3" />
  </svg>
);

// PlantCard component
const PlantCard = ({ plant }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Link to={`/plant/${plant._id}`}>
        <img
          src={plant.images[0]}
          alt={plant.name}
          className="h-48 w-full object-cover object-top"
        />
      </Link>
      <div className="p-4">
        <Link to={`/plant/${plant._id}`}>
          <h3 className="text-xl font-semibold text-green-700 hover:underline">
            {plant.name}
          </h3>
        </Link>
        <p className="mt-2 text-gray-600">₹{plant.price.toFixed(2)}</p>
        <div className="mt-4 flex justify-between">
          <button
            onClick={() => addToCart(plant)}
            className="flex items-center bg-yellow-400 text-white px-3 py-2 rounded hover:bg-yellow-500 transition-colors duration-300"
          >
            <span className="mr-2">Add to Cart</span>
            <CartIcon />
          </button>
          <Link
            to={`/plant/${plant._id}`}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

// PlantShop component
const PlantShop = () => {
  const [userLocation, setUserLocation] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [suitablePlants, setSuitablePlants] = useState([]);
  const [allPlants, setAllPlants] = useState([]);
  const [city, setCity] = useState("");
  const [locationError, setLocationError] = useState(null);

  useEffect(() => {
    // Fetch plants from MongoDB through API
    const fetchPlants = async () => {
      try { 
        const response = await fetch("http://localhost:5001/api/plants");
        const data = await response.json();
        setAllPlants(data);
      } catch (err) {
        console.error("Error fetching plant data:", err);
      }
    };

    fetchPlants();

    // Geolocation and weather fetching logic
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation(`${latitude}, ${longitude}`);

        try {
          const apiKey = "6344f48fe7c6f391437247b995cfaf62";
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
          );
          const data = await response.json();
         

          // Convert temperature from Kelvin to Celsius
          const tempInCelsius = data.main.temp - 273.15;
          setTemperature(tempInCelsius);
          setCity(data.name);

          // Filter plants based on the converted Celsius temperature
          const suitable = allPlants.filter(
            (plant) =>
              tempInCelsius >= plant.suitableTemperature[0] &&
              tempInCelsius <= plant.suitableTemperature[1]
          );
          setSuitablePlants(suitable);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      },
      (error) => {
        setLocationError("Unable to detect your location");
        console.error("Error getting location:", error);
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-green-800">Plant Shop</h1>
      </header>

      <main>
        {locationError ? (
          <p className="text-red-500">{locationError}</p>
        ) : userLocation && temperature !== null ? (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700">
              Plants Suited for You at {city}
            </h2>
            <p className="text-lg">
              Current Temperature: {temperature.toFixed(2)}°C
            </p>
          </div>
        ) : (
          <p>Loading your location...</p>
        )}

        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {suitablePlants.length > 0 ? (
              suitablePlants.map((plant) => (
                <PlantCard key={plant._id} plant={plant} />
              ))
            ) : (
              <p>No suitable plants found for your location.</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-green-700 mb-4">All Plants</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPlants.length > 0 ? (
              allPlants.map((plant) => (
                <PlantCard key={plant._id} plant={plant} />
              ))
            ) : (
              <p>Loading plants...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PlantShop;
