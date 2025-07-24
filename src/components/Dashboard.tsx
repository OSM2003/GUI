import React, { useState, useEffect, useRef, useCallback } from 'react';

interface DashboardProps {
  isSidebarHovered: boolean;
}

const Dashboard: React.FC<DashboardProps> = ({ isSidebarHovered }) => {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use useCallback to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;
      setScrollY(scrollTop);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Add multiple event listeners to ensure all scroll types are captured
      container.addEventListener('scroll', handleScroll, { passive: true });
      container.addEventListener('wheel', handleScroll, { passive: true });
      container.addEventListener('touchmove', handleScroll, { passive: true });
      
      // Also listen for scrollbar interactions
      container.addEventListener('mousedown', () => {
        const checkScroll = () => {
          handleScroll();
          requestAnimationFrame(checkScroll);
        };
        checkScroll();
      });

      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('wheel', handleScroll);
        container.removeEventListener('touchmove', handleScroll);
      };
    }
  }, [handleScroll]);

  // Alternative approach: Use Intersection Observer for more reliable scroll detection
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // This will trigger when elements come in/out of view during scroll
        handleScroll();
      },
      {
        root: container,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    // Observe a few elements to detect scroll
    const elements = container.querySelectorAll('div');
    elements.forEach((el, index) => {
      if (index < 5) observer.observe(el); // Observe first 5 divs
    });

    return () => observer.disconnect();
  }, [handleScroll]);

  // Calculate opacity based on scroll position
  const opnsenseOpacity = Math.max(0.3, 1 - scrollY / 300);
  const opnsenseTransform = `translateY(${scrollY * 0.5}px)`;

  return (
    <div 
      ref={containerRef}
      className={`custom-scrollbar flex-1 p-8 overflow-y-auto transition-all duration-300 ease-in-out ${
        isSidebarHovered ? 'blur-sm' : ''
      }`}
      style={{
        // Ensure smooth scrolling behavior
        scrollBehavior: 'smooth',
        // Force hardware acceleration
        transform: 'translateZ(0)',
        willChange: 'scroll-position'
      }}
    >
      {/* Header */}
      <div className="mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex justify-center items-center relative">
            <h1 className="text-3xl font-light text-white text-center">Firewall Dashboard</h1>
            <span 
              className="absolute right-0 text-blue-400 font-medium transition-all duration-100 ease-out"
              style={{
                opacity: opnsenseOpacity,
                transform: opnsenseTransform,
                willChange: 'transform, opacity'
              }}
            >
              OPNsense
            </span>
          </div>

        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="space-y-8">
        {/* Live Log Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <h2 className="text-xl font-SF Pro Rounded text-white mb-4">Live Log</h2>
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
          <h2 className="text-xl font-SF Pro Rounded text-white mb-4">Traffic Graph</h2>
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
            <h2 className="text-xl font-SF Pro Rounded text-white mb-6">System Health</h2>
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
                  <span className="text-gray-400 text-span">60%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full w-3/5 transition-all duration-1000 ease-out"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Sources */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h2 className="text-xl font-SF Pro Rounded text-white mb-6">Top Sources</h2>
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
                  <p className="text-blue-400 text-xs font-medium"></p>
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
                  <p className="text-green-400 text-xs font-medium"></p>
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
          <h3 className="text-white text-lg font-SF Pro Rounded mb-4">Top Sources by Packet Count</h3>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-white text-xs"></span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-red-400 text-sm font-SF Pro Rounded mb-1"></div>
              <div className="text-gray-300 text-xs">Possible Attack Attempt</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-white text-lg font-SF Pro Rounded mb-4">Top Sources by Packet Count</h3>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-white text-xs">Alert</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-red-400 text-sm font-SF Pro Rounded mb-1">ALERT</div>
              <div className="text-gray-300 text-xs">Possible Weak Source</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
          <h3 className="text-white text-lg font-SF Pro Rounded mb-4">Top Sources by Packet Count</h3>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
                <span className="text-white text-xs">Alert</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-red-400 text-sm font-SF Pro Rounded mb-1">ALERT</div>
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