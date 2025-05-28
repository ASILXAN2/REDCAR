import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    firstName: 'Tim',
    lastName: 'Nice',
    phone: '+1 234 567 8901',
    lastLogin: null,
  });

  useEffect(() => {
    const now = new Date();
    setUser((prevUser) => ({
      ...prevUser,
      lastLogin: now,
    }));

  }, []);

  const formatDateTime = (date) => {
    if (!date) return '';
    return date.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        {user.firstName} {user.lastName}'s Profile
      </h1>
      <p className="text-gray-600 mb-2">Welcome to your profile page.</p>
      <div className="mt-6 text-gray-700 space-y-2">
        <p><strong>Phone Number:</strong> {user.phone}</p>
        <p><strong>Last Login:</strong> {formatDateTime(user.lastLogin)}</p>
      </div>
    </div>
  );
};

export default ProfilePage;