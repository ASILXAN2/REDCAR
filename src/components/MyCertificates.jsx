import React from 'react';

const MyCertificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Defensive Driving Certificate',
      date: '2024-06-15',
      reason: 'Completed a defensive driving course to improve road safety awareness.',
      image: 'https://opis-cdn.tinkoffjournal.ru/mercury/100000-na-uchebu-01.mvhlfd.png'
    },
    {
      id: 2,
      title: 'Motorcycle Safety Training',
      date: '2023-09-22',
      reason: 'Successfully passed the M1 motorcycle safety training course.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVZnUGcxmGd1nF6gVY_O38s3Q8lcl9652Zg&s'
    },
    {
      id: 3,
      title: 'Advanced Driving Techniques',
      date: '2022-11-30',
      reason: 'Certified for completing advanced car handling and driving skills.',
      image: 'https://rosexperts.ru/wp-content/uploads/2024/02/sertifikat-sootvetstviya-tr-ts.jpg'
    }
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map(cert => (
          <div key={cert.id} className="bg-white rounded-xl shadow-md overflow-hidden border">
            <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {cert.date}</p>
              <p className="text-gray-700 text-sm">{cert.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCertificates;