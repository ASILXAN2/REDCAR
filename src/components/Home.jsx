import { Car, Clock, Users, ArrowRight } from 'lucide-react';

const Home = () => {
  const courses = [
    {
      id: 'g1',
      title: 'A car is sold at home',
      description: 'Brand new domestic car, excellent condition. The price is negotiable.',
      image: 'https://i.pinimg.com/474x/a7/37/96/a73796ec760ddcd7b1a9b15acefc6c19.jpg',
      totalDuration: 'N/A',
      inClassInstruction: '2 Hours',
      inCarInstruction: '0 Hours',
      seatsLeft: '2 Seats Left',
      status: 'continue',
      category: 'graduated'
    },
    {
      id: 'g2',
      title: 'A car is sold at home',
      description: 'Brand new domestic car, excellent condition. The price is negotiable.',
      image: 'https://cdn.homedit.com/wp-content/uploads/2013/02/VARIO-Perfect-Platinum-Plenty-on-the-inside-to-offer.jpg',
      totalDuration: 'N/A',
      inClassInstruction: '0 Hours',
      inCarInstruction: '10 Hours',
      seatsLeft: '10 Seats Left',
      status: 'not-eligible',
      category: 'graduated'
    },
    {
      id: 'sale',
      title: 'A car is sold at home',
      description: 'Brand new domestic car, excellent condition. The price is negotiable.',
      image: 'https://www.baymotorhomes.co.uk/Home-Car%20C63%20exterior.jpg',
      totalDuration: '',
      inClassInstruction: '',
      inCarInstruction: '',
      seatsLeft: '',
      status: 'start',
      category: 'announcement'
    }
  ];

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow mb-6">
      <div className="flex">
        <img src={course.image} alt={course.title} className="w-64 h-40 object-cover" />
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
            <div className="flex items-center space-x-2">
              {course.status === 'continue' && (
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                  <span>CONTINUE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
              {course.status === 'not-eligible' && (
                <span className="text-gray-400 font-medium">NOT ELIGIBLE YET</span>
              )}
              {course.status === 'start' && (
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                  <span>START NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          <p className="text-gray-700 mb-3">{course.description}</p>
          {course.totalDuration && (
            <div className="flex space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.totalDuration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.inClassInstruction}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Car className="w-4 h-4" />
                <span>{course.inCarInstruction}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{course.seatsLeft}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Home;