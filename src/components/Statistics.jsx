import { Car, Clock, Users, ArrowRight } from 'lucide-react';

const Statistics = () => {
  const courses = [
    {
      id: '1',
      title: 'Operator1',
      description: "The operator is responsible for tasks",
      phone: '+998 99 364 45 87',
      status: 'start',
      category: 'announcement'
    },
    {
      id: '2',
      title: 'Operator2',
      description: 'The operator is responsible for house car',
      phone: '+998 90 123 45 67',
      status: 'start',
      category: 'announcement'
    },
    {
      id: '3',
      title: 'Operator3',
      description: 'The operator is responsible for statistics',
      phone: '+998 91 987 65 43',
      status: 'start',
      category: 'announcement'
    }
  ];

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow mb-6">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-700 mb-2">{course.description}</p>
        <p className="text-sm text-gray-600"><strong>Phone:</strong> {course.phone}</p>
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

export default Statistics;