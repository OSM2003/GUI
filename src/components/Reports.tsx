import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ReportsProps {
  isSidebarHovered: boolean;
}

const Reports: React.FC<ReportsProps> = ({ isSidebarHovered }) => {
  const [selectedSection, setSelectedSection] = useState<'powerpoint' | 'documentation' | null>(null);

  return (
    <main
      className={`flex-1 custom-scrollbar p-8 overflow-y-auto flex flex-col transition-all duration-300 ease-in-out ${
        isSidebarHovered ? 'blur-sm' : ''
      }`}
    >
      {/* Header */}
      <header className="mb-8 animate-slide-in-up">
        <h1 className="text-3xl font-light text-white">Reports & Documentation</h1>
        <p className="text-gray-400 mt-2">Generate presentations and documentation for your firewall operations</p>
      </header>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        {/* PowerPoint Section */}
        <div 
          className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 flex flex-col transition-all duration-500 ease-out cursor-pointer hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20 animate-slide-in-up ${
            selectedSection === 'powerpoint' ? 'ring-2 ring-blue-500/50' : ''
          }`}
          onClick={() => setSelectedSection(selectedSection === 'powerpoint' ? null : 'powerpoint')}
          style={{ animationDelay: '0.1s' }}
        >
          {/* PowerPoint Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.5 2.5h-19A1.5 1.5 0 0 0 1 4v16a1.5 1.5 0 0 0 1.5 1.5h19A1.5 1.5 0 0 0 23 20V4a1.5 1.5 0 0 0-1.5-1.5zM8 17H6V7h4.5a3.5 3.5 0 0 1 0 7H8v3zm0-5h2.5a1.5 1.5 0 0 0 0-3H8v3z"/>
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-white text-center">PowerPoint Presentations</h2>
          <p className="text-gray-300 text-center mb-6">
            Create professional presentations for security reports, incident analysis, and system overviews
          </p>

          {selectedSection === 'powerpoint' && (
            <div className="space-y-4 animate-slide-in-up">
              <div className="grid grid-cols-1 gap-3">
                <Button 
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
                >
                  Security Incident Report
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
                >
                  Monthly Security Overview
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
                >
                  Firewall Configuration Summary
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
                >
                  Threat Analysis Presentation
                </Button>
              </div>
            </div>
          )}

          {!selectedSection && (
            <div className="flex-1 flex items-end justify-center">
              <Button 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
              >
                Explore Templates
              </Button>
            </div>
          )}
        </div>

        {/* Documentation Section */}
        <div 
          className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 flex flex-col transition-all duration-500 ease-out cursor-pointer hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 animate-slide-in-up ${
            selectedSection === 'documentation' ? 'ring-2 ring-green-500/50' : ''
          }`}
          onClick={() => setSelectedSection(selectedSection === 'documentation' ? null : 'documentation')}
          style={{ animationDelay: '0.2s' }}
        >
          {/* Documentation Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                <path d="M14 2v6h6"/>
                <path d="M16 13H8"/>
                <path d="M16 17H8"/>
                <path d="M10 9H8"/>
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-white text-center">Documentation</h2>
          <p className="text-gray-300 text-center mb-6">
            Generate comprehensive documentation for policies, procedures, and technical specifications
          </p>

          {selectedSection === 'documentation' && (
            <div className="space-y-4 animate-slide-in-up">
              <div className="grid grid-cols-1 gap-3">
                <Button 
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
                >
                  Security Policy Document
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
                >
                  Incident Response Procedures
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
                >
                  Technical Configuration Guide
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium py-3 rounded-lg transition-all duration-300"
                >
                  Compliance Report
                </Button>
              </div>
            </div>
          )}

          {!selectedSection && (
            <div className="flex-1 flex items-end justify-center">
              <Button 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300"
              >
                Browse Templates
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Recent Reports Section */}
      <section className="mt-8 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Security Report</span>
                <span className="text-xs text-green-400">Completed</span>
              </div>
              <h4 className="text-white font-medium">Weekly Security Analysis</h4>
              <p className="text-gray-400 text-sm mt-1">Generated 2 hours ago</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Documentation</span>
                <span className="text-xs text-yellow-400">In Progress</span>
              </div>
              <h4 className="text-white font-medium">Firewall Policy Update</h4>
              <p className="text-gray-400 text-sm mt-1">Started 1 day ago</p>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-4 hover:bg-gray-700/70 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Presentation</span>
                <span className="text-xs text-blue-400">Scheduled</span>
              </div>
              <h4 className="text-white font-medium">Monthly Board Review</h4>
              <p className="text-gray-400 text-sm mt-1">Due in 3 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS for slide-in animation */}
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
    </main>
  );
};

export default Reports;

