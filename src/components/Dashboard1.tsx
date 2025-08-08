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
      <div className="sticky top-2 z-30 mb-8 grid grid-cols-3 gap-8">
        <div className="mb-8">
          <div className="flex justify-left items-center relative">
            {/* Left column content */}
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center relative">
            <h1 className="text-3xl font-light text-white text-center">Firewall Dashboard</h1>
          </div>
        </div>

        {/* Sticky column */}
        <div className="flex justify-end items-start">
          <div className="flex flex-col items-end space-y-4">
            <button
              className="backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 py-2.5 font-semibold text-sm text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                backdropFilter: 'blur(10px)',
              }}
              onClick={() => {
                window.open('https://jrx7.com/ui/core/dashboard?token=SECURE_TOKEN', '_blank');
              }}
            >
              <span className="relative z-10">OPNsense</span>
            </button>
          </div>
        </div>
      </div>
      

      
      {/* Main Dashboard Content */}
      <div className="space-y-8">
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
          {/* Live Log Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <h2 className="text-xl font-SF Pro Rounded text-white mb-4">Live Log</h2>
          <div className="overflow-x-auto">
            <div className="max-h-72 overflow-y-auto"> {/* Set max height and enable vertical scroll */}
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
                  {Array.from({ length: 25 }).map((_, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-2 px-4">em0</td>
                      <td className="py-2 px-4 font-bold">17 Sun 11:56:0{i % 10}</td>
                      <td className="py-2 px-4 truncate">192.168.1.{i}</td>
                      <td className="py-2 px-4 truncate">10.0.0.{i}</td>
                      <td className="py-2 px-4">TCP</td>
                      <td className="py-2 px-4">Block</td>
                    </tr>
                  ))}


                </tbody>
              </table>
            </div>
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