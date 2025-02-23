import React, { useEffect, useState } from 'react';
import snoozeIcon from './Pictures/snooze.png';
import markAsDoneIcon from './Pictures/mark.png';
import completedIcon from './Pictures/done.png';

const PlantReminders = ({ plants }) => {
  const [reminders, setReminders] = useState([]); // Store reminders for all plants
  const [reminderStatus, setReminderStatus] = useState({}); // To track icon changes

  useEffect(() => {
    // Update reminders whenever the plants prop changes
    const newReminders = plants.flatMap((plant) => createReminders(plant));
    setReminders(newReminders);
  }, [plants]); // Depend on 'plants' to update reminders

  const handleSnooze = (plantId, type) => {
    alert('I will remind you tomorrow!');
    setReminderStatus((prev) => ({
      ...prev,
      [plantId]: { ...prev[plantId], [type]: { snoozed: true } }, // Mark this plant's specific reminder as snoozed
    }));
  };

  const handleMarkAsDone = (plantId, type) => {
    setReminderStatus((prev) => ({
      ...prev,
      [plantId]: { ...prev[plantId], [type]: { completed: true } }, // Mark this plant's specific reminder as completed
    }));
  };

  const createReminders = (plant) => {
    const reminders = [];

    // Validate lastWatered date
    const lastWateredDate = new Date(plant.lastWatered);
    if (!isNaN(lastWateredDate.getTime())) {
      const wateringFrequency = plant.wateringInterval || 3; // Default to 3 if not available
      const wateringDueDate = new Date(lastWateredDate);
      wateringDueDate.setDate(lastWateredDate.getDate() + wateringFrequency);
      reminders.push({
        plantId: plant.id,
        dueDate: wateringDueDate.toISOString().split('T')[0],
        plantName: plant.name,
        type: 'watering',
      });
    } else {
      console.error(`Invalid lastWatered date for plant: ${plant.name}`);
    }

    // Set fertilizing date directly to plant.fertilizerDue
    const fertilizerDueDate = new Date(plant.fertilizerDue);
    if (!isNaN(fertilizerDueDate.getTime())) {
      reminders.push({
        plantId: plant.id,
        dueDate: fertilizerDueDate.toISOString().split('T')[0],
        plantName: plant.name,
        type: 'fertilizing',
      });
    } else {
      console.error(`Invalid fertilizerDue date for plant: ${plant.name}`);
    }

    return reminders;
  };

  // Group reminders by plantId
  const groupedReminders = reminders.reduce((acc, reminder) => {
    if (!acc[reminder.plantId]) {
      acc[reminder.plantId] = [];
    }
    acc[reminder.plantId].push(reminder);
    return acc;
  }, {});

  const isReminderLate = (dueDate) => {
    const today = new Date();
    return new Date(dueDate) < today; // Check if the due date is before today
  };

  return (
    <div className="bg-white shadow-lg">
      <h2 className="text-xl text-gray-800 font-semibold p-4 text-center">Plant Care Reminders</h2>
      <div className="space-y-6 w-[500px] mx-auto">
        {Object.entries(groupedReminders).length > 0 ? (
          Object.entries(groupedReminders).map(([plantId, plantReminders]) => {
            const plantName = plantReminders[0].plantName; // Get plant name from the first reminder
            const isSnoozed = reminderStatus[plantId]?.['watering']?.snoozed || reminderStatus[plantId]?.['fertilizing']?.snoozed;
            const isCompleted = reminderStatus[plantId]?.['watering']?.completed && reminderStatus[plantId]?.['fertilizing']?.completed;

            return (
              <div key={plantId} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center mb-4">
                  <img src={plants.find(plant => plant.id === parseInt(plantId))?.images[0]} alt={plantName} className="w-8 h-8 rounded-full mr-4" />
                  <h3 className="text-lg font-semibold text-green-700">{plantName}</h3>
                </div>
                <div className="space-y-4">
                  {plantReminders.map((reminder, index) => {
                    const isSnoozed = reminderStatus[reminder.plantId]?.[reminder.type]?.snoozed;
                    const isCompleted = reminderStatus[reminder.plantId]?.[reminder.type]?.completed;

                    return (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-1 rounded-lg shadow-sm">
                        <div className="flex-grow">
                          <p className="text-gray-600 text-sm">{reminder.type === 'watering' ? 'Watering' : 'Fertilizing'}</p>
                          {!isCompleted && (
                            <span className={`inline-block mt-1 px-2 py-1 text-xs font-semibold rounded-full ${isReminderLate(reminder.dueDate) ? 'bg-red-100 text-red-600' : isSnoozed ? 'bg-gray-200 text-gray-600' : 'bg-green-100 text-green-600'}`}>
                              {isReminderLate(reminder.dueDate) ? 'Late' : isSnoozed ? 'Snoozed' : 'Upcoming'}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          {!isCompleted && !isSnoozed && (
                            <>
                              <button
                                onClick={() => handleSnooze(reminder.plantId, reminder.type)}
                                className="text-blue-500 hover:opacity-75 transition-opacity"
                              >
                                <img src={snoozeIcon} alt="Snooze" className="h-6 w-6" />
                              </button>
                              <button
                                onClick={() => handleMarkAsDone(reminder.plantId, reminder.type)}
                                className="text-red-500 hover:opacity-75 transition-opacity"
                              >
                                <img src={markAsDoneIcon} alt="Mark as Done" className="h-6 w-6" />
                              </button>
                            </>
                          )}
                          {isCompleted && (
                            <div className="flex items-center space-x-1">
                              <img src={completedIcon} alt="Completed" className="h-6 w-6" />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-600 text-center">No plants found.</p>
        )}
      </div>
    </div>
  );
};

export default PlantReminders;
