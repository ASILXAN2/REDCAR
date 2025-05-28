import React, { useState } from 'react';
import { Car, Calendar, Home, BookOpen, FileText, BarChart3, Award, Settings, Search, MessageSquare, Bell, User, Clock, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const RedcarDashboard = () => {
  const [activeView, setActiveView] = useState('courses');
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 10, 10));

  const menuItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'courses', icon: BookOpen, label: 'Courses' },
    { id: 'assignments', icon: FileText, label: 'Assignments' },
    { id: 'training', icon: Car, label: 'In-Car Training' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'statistics', icon: BarChart3, label: 'Statistics' },
    { id: 'certificates', icon: Award, label: 'My Certificates' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const courses = [
    {
      id: 'g1',
      title: 'G1 Driver\'s License Course',
      description: 'This course is the initial step in Ontario\'s Graduated Licensing System (GLS), where new drivers learn the basics of safe and responsible driving.',
      image: '/api/placeholder/280/160',
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
      image: '/api/placeholder/280/160',
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
      image: '/api/placeholder/280/160',
      totalDuration: '20 Hours',
      inClassInstruction: '8 Hours',
      inCarInstruction: '16 Hours',
      seatsLeft: '2 Seats Left',
      status: 'start',
      category: 'motorcycle'
    }
  ];

  const calendarEvents = [
    { id: 1, title: 'G1 Driv...', time: '9:30 AM', type: 'test', color: 'bg-red-100 border-red-300' },
    { id: 2, title: 'G2 Intro...', time: '10 AM', type: 'session', color: 'bg-purple-100 border-purple-300' },
    { id: 3, title: 'G2 Wha...', time: '1 PM', type: 'session', color: 'bg-purple-100 border-purple-300' },
    { id: 4, title: 'G2 Fun...', time: '1 PM', type: 'session', color: 'bg-purple-100 border-purple-300' },
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex">
        <div className="w-72 h-40 bg-gray-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center">
            <Car className="w-12 h-12 text-white opacity-50" />
          </div>
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

  const CalendarView = () => (
    <div className="flex-1 flex">
      <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">Calendar</h2>
            <div className="flex items-center space-x-4">
              <span className="text-lg font-medium text-gray-900">{formatDate(selectedDate)}</span>
              <div className="flex items-center space-x-1">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
              <div key={day} className="text-center py-3">
                <span className="text-sm font-medium text-gray-500">{day}</span>
                <div className="text-2xl font-semibold text-gray-900 mt-1">
                  {6 + index}
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-8 gap-4">
              <div className="text-sm text-gray-500 font-medium">9 AM</div>
              <div className="col-span-7 relative">
                <div className="h-12 bg-red-50 border border-red-200 rounded-lg p-2 relative">
                  <div className="absolute inset-0 bg-red-500 rounded-lg w-1/3 opacity-80"></div>
                  <span className="relative z-10 text-sm font-medium text-red-700">G1 Driv...</span>
                  <span className="relative z-10 text-xs text-red-600 block">9:30 AM</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-4">
              <div className="text-sm text-gray-500 font-medium">10 AM</div>
              <div className="col-span-7">
                <div className="h-12 bg-purple-50 border border-purple-200 rounded-lg p-2">
                  <span className="text-sm font-medium text-purple-700">G2 Intro...</span>
                  <span className="text-xs text-purple-600 block">10 AM</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-8 gap-4">
              <div className="text-sm text-gray-500 font-medium">11 AM</div>
              <div className="col-span-7"></div>
            </div>
            <div className="grid grid-cols-8 gap-4">
              <div className="text-sm text-gray-500 font-medium">1 PM</div>
              <div className="col-span-7 grid grid-cols-2 gap-4">
                <div className="h-12 bg-purple-50 border border-purple-200 rounded-lg p-2">
                  <span className="text-sm font-medium text-purple-700">G2 Wha...</span>
                  <span className="text-xs text-purple-600 block">1 PM</span>
                </div>
                <div className="h-12 bg-purple-50 border border-purple-200 rounded-lg p-2">
                  <span className="text-sm font-medium text-purple-700">G2 Fun...</span>
                  <span className="text-xs text-purple-600 block">1 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 ml-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-blue-600">G2 Hom...</span>
            <span className="text-xs text-blue-500">9 AM</span>
          </div>
          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Task</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">G2 Homework 01</h3>
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Description</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Refreshing your knowledge of traffic laws and regulations specific to G2 drivers.
            </p>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Task</span>
            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Urgent</span>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
            ATTACH FILES
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-yellow-400 p-6">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-white px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">REDCAR</span>
              </div>
            </div>
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <MessageSquare className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">Tim Nice</span>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-64 bg-white border-r border-gray-100 p-6">
            <nav className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveView(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      isActive 
                        ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex-1 p-6">
            {activeView === 'courses' && (
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
            )}
            
            {activeView === 'calendar' && <CalendarView />}
            
            {activeView !== 'courses' && activeView !== 'calendar' && (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
                  <p className="text-gray-600">This section is under development.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedcarDashboard;