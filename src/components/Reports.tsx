import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface ReportsProps {
  isSidebarHovered: boolean;
}

const Reports: React.FC<ReportsProps> = ({ isSidebarHovered }) => {
  const [selectedSection, setSelectedSection] = useState<'powerpoint' | 'documentation' | null>(null);

  // Add state to show the pptx and pdf in iframes
  const [showPptx, setShowPptx] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const handlePowerpointClick = () => {
    if (selectedSection === 'powerpoint' && showPptx) {
      // If already selected and showing, collapse it
      setShowPptx(false);
      setSelectedSection(null);
    } else {
      // Show powerpoint and hide documentation
      setSelectedSection('powerpoint');
      setShowPptx(true);
      setShowPdf(false);
    }
  };

  const handleDocumentationClick = () => {
    if (selectedSection === 'documentation' && showPdf) {
      // If already selected and showing, collapse it
      setShowPdf(false);
      setSelectedSection(null);
    } else {
      // Show documentation and hide powerpoint
      setSelectedSection('documentation');
      setShowPdf(true);
      setShowPptx(false);
    }
  };

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
          onClick={handlePowerpointClick}
          style={{ animationDelay: '0.1s' }}
        >
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
          <p className="text-gray-300 text-center text-sm">
            {showPptx ? 'Leave The Show' : 'Watch The Show'}
          </p>
        </div>

        {/* Documentation Section */}
        <div 
          className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 flex flex-col transition-all duration-500 ease-out cursor-pointer hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/20 animate-slide-in-up ${
            selectedSection === 'documentation' ? 'ring-2 ring-green-500/50' : ''
          }`}
          onClick={handleDocumentationClick}
          style={{ animationDelay: '0.2s' }}
        >
          <div className="flex items-center justify-center mb-6"></div>
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
          <p className="text-gray-300 text-center text-sm">
            {showPdf ? 'Leave The Art' : 'Watch The Art'}
          </p>
        </div>
      </section>

      {/* Expanded PowerPoint Section */}
      {showPptx && (
        <section className="mt-8 animate-slide-in-up">
          <div className="w-full flex justify-center">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-orange-500/30" 
                 style={{ width: '1200px', height: '675px' }}>
              <iframe
                title="PowerPoint Presentation"
                src="https://view.officeapps.live.com/op/embed.aspx?src=https://raw.githubusercontent.com/OSM2003/GUI/main/src/assets/Create%20and%20Connect%20Private%20and%20Public%20Networks%20on.pptx"
                width="1200"
                height="675"
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
                style={{ 
                  filter: 'brightness(1.1) contrast(1.05)',
                  background: 'white'
                }}
              ></iframe>
              {/* Loading overlay */}
              <div className="absolute top-4 right-4 bg-orange-500/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-orange-300 text-sm font-medium">PowerPoint</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Expanded Documentation Section */}
      {showPdf && (
        <section className="mt-8 animate-slide-in-up">
          <div className="w-full flex justify-center">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-green-500/30" 
                 style={{ width: '900px', height: '1200px' }}>
              <iframe
                title="Documentation PDF"
                src="/src/assets/Graduation.pdf"
                width="900"
                height="1200"
                frameBorder="0"
                className="absolute top-0 left-0 w-full h-full"
                style={{ 
                  filter: 'brightness(1.1) contrast(1.05)',
                  background: 'white'
                }}
              ></iframe>
              {/* Loading overlay */}
              <div className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-green-300 text-sm font-medium">Documentation</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Animation CSS */}
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

        /* Smooth transitions for iframe containers */
        section {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </main>
  );
};

export default Reports;