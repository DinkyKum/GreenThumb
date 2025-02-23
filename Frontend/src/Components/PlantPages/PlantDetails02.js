import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PlantDetailsAccordion from "./PlantDetailsAccordion";
import Rating from "./Rating";
import PlantImages from "./PlantImages";
import DetailsButtons from "./DetailsButtons";
import Comments from "./Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faMoneyBillWave, faExchangeAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const PlantDetails = () => {
  const { id } = useParams(); // Extracting the id from the URL
  const navigate = useNavigate();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch plant data when the component mounts
  useEffect(() => {
    const fetchPlant = async () => {
      try {
        // Make the API call to your backend to fetch the plant data
        const response = await axios.get(`http://localhost:5001/api/plants/${id}`);
        setPlant(response.data); // Store the plant data in the state
        setLoading(false); // Set loading to false once data is fetched
        console.log(response.data);
      } catch (err) {
        setError("Plant not found!"); // Set error if there's an issue fetching data
        setLoading(false); // Set loading to false if error occurs
      }
    };

    fetchPlant(); // Call the function to fetch plant data
  }, [id]); // Re-run the effect when the id changes

  // Show loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-blue-500">Loading...</h2>
      </div>
    );
  }

  // Show error message if there is an error fetching plant data
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl text-red-500">{error}</h2>
      </div>
    );
  }

  // Render the plant details once data is successfully fetched
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        onClick={() => navigate(-1)} // Go back to the previous page
        className="flex items-center text-green-600 hover:text-green-800 mb-4 focus:outline-none"
      >
        Back to Shop
      </button>

      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
        {/* Images */}
        <div className="flex-shrink-0">
          <PlantImages plant={plant} />
          <div className="bg-white ml-[100px] mt-5">
            {/* Best Offers Section */}
            <div className="flex items-center text-green-700">
              <FontAwesomeIcon icon={faTag} className="text-green-600 mr-2" />
              <h3 className="text-lg font-medium">Best Offers</h3>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>10% off on ICICI Bank Credit Card Transactions</li>
              <li>5% off on GPay Payments</li>
              <li>Free shipping on orders above ₹50</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">*T&C applied</p>
            <hr className="border-gray-300 border-[0.5px] w-[600px]" />
          </div>
        </div>

        <div className="flex-grow md:pl-8 mt-6 md:mt-0 flex flex-col">
          <h2 className="text-3xl font-semibold text-green-800 mb-2">
            {plant.name}
          </h2>

          <p className="text-gray-600 mb-2">{plant.description}</p>

          {/* Display Rating */}
          <span className="mb-3 flex items-center border-black border-[0.5px] w-[225px] px-2">
            <Rating rating={plant.rating} />
            <span className="text-gray-600">
              {plant.rating.toFixed(1)} | {plant.numRatings} ratings
            </span>
          </span>

          <hr className="h-2 border-gray-400" />

          {/* Display Price */}
          <div className="text-green-700 text-2xl font-bold mb-4">
            ₹{plant.price.toFixed(2)}
          </div>

          {/* Delivery Options */}
          <div className="flex flex-col mb-4 space-y-2">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-green-600 mr-2" />
              <span className="text-gray-700">Cash on Delivery Available</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faExchangeAlt} className="text-green-600 mr-2" />
              <span className="text-gray-700">Easy Exchange within 10 Days</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-green-600 mr-2" />
              <span className="text-gray-700">Get it by: {plant.deliveryDate}</span>
            </div>
          </div>

          {/* Care Instructions */}
          <div className="mb-4">
            <h3 className="text-xl font-medium text-green-700">Care Instructions:</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-semibold">Light:</span> {plant.light}
              </li>
              <li>
                <span className="font-semibold">Watering:</span> {plant.WaterReq}
              </li>
              <li>
                <span className="font-semibold">Sowing Season:</span> {plant.sowingSeason}
              </li>
            </ul>
          </div>

          <DetailsButtons plant={plant} />
        </div>
      </div>

      {/* Plant Details Accordion */}
      <PlantDetailsAccordion plant={plant} />

      {/* Comments Section */}
      <Comments plantId={plant.id} />
    </div>
  );
};

export default PlantDetails;
