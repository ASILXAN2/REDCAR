import React from 'react';
import { CheckCircle, Play } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden">
              <h1 className="text-2xl font-bold mb-2">What is G Driver's License?</h1>
              <p className="text-blue-100 mb-4">Get a Glimpse of What's Coming Next</p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50">
                EXPLORE NOW!
              </button> 
              <div className="absolute top-4 right-6 text-blue-200 text-sm">Check Your Curriculum</div>
            </div>

            {/* Recommended Course */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recommended Course</h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex space-x-4">
                  <div>
                    <img className='w-35 h-50 justify-center items-center' src="https://assets.newatlas.com/dims4/default/9985ec6/2147483647/strip/true/crop/2279x1519+0+0/resize/720x480!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F0a%2F23%2F43c22fd74cb3bcd3449b55e68830%2Fbmw-cover-concept-rr.jpg" alt="" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">M1 Motorcycle License Course</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      This course is the first step in obtaining a motorcycle license in Ontario, 
                      focusing on the basics of motorcycle safety and riding skills.
                    </p>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">20</div>
                        <div className="text-sm text-gray-600">Hours</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center mt-1">
                          <div className="w-3 h-3 rounded-full border border-gray-400 mr-1"></div>
                          Total Duration
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">8</div>
                        <div className="text-sm text-gray-600">Hours</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center mt-1">
                          <div className="w-3 h-3 rounded-full border border-gray-400 mr-1"></div>
                          In-Class Instruction
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-800">16</div>
                        <div className="text-sm text-gray-600">Hours</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center mt-1">
                          <div className="w-3 h-3 rounded-full border border-gray-400 mr-1"></div>
                          In-Car Instruction
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-500">2</div>
                        <div className="text-sm text-gray-600">Seats Left</div>
                        <div className="text-xs text-gray-400 flex items-center justify-center mt-1">
                          <div className="w-3 h-3 rounded-full border border-gray-400 mr-1"></div>
                          Availability
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-2 gap-6">
              {/* Last Session */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Last Session</h3>
                <div className="bg-white rounded-xl p-4">
                  <p className="font-medium text-gray-800 mb-3">G1 Rules of the Road</p>
                  <div className="text-xs text-gray-500 mb-3">INSTRUCTOR</div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex -space-x-2">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                      ))}
                      <div className="w-6 h-6 bg-gray-400 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-white text-xs font-bold">+5</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">3 Nov, 2023</span>
                    <button className="text-blue-600 text-sm font-medium flex items-center">
                      <Play className="w-3 h-3 mr-1" />
                      REPLAY
                    </button>
                  </div>
                </div>
              </div>

              {/* Assignments */}
              <div>
                <h3 className="font-bold text-gray-800 mb-3">Assignments</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-blue-500 fill-current" />
                    <span className="text-sm text-gray-700">G1 Practice Exam - All Sections</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-blue-500 fill-current" />
                    <span className="text-sm text-gray-700">Theory for the Road Test</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-blue-500 fill-current" />
                    <span className="text-sm text-gray-700">G1 Rules of the Road Quiz</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-400">G1 Road Signs Quiz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Calendar */}
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-800">November 2023</h3>
                <div className="flex space-x-2">
                  <button className="p-1 hover:bg-gray-100 rounded">‹</button>
                  <button className="p-1 hover:bg-gray-100 rounded">›</button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                <div className="text-gray-500 p-1 font-medium">SUN</div>
                <div className="text-gray-500 p-1 font-medium">MON</div>
                <div className="text-gray-500 p-1 font-medium">TUE</div>
                <div className="text-gray-500 p-1 font-medium">WED</div>
                <div className="text-gray-500 p-1 font-medium">THU</div>
                <div className="text-gray-500 p-1 font-medium">FRI</div>
                <div className="text-gray-500 p-1 font-medium">SAT</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {['', '', '', 1, 2, 3, 4].map((day, i) => (
                  <div key={i} className={`p-2 ${day === 3 ? 'bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto' : 'text-gray-700'}`}>
                    {day}
                  </div>
                ))}
                {[5, 6, 7, 8, 9, 10, 11].map((day, i) => (
                  <div key={i} className="p-2 text-gray-700">{day}</div>
                ))}
                {[12, 13, 14, 15, 16, 17, 18].map((day, i) => (
                  <div key={i} className="p-2 text-gray-700">{day}</div>
                ))}
                {[19, 20, 21, 22, 23, 24, 25].map((day, i) => (
                  <div key={i} className="p-2 text-gray-700">{day}</div>
                ))}
                {[26, 27, 28, 29, 30, '', ''].map((day, i) => (
                  <div key={i} className="p-2 text-gray-700">{day}</div>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="space-y-1 text-xs text-gray-400">
              <div>9 AM</div>
              <div className='flex gap-3'>9.30 AM<h1 className='text-red-500'>------------------------------</h1></div>
              <div>10 AM</div>
              <div className='flex gap-3'>10.30 AM<h1 className='text-black'>G1 Driving Course Exam</h1></div>
              <div>11 AM</div>
              <div>12 PM</div>
              <div className='flex gap-3'>1.30 AM <h1 className='text-black'>G2 Introduction</h1></div>
              <div>2 PM</div>
              <div>3 PM</div>
              <div>4 PM</div>
              <div>5 PM</div>
            </div>

            <div className="bg-[#FFBF00] rounded-xl p-4 text-center relative overflow-hidden">
              <div className="text-xs text-gray-600 mb-2">What's Next?</div>
              <div className="w-16 h-16 mx-auto mb-3 relative">
                <div className="w-16 h-16 rounded-full flex items-center justify-center">
                  <img src="https://img.freepik.com/premium-vector/vector-crossed-checkered-flags-illustration_723554-1216.jpg" alt="" />
                </div>
              </div>
              <h4 className="font-bold text-gray-800 text-lg">Novice Navigator</h4>
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-yellow-500 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
