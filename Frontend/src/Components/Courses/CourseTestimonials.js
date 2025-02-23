import BoyFace from '../Pictures/BoyFace.png';
import GirlFace from '../Pictures/GirlFace.png';
const CourseTestimonials=()=>{
    return(
        <div className="mt-16 max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-900">What Our Students Say</h3>
        <div className="mt-8 space-y-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">
              "The Leafy Learner plan transformed my gardening skills! The advanced workshops were incredibly insightful."
            </p>
            <div className="mt-4 flex items-center justify-center">
              <img className="h-11 w-11 rounded-full" src={BoyFace} alt="Student 1" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Amit</p>
                <p className="text-sm text-gray-500">Professional Gardener</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700">
              "Starting with Green Sprout was the best decision! The weekly tips kept me motivated and informed."
            </p>
            <div className="mt-4 flex items-center justify-center">
              <img className="h-11 w-11 rounded-full" src={GirlFace} alt="Student 2" />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Rishika</p>
                <p className="text-sm text-gray-500">Enthusiast Gardener</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default CourseTestimonials;