import { plantsData } from "../../Utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faStarHalfAlt as halfStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

const Rating = ({ rating }) => {
  // Function to render star rating with half stars
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
  
    return (
      <div className="flex items-center">
        {[...Array(totalStars)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={
              index < filledStars
                ? solidStar // Filled star (solid)
                : index === filledStars && hasHalfStar
                ? halfStar // Half star
                : regularStar // Regular outline star
            }
            className={`text-yellow-500 ${index >= filledStars && "text-gray-300"}`}
          />
        ))}
      </div>
    );
};

  export default Rating;