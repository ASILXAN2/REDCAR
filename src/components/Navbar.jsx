import React, { useState } from 'react';
import { Car, Search, MessageSquare, Bell, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const [messagesVisible, setMessagesVisible] = useState(false);

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleMessagesClick = () => {
    setMessagesVisible((prev) => !prev);
  };

  return (
    <div className="bg-white px-6 py-4 border-b border-gray-100">
      <div className="flex items-center justify-between">

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-15">
              <img src="https://static.vecteezy.com/system/resources/thumbnails/013/923/538/small_2x/red-car-automobile-vehicle-abstract-driving-logo-png.png" alt="Logo" />
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

          <button 
            onClick={handleMessagesClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
          >
            <MessageSquare className="w-5 h-5 text-gray-600" />
            {!messagesVisible && (
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
            )}
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          
          <button 
            onClick={handleProfileClick}
            className="flex items-center space-x-2 hover:bg-gray-100 rounded-lg px-2 py-1 transition"
          >
            <span className="text-sm font-medium text-gray-700">Tim Nice</span>
            <div>
              <img width="40" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle"/>
            </div>
          </button>
        </div>
      </div>

      {/* Xabar oynasi (messagesVisible true bo'lsa ko'rsatiladi) */}
      {messagesVisible && (
        <div className="absolute top-full right-6 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg p-4 z-50">
          <p className="text-gray-700">Sizda yangi xabarlar yo'q.</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;