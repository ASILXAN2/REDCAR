import { Car, Clock, Users, ArrowRight } from 'lucide-react';

const Assignments = () => {
  const course = {
    id: 'sale',
    title: 'Villa for sale',
    description: 'If you buy this pitchfork we will give Damas as a gift',
    image: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/134475469.jpg?k=eb1bf5aafc147e79f37a560ab2123c48a525cc5d0ef7945445ad2fb69e019745&o=',
    totalDuration: '',
    phone: '+998 99 364 45 87',
    price: '1000$',
    seatsLeft: '',
    status: 'start',
    category: 'announcement'
  };

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow mb-6">
      <div className="flex">
        <img src={course.image} alt={course.title} className="w-64 h-40 object-cover" />
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
            <div className="flex items-center space-x-2">
              {course.status === 'start' && (
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                  <span>START NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          <p className="text-gray-700 mb-2">{course.description}</p>
          <p className="text-sm text-gray-600 mb-1"><strong>Phone:</strong> {course.phone}</p>
          <p className="text-sm text-gray-600"><strong>Price:</strong> {course.price}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <CourseCard course={course} />
    </div>
  );
};

export default Assignments;