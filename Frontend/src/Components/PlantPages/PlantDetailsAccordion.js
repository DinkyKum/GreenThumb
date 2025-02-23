import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faSeedling,
  faWater,
  faSun,
  faThermometerHalf,
} from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ title, content, isOpen, onClick, icon }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left p-4 flex justify-between items-center text-green-800 font-semibold text-lg focus:outline-none hover:bg-gray-100 transition-colors"
        onClick={onClick}
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={icon} className="mr-3" />
          {title}
        </div>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 text-gray-700">{content}</div>}
    </div>
  );
};

const PlantDetailsAccordion = ({ plant }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="w-full mt-6">
      <AccordionItem
        title="Health Benefits"
        content={plant.healthBenefits}
        isOpen={openAccordion === 0}
        onClick={() => handleAccordionToggle(0)}
        icon={faLeaf}
      />
      <AccordionItem
        title="Sowing and Repotting"
        content={plant.sowingAndRepotting}
        isOpen={openAccordion === 1}
        onClick={() => handleAccordionToggle(1)}
        icon={faSeedling}
      />
      <AccordionItem
        title="Humidity and Light"
        content={plant.humidityAndLight}
        isOpen={openAccordion === 2}
        onClick={() => handleAccordionToggle(2)}
        icon={faSun}
      />
      <AccordionItem
        title="Watering"
        content={plant.watering}
        isOpen={openAccordion === 3}
        onClick={() => handleAccordionToggle(3)}
        icon={faWater}
      />
      <AccordionItem
        title="Temperature"
        content={plant.temperature}
        isOpen={openAccordion === 4}
        onClick={() => handleAccordionToggle(4)}
        icon={faThermometerHalf}
      />
    </div>
  );
};

export default PlantDetailsAccordion;
