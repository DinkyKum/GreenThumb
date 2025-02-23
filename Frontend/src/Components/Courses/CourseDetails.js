import React from 'react';
import { useParams } from 'react-router-dom';

// Mock database of course details
const courseDetailsDB = {
  1: {
    name: 'Introduction to Basic Gardening',
    description: 'This course covers the basic principles of gardening...',
    details: 'Learn about different soil types, tools, watering techniques...',
    image: '/path/to/image1.jpg',
  },
  2: {
    name: 'Understanding Plant Types',
    description: 'This course helps you identify and care for different plant types...',
    details: 'Dive into plant biology, plant categorization, and how to nurture various species...',
    image: '/path/to/image2.jpg',
  },
  // Add more details as per your requirement
};

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = courseDetailsDB[courseId];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <img src={course.image} alt={course.name} className="h-60 w-full object-cover rounded-md" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">{course.name}</h2>
          <p className="mt-4 text-gray-600">{course.description}</p>
          <p className="mt-6 text-lg text-gray-700">{course.details}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
