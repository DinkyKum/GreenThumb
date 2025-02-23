import React, { useState } from 'react';
import { plantsData as initialData } from '../Utils/constants';
import PlantReminders from './PlantReminders';

// Function to calculate dynamic water level based on last and next watering dates
const calculateWaterLevel = (lastWatered, nextWatering) => {
  const last = new Date(lastWatered);
  const next = new Date(nextWatering);
  const today = new Date();

  const totalTime = next - last;
  const timePassed = today - last;

  const percentage = (timePassed / totalTime) * 100;

  return Math.max(0, Math.min(100 - percentage, 100)); // Ensure it's within 0-100%
};

// Function to calculate the plant's growth progress
const calculateGrowthProgress = (seedingDate, time) => {
  const seedDate = new Date(seedingDate);
  const today = new Date();

  const totalGrowthDuration = time; 
  const daysPassed = (today - seedDate) / (1000 * 60 * 60 * 24); // Convert ms to days

  // Calculate growth progress as a percentage
  const growthProgress = (daysPassed / totalGrowthDuration) * 100;

  // Limit to the current growth stage
  return growthProgress;
};

// Function to generate future watering dates based on the last watered date and interval
const generateWateringDates = (lastWatered, interval, occurrences) => {
  const wateringDates = [];
  const lastWateredDate = new Date(lastWatered);

  for (let i = 1; i <= occurrences; i++) {
    const nextDate = new Date(lastWateredDate);
    nextDate.setDate(lastWateredDate.getDate() + interval * i);
    wateringDates.push(nextDate);
  }

  return wateringDates;
};




// MyPlants Component
const PlantDashboard = () => {
  const [plantData, setPlantData] = useState(initialData); 
  const [myPlants, setMyPlants] = useState([]); // Store selected plants
  const [searchTerm, setSearchTerm] = useState(''); // Store the search term
  const [hoveredDay, setHoveredDay] = useState(null); // To handle hover for calendar days

  // Filter plantData based on search term
  const filteredPlants = plantData.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Add a plant to "My Plants"
  const addToMyPlants = (plant) => {
    if (!myPlants.some((p) => p.id === plant.id)) {
      setMyPlants([...myPlants, plant]);
    }
    setSearchTerm(''); // Clear the search term after adding
  };

  const getCurrentMonthName = () => {
    const today = new Date();
    return today.toLocaleString('default', { month: 'long' });
  };

  // Combine watering and fertilizer due dates of "My Plants"
  const myPlantWateringDates = myPlants.flatMap((plant) =>
    generateWateringDates(plant.lastWatered, plant.wateringInterval, 6).map((date) => ({
      plant,
      date,
      type: 'watering', // Add type to distinguish between watering and fertilizer dates
    }))
  );

  console.log(myPlantWateringDates);


  const myPlantFertilizerDates = myPlants.map((plant) => ({
    plant,
    date: new Date(plant.fertilizerDue),
    type: 'fertilizer',
  }));

  // Merge watering and fertilizer dates into a single array
  const allPlantDates = [...myPlantWateringDates, ...myPlantFertilizerDates];

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4xl font-bold m-6 text-green-800">My Plants</h1>

      {/* Search Input */}
      <div className="w-full max-w-md mb-4">
        <input
          type="text"
          placeholder="Search for plants..."
          className="w-full p-2 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Plant Search Results */}
      {searchTerm && (
        <div className="w-full max-w-md bg-white border border-gray-300 rounded-md shadow-md">
          {filteredPlants.length > 0 ? (
            filteredPlants.map((plant) => (
              <div
                key={plant.id}
                className="p-4 border-b border-gray-200 flex justify-between items-center"
              >
                <span>{plant.name}</span>
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded-md"
                  onClick={() => addToMyPlants(plant)}
                >
                  Add to My Plants
                </button>
              </div>
            ))
          ) : (
            <div className="p-4 text-gray-600">No plants found</div>
          )}
        </div>
      )}

<div className='flex justify-between gap-14 '> 
      {/* Calendar for My Plants */}
      <div className="bg-white shadow-md p-6 rounded-lg text-center w-1/2">
        <h3 className="text-xl text-gray-800 font-semibold mb-4">
          Plant Care Calendar - {getCurrentMonthName()}
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {[...Array(31).keys()].map((day) => {
            const today = new Date();
            const month = today.getMonth();
            const year = today.getFullYear();

            const plantCareDates = allPlantDates.filter(
              ({ date }) =>
                date.getDate() === day + 1 && date.getMonth() === month && date.getFullYear() === year
            );
            const isCareDay = plantCareDates.length > 0;

            return (
              <div
                key={day}
                className={`relative text-center p-4 rounded-lg ${
                  isCareDay
                    ? plantCareDates[0].type === 'watering'
                      ? 'bg-blue-200 border-blue-400 border-[1px]' // Watering in blue
                      : 'bg-green-200 border-green-400 border-[1px]' // Fertilizer in green or brown
                    : 'bg-gray-100'
                }`}
                onMouseEnter={() => setHoveredDay(isCareDay ? day + 1 : null)}
                onMouseLeave={() => setHoveredDay(null)}
              >
                {/* Date */}
                <p className="text-sm font-semibold mb-4">{day + 1}</p>

                {/* Care Label */}
                {isCareDay && (
                  <p
                    className={`absolute inset-x-0 bottom-0 mb-2 text-sm ${
                      plantCareDates[0].type === 'watering' ? 'text-blue-600' : 'text-green-700'
                    }`}
                  >
                    {plantCareDates[0].type === 'watering' ? 'Water' : 'Fertilize'}
                  </p>
                )}

                {/* Hovered plant names tooltip */}
                {hoveredDay === day + 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-500 text-white p-2 text-sm rounded-md shadow-lg z-10">
                    {plantCareDates.map(({ plant }) => (
                      <div key={plant.id} className="py-1">
                        {plant.name} ({plantCareDates[0].type})
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Reminder Component */}
      <PlantReminders plants={myPlants} />
      </div>

      {/* My Plants Section */}
      <h2 className="text-2xl font-bold">Selected Plants</h2>
      <p className='text-gray-500'>Create your own collection of plants to stay updated about all the care reminders</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {myPlants.map((plant) => {
          const nextWateringDate = generateWateringDates(
            plant.lastWatered,
            plant.wateringInterval,
            1
          )[0];
          const waterLevel = calculateWaterLevel(plant.lastWatered, nextWateringDate);
          const growthProgress = calculateGrowthProgress(plant.seedingDate, plant.growthTime);

          return (
            <div key={plant.id} className="bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">{plant.name}</h2>
              <p className="text-gray-600 mb-2">{plant.description}</p>
              <p className="text-gray-600 mb-2">Sunlight: {plant.light}</p>
              <p className="text-gray-600 mb-4">Next Watering: {nextWateringDate.toDateString()}</p>
              <p className="text-gray-600 mb-4">Fertilizer Due: {new Date(plant.fertilizerDue).toDateString()}</p>

              {/* Water Level Bar */}
              <div className="mb-4">
                <p className="text-gray-600">Water Level</p>
                <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${waterLevel}%` }}
                  ></div>
                </div>
              </div>

              {/* Growth Progress Bar */}
              <div>
                <p className="text-gray-600">Growth Progress</p>
                <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="bg-green-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${growthProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default PlantDashboard;
