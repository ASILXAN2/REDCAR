import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CoursesView from './components/CoursesView';
import CalendarView from './components/CalendarView';
import Home from './components/Home';
import ComingSoon from './components/ComingSoon';
import Assignments from './components/Assignments';
import InCarTraining from './components/InCarTraining';
import Statistics from './components/Statistics';
import MyCertificates from './components/MyCertificates';
import Settings from './components/Settings';
import ProfilePage from './components/ProfilePage';

import './App.css';

const MainLayout = () => {
  const [activeView, setActiveView] = useState('courses');

  const renderMainContent = () => {
    switch (activeView) {
      case 'courses':
        return <CoursesView />;
      case 'calendar':
        return <CalendarView />;
      case 'home':
        return <Home />;
      case 'assignments':
        return <Assignments />;
      case 'training':
        return <InCarTraining />;
      case 'statistics':
        return <Statistics />;
      case 'certificates':
        return <MyCertificates />;
      case 'settings':
        return <Settings />;
      default:
        return <ComingSoon viewName={activeView} />;
    }
  };

  return (
    <div className="min-h-screen bg-yellow-400 p-6">
      <div className="max-w-7xl mx-auto bg-gray-50 rounded-2xl shadow-xl overflow-hidden">
        <Navbar />
        <div className="flex">
          <Sidebar activeView={activeView} setActiveView={setActiveView} />
          <div className="flex-1 p-6">
            {renderMainContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;