import React from 'react';
import { Settings, Home, FileText, Car, BarChart3, Award } from 'lucide-react';

const ComingSoon = ({ viewName }) => {
  const getIcon = (view) => {
    switch (view) {
      case 'home':
        return Home;
      case 'assignments':
        return FileText;
      case 'training':
        return Car;
      case 'statistics':
        return BarChart3;
      case 'certificates':
        return Award;
      case 'settings':
        return Settings;
      default:
        return Settings;
    }
  };

  const getTitle = (view) => {
    switch (view) {
      case 'home':
        return 'Home Dashboard';
      case 'assignments':
        return 'Assignments';
      case 'training':
        return 'In-Car Training';
      case 'statistics':
        return 'Statistics';
      case 'certificates':
        return 'My Certificates';
      case 'settings':
        return 'Settings';
      default:
        return 'Feature';
    }
  };

  const Icon = getIcon(viewName);

  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{getTitle(viewName)} Coming Soon</h3>
        <p className="text-gray-600">This section is under development.</p>
      </div>
    </div>
  );
};

export default ComingSoon;