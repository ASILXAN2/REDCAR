import { Car, Clock, Users, ArrowRight } from 'lucide-react';

const InCarTraining = () => {
  const courses = [
    {
      id: 'teacher1',
      title: 'Teacher for Drivers',
      description: "I'm a driver's teacher, I'm teaching driving again.",
      image: 'https://st4.depositphotos.com/13194036/20380/i/450/depositphotos_203802876-stock-photo-cheerful-student-teacher-car-driving.jpg',
      phone: '+998 99 364 45 87',
      status: 'start',
      category: 'announcement'
    },
    {
      id: 'teacher2',
      title: 'Private Instructor Available',
      description: 'Experienced driving instructor offering one-on-one sessions in Tashkent.',
      image: 'https://static.wixstatic.com/media/e86518_8c7adc0cd2d844e9afe30b423f84c2f7~mv2.png/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/e86518_8c7adc0cd2d844e9afe30b423f84c2f7~mv2.png',
      phone: '+998 90 123 45 67',
      status: 'start',
      category: 'announcement'
    },
    {
      id: 'teacher3',
      title: 'Teacher for Drivers2',
      description: 'Professional female coach for nervous or first-time drivers.',
      image: 'https://safetycouncil.ab.ca/wp-content/uploads/2022/10/Defensive-Driving-Instructor.png',
      phone: '+998 91 987 65 43',
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
              {course.status === 'start' && (
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                  <span>START NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          <p className="text-gray-700 mb-2">{course.description}</p>
          <p className="text-sm text-gray-600"><strong>Phone:</strong> {course.phone}</p>
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

export default InCarTraining;