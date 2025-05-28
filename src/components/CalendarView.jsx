import React, { useState } from 'react';
import { FileText, ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2023, 10, 10));

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
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
};

export default CalendarView;