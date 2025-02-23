import { useState } from "react";

const PlantImages=({plant})=>{
const [mainImage, setMainImage] = useState(plant ? plant.images[0] : "");
return(
<div className="flex">
    <div className="flex flex-col space-y-2 md:mr-6 mb-6 md:mb-0">
          {plant.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${plant.name} Thumbnail ${index + 1}`}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 ${
                mainImage === img
                  ? "border-green-600"
                  : "border-transparent hover:border-green-400"
              } transition-colors duration-300`}
              loading="lazy"
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  setMainImage(img);
                }
              }}
            />
          ))}
        </div>

        {/* Main Image and Description */}
          <div className="w-[600px]">
            <img
              src={mainImage}
              alt={`${plant.name} Main`}
              className="w-full h-80 object-cover object-top rounded-lg shadow-md"
            />
          </div></div>
)
};
export default PlantImages;