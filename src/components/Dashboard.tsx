import React from 'react';

interface DashboardProps {
  isSidebarHovered: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isSidebarHovered }) => {
  return (
    <div className={`flex-1 p-8 overflow-y-auto transition-all duration-300 ease-in-out ${
      isSidebarHovered ? 'blur-sm' : ''
    }`}>
      {/* Header */}
      <div className="mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-light text-white">Dashboard</h1>
            <span className="text-blue-400 font-medium">OPNsense</span>
          </div>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="space-y-8">
        {/* Live Log Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Live Log</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left py-2 px-4">Interface</th>
                  <th className="text-left py-2 px-4">Time</th>
                  <th className="text-left py-2 px-4">Source</th>
                  <th className="text-left py-2 px-4">Destination</th>
                  <th className="text-left py-2 px-4">Proto</th>
                  <th className="text-left py-2 px-4">Label</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {/* Empty table for now - matches the screenshot */}
                <tr>
                  <td colSpan={6} className="py-8 text-center text-gray-500">
                    No recent log entries
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Traffic Graph Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Traffic Graph</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 text-sm">Traffic In</span>
              </div>
              <div className="relative h-16 bg-gray-900/50 rounded-lg overflow-hidden">
                {/* Animated wave for Traffic In */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 64" preserveAspectRatio="none">
                  <path
                    d="M0,32 Q100,16 200,32 T400,32"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 text-sm">Traffic Out</span>
              </div>
              <div className="relative h-16 bg-gray-900/50 rounded-lg overflow-hidden">
                {/* Animated wave for Traffic Out */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 64" preserveAspectRatio="none">
                  <path
                    d="M0,48 Q100,32 200,48 T400,48"
                    stroke="#10B981"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with System Health and Top Sources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* System Health */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">System Health</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Memory</span>
                  <span className="text-gray-400 text-sm">75%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-3/4 transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">Disk</span>
                  <span className="text-gray-400 text-sm">45%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-2/5 transition-all duration-1000 ease-out"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 text-sm">CPU</span>
                  <span className="text-gray-400 text-sm">60%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full w-3/5 transition-all duration-1000 ease-out"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Sources */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Top Sources</h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Top Sources by Packet Count */}
              <div className="text-center">
                <h3 className="text-gray-400 text-sm mb-4">Top Sources by Packet Count</h3>
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full"></div>
                  <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <p className="text-blue-400 text-xs font-medium">ALERT</p>
                  <p className="text-gray-300 text-xs">Possible Attack Attempt</p>
                </div>
              </div>

              {/* Top Sources by Packet Count (second) */}
              <div className="text-center">
                <h3 className="text-gray-400 text-sm mb-4">Top Sources by Packet Count</h3>
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full"></div>
                  <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <p className="text-green-400 text-xs font-medium">ALERT</p>
                  <p className="text-gray-300 text-xs">Possible Worm Source</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Sources Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-white text-lg font-semibold mb-4">Top Sources by Packet Count</h3>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-white text-xs">Alert</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-red-400 text-sm font-semibold mb-1">ALERT</div>
              <div className="text-gray-300 text-xs">Possible Attack Attempt</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-white text-lg font-semibold mb-4">Top Sources by Packet Count</h3>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-white text-xs">Alert</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-red-400 text-sm font-semibold mb-1">ALERT</div>
              <div className="text-gray-300 text-xs">Possible Weak Source</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-white text-lg font-semibold mb-4">Top Sources by Packet Count</h3>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-white text-xs">Alert</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-red-400 text-sm font-semibold mb-1">ALERT</div>
              <div className="text-gray-300 text-xs">Possible Attack Attempt</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;

