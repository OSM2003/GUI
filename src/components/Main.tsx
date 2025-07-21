import React, { useState } from 'react';
import Lottie from "lottie-react";
import animatedBlob from "@/assets/animatedBlob.json";

import { Button } from '@/components/ui/button';
import NetworkBackground from '@/components/NetworkBackground';
interface MainProps {
  onLogout: () => void;
}

const Main: React.FC<MainProps> = ({ onLogout }) => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <div
      className="flex bg-gradient-to-br from-black via-gray-900 to-blue-900 relative h-screen"
    >
      <NetworkBackground />
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarHovered ? 'w-64' : 'w-20'
        } bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl ml-[10px] my-[10px] flex flex-col py-6 transition-all duration-300 ease-in-out overflow-hidden h-[calc(100vh-20px)]`}
        onMouseEnter={() => setIsSidebarHovered(true)}
        onMouseLeave={() => setIsSidebarHovered(false)}
      >
        {/* Top Section - Logo and Top Navigation */}
        <div className="flex flex-col">
          <div className="mb-4 flex flex-col items-center">
            {/* Padding before divider */}
            <div style={{ height: "12px" }} />
            <div className="flex items-center justify-center w-full">
              <img 
                src="src/assets/Warden.png" 
                alt="Warden Logo" 
                className="w-12 h-12 transition-all duration-300 ease-in-out" 
              />
              {isSidebarHovered && (
                <span className="ml-3 text-white font-semibold text-lg opacity-0 animate-fade-in">
                  Warden
                </span>
              )}
            </div>
            {/* Padding after logo, before divider */}
            <div style={{ height: "12px" }} />
            {/* Divider line */}
            <div
              style={{
                width: isSidebarHovered ? "200px" : "53.36px",
                height: 0,
                borderTop: "1.11px solid rgba(255,255,255,0.2)",
                margin: "12px 0",
                transition: "width 0.3s ease-in-out"
              }}
            />
            {/* Padding after divider */}
            <div style={{ height: "12px" }} />
          </div>
          
          {/* Top Navigation Buttons */}
          <nav className="flex flex-col space-y-4 px-3">
            {/* Menu Button */}
            <button className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group">
              <img 
                src="src/assets/apps.png" 
                alt="menu" 
                style={{ 
                  width: 30, 
                  height: 30, 
                  opacity: 0.6,
                  transition: "all 0.3s ease-in-out"
                }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  Menu
                </span>
              )}
            </button>

            {/* Dashboard Button */}
            <button className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group">
              <img 
                src="src/assets/dashboard.png" 
                alt="Dashboard" 
                style={{ 
                  width: 30, 
                  height: 30, 
                  opacity: 0.5,
                  transition: "all 0.3s ease-in-out"
                }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  Dashboard
                </span>
              )}
            </button>

            {/* Topology Button */}
            <button className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group">
              <img 
                src="src/assets/topology.png" 
                alt="Topology" 
                style={{ 
                  width: 30, 
                  height: 30, 
                  opacity: 0.6,
                  transition: "all 0.3s ease-in-out"
                }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  Topology
                </span>
              )}
            </button>

            {/* Chatbot Button */}
            <button className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group">
              <img 
                src="src/assets/chatbot.png" 
                alt="Chatbot" 
                style={{ 
                  width: 30, 
                  height: 30, 
                  opacity: 0.6,
                  transition: "all 0.3s ease-in-out"
                }}
              />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  Chatbot
                </span>
              )}
            </button>
          </nav>
        </div>

        {/* Spacer to push bottom section down */}
        <div className="flex-1"></div>

        {/* Bottom Section - Bottom Navigation */}
        <div className="flex flex-col">
          {/* Divider line */}
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

          {/* Bottom Navigation Buttons */}
          <nav className="flex flex-col space-y-4 px-3">
            {/* Report Button */}
            <button className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group">
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

            {/* Information Button */}
            <button className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group">
              <img 
                  src="src/assets/information.png" 
                  alt="Information" 
                  style={{ 
                    width: 30, 
                    height: 30, 
                    opacity: 0.6,
                    transition: "all 0.3s ease-in-out"
                  }}
                />
              {isSidebarHovered && (
                <span className="ml-4 text-sm font-medium opacity-0 animate-fade-in whitespace-nowrap">
                  About Us
                </span>
              )}
            </button>

            {/* Logout Button */}
            <button 
              onClick={onLogout}
              className="flex items-center p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors group"
            >
              <img 
                src="src/assets/exit.png" 
                alt="Logout" 
                style={{ 
                  width: 30, 
                  height: 30, 
                  opacity: 0.5,
                  transition: "all 0.3s ease-in-out"
                }}
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
      <main
        className={`flex-1 p-8 overflow-y-auto flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarHovered ? 'blur-sm' : ''
        }`}
      >
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-light text-white">Chatbot-Guided Firewall Operations</h1>
        </header>

        {/* Dashboard Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-2 gap-8 flex-1">
          {/* Left Column - Warden Chatbot */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 flex flex-col items-center justify-center h-full min-h-[500px]">
            <h2 className="text-2xl font-bold mb-8 text-white">Warden Chatbot</h2>

                      {/* 3D Sphere Visualization */}
            <div className="relative w-64 h-64 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-fuchsia-500 to-violet-500 rounded-full blur-sm opacity-80 animate-pulse"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-cyan-600 via-fuchsia-600 to-violet-600 rounded-full blur-md opacity-60"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-cyan-700 via-fuchsia-700 to-violet-700 rounded-full blur-md opacity-40"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-violet-500 shadow-[0_0_35px_8px_rgba(255,0,255,0.4)] animate-pulse">

                  {/* Optional rotating border ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-spin-slow z-0"></div>

                  {/* Lottie Animation */}
                  <div className="z-10 w-40 h-40">
                    <Lottie animationData={animatedBlob} loop={true} />
                  </div>
                </div>
              </div>
            </div>

                      <Button className="mb-4 px-10 py-3 bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 hover:brightness-110 text-white font-medium rounded-full shadow-lg transition-all duration-300">
              Try Now
            </Button>

                      <p className="text-center text-gray-300 text-base max-w-sm">
              A chatbot that turns your words into real-time system actions — instantly.
            </p>
          </div>


          {/* Right Column - All Other Cards */}
          <div className="flex flex-col gap-6 h-full min-h-[400px]">
            {/* Welcome Back */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-white">Welcome Back</h2>
                <img
                  src="src/assets/cr.png"
                  alt="Warden Logo"
                  className="w-10 h-10 rounded-full border border-blue-500"
                  style={{ boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
                />
              </div>
              <p className="text-gray-300 text-2xl mb-2 ml-10">Osamah Alananzeh</p>
            </div>
              
            {/* Current Threats Blocked */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Current Threats Blocked</h2>
              <ul className="space-y-2">
                <li className="text-gray-300">
                  <span className="font-semibold">Malware:</span> Trojan detected in file upload
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Phishing:</span> Suspicious email link blocked
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">DDoS Attack:</span> Traffic surge mitigated
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Unauthorized Access:</span> Login attempt blocked
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Ransomware:</span> File encryption attempt stopped
                </li>
              </ul>
            </div>
            {/* System Status and Recent Activities */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">System Status</h2>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-300">All Systems Operational</span>
              </div>
              <span className="text-sm text-gray-400">Last checked: 2 minutes ago</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-300">Minor Issues Detected</span>
              </div>
              <span className="text-sm text-gray-400">Last checked: 5 minutes ago</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-300">Critical Alert: Firewall Breach</span>
              </div>
              <span className="text-sm text-gray-400">Last checked: 10 minutes ago</span>
            </div>
          </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Recent Activities</h2>
              <ul className="space-y-2">
                <li className="text-gray-300">
                  <span className="font-semibold">User Login:</span> Osamah Alananzeh logged in at 10:30 AM
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Firewall Rule Update:</span> New rule added at 10:45 AM
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">Threat Detected:</span> Suspicious activity blocked at 10:50 AM
                </li>
                <li className="text-gray-300">
                  <span className="font-semibold">System Check:</span> All systems operational at 11:00 AM
                </li>
              </ul>
            </div>
            </div>
          </section>
        </main>

      {/* Custom CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Main;

