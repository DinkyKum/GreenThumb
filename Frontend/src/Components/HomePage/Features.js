import React from 'react';
import BlogImage from '../Pictures/Blog.png';
import CommerceImage from '../Pictures/E-Commerce.png'
import ToDoImage from '../Pictures/ToDo.png';
import ExpertImage from '../Pictures/Expert.png';
import ReminderImage from '../Pictures/Reminder.png';


const Features = () => {
    const timelineData = [
      {
        id: 1,
        title: 'To-Do List Integration',
        description: 'Track and manage gardening tasks efficiently.',
        image: ToDoImage,
      },
      {
        id: 2,
        title: 'E-Commerce Platform',
        description:'Purchase plants, gardening tools, pots, and fertilizers.',
        image: CommerceImage,
      },
      {
        id: 3,
        title: 'Gardening Reminders',
        description: ' Automated alerts for watering, fertilizing, etc',
        image: ReminderImage, // Replace with actual image URLs
      },
      {
        id: 4,
        title: 'Expert Consultation',
        description: 'Book appointments with plant experts for advice.',
        image: ExpertImage,
      },
      {
        id: 5,
        title: 'Informative Blog',
        description: 'Articles on gardening techniques and tips.',
        image:BlogImage,
      },
    ];


  return (
    <div className="bg-white py-12">
      <h2 className="text-center text-5xl font-bold mb-8 text-green-900">
        Our Features
      </h2>

      <p className="text-lg text-gray-600 text-center mx-auto w-3/4 mb-5"> Discover essential tools and services that simplify gardening. From automated reminders to expert consultations, we have everything you need to nurture your plants with ease. </p>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {timelineData.map((feature) => (
            <div key={feature.id} className="w-1/5 flex flex-col items-center">
              <div className="flex justify-center mb-2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-24 h-24 rounded-full shadow-md"
                />
              </div>
              <div className="bg-[#f1faf8] p-4 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 m-2 h-28 mt-5">
                <h3 className="text-lg font-semibold text-green-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>    
    </div>
  );
};

export default Features;
