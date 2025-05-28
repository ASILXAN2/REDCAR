import React, { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [cars, setCars] = useState([]);
  const [carName, setCarName] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carImage, setCarImage] = useState('');

  const handleAddCar = () => {
    if (carName && carColor && carImage) {
      const newCar = { name: carName, color: carColor, image: carImage };
      setCars([...cars, newCar]);
      setCarName('');
      setCarColor('');
      setCarImage('');
    }
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen p-8 transition-colors`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Settings</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4 text-white">Add New Car</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Car name"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            className="w-full p-2 rounded border hover:bg-white"
          />
          <input
            type="text"
            placeholder="Color"
            value={carColor}
            onChange={(e) => setCarColor(e.target.value)}
            className="w-full p-2 rounded border hover:bg-white"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={carImage}
            onChange={(e) => setCarImage(e.target.value)}
            className="w-full p-2 rounded border hover:bg-white"
          />
          <button
            onClick={handleAddCar}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Add Car
          </button>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-4">Your Cars</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow border p-4">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded mb-3" />
            <h4 className="text-lg font-bold">{car.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Color: {car.color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;