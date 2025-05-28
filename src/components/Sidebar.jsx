import React from 'react';
import { Car, Calendar, Home, BookOpen, FileText, BarChart3, Award, Settings } from 'lucide-react';

const Sidebar = ({ activeView, setActiveView }) => {
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

  return (
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
  );
};

export default Sidebar;