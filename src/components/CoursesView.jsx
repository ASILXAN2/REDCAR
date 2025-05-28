import React from 'react';
import { Car, Clock, Users, ArrowRight } from 'lucide-react';

const CoursesView = () => {
  const courses = [
    {
      id: 'g1',
      title: 'G1 Driver\'s License Course',
      description: 'This course is the initial step in Ontario\'s Graduated Licensing System (GLS), where new drivers learn the basics of safe and responsible driving.',
      image: 'https://www.blog.testdriveds.ca/wp-content/uploads/2024/05/license-1.jpg',
      totalDuration: 'N/A',
      inClassInstruction: '2 Hours',
      inCarInstruction: '0 Hours',
      seatsLeft: '2 Seats Left',
      status: 'continue',
      category: 'graduated'
    },
    {
      id: 'g2',
      title: 'G2 Driver\'s License Course',
      description: 'This course is the second stage in Ontario\'s Graduated Licensing System (GLS), where new drivers build on their foundational skills and gain experience in real-world driving situations.',
      image: 'https://www.masterdrivers.ca/static/media/14.cfb09b57f953e49fe0c4.jpg',
      totalDuration: 'N/A',
      inClassInstruction: '0 Hours',
      inCarInstruction: '10 Hours',
      seatsLeft: '10 Seats Left',
      status: 'not-eligible',
      category: 'graduated'
    },
    {
      id: 'm1',
      title: 'M1 Motorcycle License Course',
      description: 'This course is the first step in obtaining a motorcycle license in Ontario, focusing on the basics of motorcycle safety and riding skills.',
      image: 'https://m.g1.ca/wp-content/uploads/2018/01/ontario-drivers-license.jpg',
      totalDuration: '20 Hours',
      inClassInstruction: '8 Hours',
      inCarInstruction: '16 Hours',
      seatsLeft: '2 Seats Left',
      status: 'start',
      category: 'motorcycle'
    }
  ];

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
    <div className="flex">
      <div className="w-72 h-40 relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
          <div className="flex items-center space-x-2">
            {course.status === 'continue' && (
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                <span>CONTINUE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
            {course.status === 'not-eligible' && (
              <span className="text-gray-400 font-medium">NOT ELIGIBLE YET</span>
            )}
            {course.status === 'start' && (
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                <span>START NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <div className="text-lg font-semibold text-gray-900">{course.totalDuration}</div>
            <div className="text-sm text-gray-500 flex items-center mt-1">
              <Clock className="w-4 h-4 mr-1" />
              Total Duration
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold text-gray-900">{course.inClassInstruction}</div>
            <div className="text-sm text-gray-500 flex items-center mt-1">
              <Clock className="w-4 h-4 mr-1" />
              In-Class Instruction
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold text-gray-900">{course.inCarInstruction}</div>
            <div className="text-sm text-gray-500 flex items-center mt-1">
              <Clock className="w-4 h-4 mr-1" />
              In-Car Instruction
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold text-gray-900">{course.seatsLeft}</div>
            <div className="text-sm text-gray-500 flex items-center mt-1">
              <Users className="w-4 h-4 mr-1" />
              Availability
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <Car className="w-6 h-6 text-gray-700" />
          <h1 className="text-2xl font-semibold text-gray-900">Graduated Licensing System</h1>
        </div>
        <div className="space-y-6">
          {courses.filter(course => course.category === 'graduated').map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <Car className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Motorcycle Licensing</h1>
        </div>
        <div className="space-y-6">
          {courses.filter(course => course.category === 'motorcycle').map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesView;