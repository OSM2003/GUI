import React, { useState } from 'react';
import Lottie from "lottie-react";
import animatedBlob from "@/assets/animatedBlob.json";
import Reports from '@/components/Reports';

import { Button } from '@/components/ui/button';
import NetworkBackground from '@/components/NetworkBackground';
import Dashboard from '@/components/Dashboard1';
import ChatBot from '@/components/ChatBot';
import AboutUs from '@/components/AboutUs';

interface MainProps {
  onLogout: () => void;
}

const Main: React.FC<MainProps> = ({ onLogout }) => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="flex bg-gradient-to-br from-black via-gray-900 to-blue-900 relative h-screen">
      <NetworkBackground />
      
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarHovered ? 'w-64' : 'w-20'
        } bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl ml-[10px] my-[10px] flex flex-col py-6 transition-all duration-300 ease-in-out overflow-hidden h-[calc(100vh-20px)]`}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        {/* Top Section */}
        <div className="flex flex-col">
          <div className="mb-4 flex flex-col items-center">
            <div style={{ height: "12px" }} />
            <div className="flex items-center justify-center w-full">
              <img 
                src="src/assets/Warden.png" 
                alt="Warden Logo" 
                className="w-12 h-12 transition-all duration-300 ease-in-out" 
              />
              {isSidebarHovered && (
                <span className="ml-3 text-white font-SF Pro Rounded text-lg opacity-0 animate-fade-in">
                  Warden
                </span>
              )}
            </div>
            <div style={{ height: "12px" }} />
            <div
              style={{
                width: isSidebarHovered ? "200px" : "53.36px",
                height: 0,
                borderTop: "1.11px solid rgba(255,255,255,0.2)",
                margin: "12px 0",
                transition: "width 0.3s ease-in-out"
              }}
            />
            <div style={{ height: "12px" }} />
          </div>

          {/* Top Nav */}
          <nav className="flex flex-col space-y-4 px-3">
            <button 
              onClick={() => setCurrentView('home')}
              className={`flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group ${
                currentView === 'home' ? 'bg-gray-700 text-white' : ''
              }`}
            >
              <img 
                src="src/assets/apps.png" 
                alt="menu" 
                style={{ width: 30, height: 30, opacity: currentView === 'home' ? 1 : 0.3 }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  Menu
                </span>
              )}
            </button>

            <button 
              onClick={() => setCurrentView('dashboard')}
              className={`flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group ${
                currentView === 'dashboard' ? 'bg-gray-700 text-white' : ''
              }`}
            >
              <img 
                src="src/assets/dashboard.png" 
                alt="Dashboard" 
                style={{ width: 30, height: 30, opacity: currentView === 'dashboard' ? 1 : 0.5 }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  Dashboard
                </span>
              )}
            </button>

            <button className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group">
              <img 
                src="src/assets/topology.png" 
                alt="Topology" 
                style={{ width: 30, height: 30, opacity: 0.6 }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  Topology
                </span>
              )}
            </button>

            <button 
              onClick={() => setCurrentView('chatbot')}
              className={`flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group ${
                currentView === 'chatbot' ? 'bg-gray-700 text-white' : ''
              }`}
            >
              <img 
                src="src/assets/chatbot.png" 
                alt="Chatbot" 
                style={{ width: 30, height: 30, opacity: currentView === 'chatbot' ? 1 : 0.5 }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  Chatbot
                </span>
              )}
            </button>
          </nav>
        </div>

        <div className="flex-1" />

        {/* Bottom Nav */}
        <div className="flex flex-col">
          <div className="px-3 mb-4">
            <div
              style={{
                width: isSidebarHovered ? "200px" : "53.36px",
                height: 0,
                borderTop: "1.11px solid rgba(255,255,255,0.2)",
                margin: "12px auto",
                transition: "width 0.3s ease-in-out"
              }}
            />
          </div>

          <nav className="flex flex-col space-y-4 px-3">
            <button 
              onClick={() => setCurrentView("reports")}
              className={`flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group ${
                currentView === "reports" ? "bg-gray-700 text-white" : ""
              }`}
            >
              <img 
                src="src/assets/report.png" 
                alt="Report" 
                style={{ 
                  width: 30, 
                  height: 30, 
                  opacity: 0.6,
                  transition: "all 0.3s ease-in-out"
                }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  Reports
                </span>
              )}
            </button>

            <button 
              onClick={() => setCurrentView('aboutus')}
              className={`flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group ${
                currentView === 'aboutus' ? 'bg-gray-700 text-white' : ''
              }`}
            >
              <img 
                src="src/assets/information.png" 
                alt="Information" 
                style={{ width: 30, height: 30, opacity: currentView === 'aboutus' ? 1 : 0.6 }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  About Us
                </span>
              )}
            </button>

            <button 
              onClick={onLogout}
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group"
            >
              <img 
                src="src/assets/exit.png" 
                alt="Logout" 
                style={{ width: 30, height: 30, opacity: 0.5 }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  Logout
                </span>
              )}
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      {currentView === 'dashboard' ? (
        <Dashboard isSidebarHovered={isSidebarHovered} />
      ) : currentView === 'chatbot' ? (
        <ChatBot isSidebarHovered={isSidebarHovered} />
      ) : currentView === 'aboutus' ? (
        <AboutUs isSidebarHovered={isSidebarHovered} />
      ) : currentView === 'reports' ? (
        <Reports isSidebarHovered={isSidebarHovered} />
      ) : (
        <main className={`flex-1 p-8 overflow-y-auto custom-scrollbar flex flex-col transition-all duration-300 ease-in-out ${isSidebarHovered ? 'blur-sm' : ''}`}>
          <header className="mb-8">
            <h1 className="text-3xl font-light text-white text-center">
              Chatbot-Guided Firewall Operations
            </h1>
          </header>
          <section className="grid grid-cols-2 lg:grid-cols-2 gap-8 flex-1">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 flex flex-col items-center justify-center h-full min-h-[500px]">
              <h2 className="text-2xl font-bold mb-8 text-white">Warden Chatbot</h2>

              <div className="relative w-64 h-64 mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-violet-500 rounded-full blur-sm opacity-80 animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-cyan-600 via-fuchsia-600 to-violet-600 rounded-full blur-md opacity-60"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-cyan-700 via-fuchsia-700 to-violet-700 rounded-full blur-md opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-violet-500 shadow-[0_0_35px_8px_rgba(255,0,255,0.4)] animate-pulse">
                    <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow z-0"></div>
                    <div className="z-10 w-40 h-40">
                      <Lottie animationData={animatedBlob} loop={true} />
                    </div>
                  </div>
                </div>
              </div>

              {/* <Button className="mb-4 px-10 py-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:brightness-110 text-white font-medium rounded-full shadow-lg transition-all duration-300" */}
               <button onClick={() => setCurrentView('chatbot')}
                className={`mb-4 px-10 py-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:brightness-110 text-white font-medium rounded-full shadow-lg transition-all duration-300 group ${
                  currentView === 'chatbot' ? 'bg-gray-700 text-white' : ''
                }`}
                >
                Try Now
              </button>

              <p className="text-center text-gray-300 text-base max-w-sm">
                A chatbot that turns your words into real-time system actions — instantly.
              </p>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 h-full min-h-[400px]">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-SF Pro Rounded text-white">Welcome Back</h2>
                  <img src="src/assets/cr.png" alt="Warden Logo" className="w-10 h-10 rounded-full border border-blue-500" style={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }} />
                </div>
                <p className="text-gray-300 text-2xl mb-2 ml-10">Osamah Alananzeh</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                </div>
                <div className="bg-blue-900/30 rounded-lg p-4 mb-4">
                  <h3 className="text-sm text-gray-400 mb-2">Active Users</h3>
                  <div className="flex items-end space-x-2 h-20">
                    {[40, 60, 30, 80, 90, 70, 85, 95, 75, 60].map((height, index) => (
                      <div key={index} className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm flex-1" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center text-sm">
                  <div><div className="text-white font-SF Pro Rounded">32,984</div><div className="text-gray-400">Users</div></div>
                  <div><div className="text-white font-SF Pro Rounded">2.42m</div><div className="text-gray-400">Clicks</div></div>
                  <div><div className="text-white font-SF Pro Rounded">2,400$</div><div className="text-gray-400">Sales</div></div>
                  <div><div className="text-white font-SF Pro Rounded">320</div><div className="text-gray-400">Items</div></div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
                <h2 className="text-lg font-SF Pro Rounded text-white mb-4">Current Threats Blocked</h2>
                <div className="bg-blue-900/30 rounded-lg p-4 h-32 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 100">
                    <path d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z" fill="url(#gradient1)" className="opacity-80" />
                    <path d="M0,60 Q100,30 200,60 T400,60 L400,100 L0,100 Z" fill="url(#gradient2)" className="opacity-60" />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#0891B2" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div> {/* End of right column */}
          </section>
        </main>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Main;
