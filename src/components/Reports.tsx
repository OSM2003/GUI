import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ReportsProps {
  isSidebarHovered: boolean;
}

const Reports: React.FC<ReportsProps> = ({ isSidebarHovered }) => {
  const [selectedSection, setSelectedSection] = useState<'powerpoint' | 'documentation' | null>(null);

  // Add state to show the pptx in an iframe
  const [showPptx, setShowPptx] = useState(false);

  return (
    <main
      className={` custom-scrollbar flex-1 p-8 overflow-y-auto flex flex-col transition-all duration-300 ease-in-out ${
        isSidebarHovered ? 'blur-sm' : ''
      }`}
    >
      {/* Header */}
      <header className="mb-8 animate-slide-in-up">
        <h1 className="text-3xl font-light text-white text-center">Powerpoint & Documentation</h1>
      </header>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1">
        {/* PowerPoint Section */}
        <div 
          className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 flex flex-col transition-all duration-500 ease-out cursor-pointer hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 animate-slide-in-up ${
            selectedSection === 'powerpoint' ? 'ring-2 ring-orange-500/50' : ''
          }`}
          onClick={() => {
            setSelectedSection('powerpoint');
            setShowPptx(true);
          }}
          style={{ animationDelay: '0.1s' }}
        >
          <div className="flex items-center justify-center mb-6"></div>
          <div className="flex items-center justify-center mb-6"></div>

          {/* PowerPoint Icon */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.5 2.5h-19A1.5 1.5 0 0 0 1 4v16a1.5 1.5 0 0 0 1.5 1.5h19A1.5 1.5 0 0 0 23 20V4a1.5 1.5 0 0 0-1.5-1.5zM8 17H6V7h4.5a3.5 3.5 0 0 1 0 7H8v3zm0-5h2.5a1.5 1.5 0 0 0 0-3H8v3z"/>
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-white text-center">PowerPoint Presentation</h2>

          {selectedSection === 'powerpoint' && showPptx && (
            <div className="w-full h-[500px] mt-4 rounded-xl overflow-hidden bg-black">
             <iframe
  title="pptx"
  src="https://view.officeapps.live.com/op/embed.aspx?src=https://OSM2003.github.com/GUI/src/assets/Create%20and%20Connect%20Private%20and%20Public%20Networks%20on.pptx"
  width="100%"
  height="600px"
  frameBorder="0"
  allowFullScreen
></iframe>

            </div>
          )}
        </div>

        {/* Documentation Section */}
        <div 
          className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 flex flex-col transition-all duration-500 ease-out cursor-pointer hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 animate-slide-in-up ${
            selectedSection === 'documentation' ? 'ring-2 ring-green-500/50' : ''
          }`}
          onClick={() => setSelectedSection('documentation')}
          style={{ animationDelay: '0.2s' }}
        >
          {/* Centered Documentation Icon */}
          <div className="flex justify-center items-center mb-6 w-full">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mx-auto">
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
          {selectedSection === 'documentation' && (
            <div className="w-full h-[500px] mt-4 rounded-xl overflow-hidden bg-black">
              <iframe
                title="pdf"
                src="/src/assets/Graduation.pdf"
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full"
              ></iframe>
            </div>
          )}
        </div>
      </section>
      {/* Animation CSS */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(0);
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