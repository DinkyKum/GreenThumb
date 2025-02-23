// src/components/CourseAccordion.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { plans } from '../../Utils/constants'; // Your existing plan data

const CourseAccordion = () => {
  const { id } = useParams(); // Retrieve the course id from URL parameters

  // Find the plan that contains the course
  const planWithCourse = plans.find((plan) =>
    plan.courses.some((course) => course.id === parseInt(id))
  );

  // If no plan contains the course, display an error message
  if (!planWithCourse) {
    return (
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Course Not Found</h2>
        <p className="mt-4 text-gray-600">The requested course could not be found. Please try again.</p>
      </div>
    );
  }

  // Find the course within the plan
  const course = planWithCourse.courses.find((course) => course.id === parseInt(id));

  // State to handle active lecture for toggling accordion
  const [activeIndex, setActiveIndex] = useState(null); // Initially, only first two are open

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Collapse if already open
    } else {
      setActiveIndex(index); // Open selected accordion
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-8 mb-10">
      <h2 className="text-3xl font-bold mb-6 text-green-700">{course.name}</h2>
      <p className="mb-4 text-gray-700">{course.description}</p>

      {/* Render each lecture inside the accordion */}
      <div className="space-y-4">
        {course.lectures.map((lecture, index) => (
          <div
            key={lecture.id}
            className={`border rounded-lg p-4 bg-white shadow-sm ${
              index < 2 ? '' : 'cursor-pointer'
            }`}
          >
            <div className="flex justify-between items-center" onClick={() => toggleAccordion(index)}>
              {/* Lecture Title */}
              <div className="text-left">
                <h4 className="text-xl font-bold mb-2">{lecture.title}</h4>
                <p className="text-gray-600">{lecture.description}</p>
              </div>

              {/* Toggle Icon */}
              <div className="text-right">
                {index >= 2 ? (
                  <button className="text-green-600">
                    {activeIndex === index ? 'Hide Details' : 'Show Details'}
                  </button>
                ) : null}
              </div>
            </div>

            {/* Video Embed or Buy Message */}
            {(index < 2 || activeIndex === index) && (
              <div className="mt-4">
                {index < 2 ? (
                  <iframe
                    title={lecture.title}
                    className="w-full h-96"
                    src={lecture.videoLink}
                    frameBorder="0"
                    allowFullScreen
                  />
                ) : (
                  
<div className="flex flex-col items-center justify-center text-center text-gray-500 py-8">
  <i className="fas fa-lock text-black text-5xl mb-4"></i> {/* Big Lock Icon */}
  <span className="mb-4">Buy the course to unlock this lecture.</span>
  <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200">
    Buy Course
  </button>
</div>


                    

                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseAccordion;
