import React from 'react';
import { 
  Grid3X3, 
  TrendingUp, 
  Settings, 
  Bell, 
  User, 
  LogOut,
  MessageCircle,
  BarChart3,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MainProps {
  onLogout: () => void;
}

const Main: React.FC<MainProps> = ({ onLogout }) => {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-20 bg-gray-900/50 flex flex-col items-center py-6 space-y-6 border-r border-gray-800">
        <div className="text-blue-400 text-2xl font-bold mb-4">M</div>
        <nav className="flex flex-col space-y-4">
          <button className="p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <Grid3X3 size={20} />
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <TrendingUp size={20} />
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <MessageCircle size={20} />
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <User size={20} />
          </button>
          <button className="p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors">
            <Shield size={20} />
          </button>
          <button 
            onClick={onLogout}
            className="p-3 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors mt-auto"
          >
            <LogOut size={20} />
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-black via-gray-900 to-blue-900/20">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-light text-white">Next generation firewall integrated with Chatbot</h1>
        </header>

        {/* Dashboard Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Warden Chatbot Section */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
            <h2 className="text-xl font-semibold mb-6 text-white">Warden Chatbot</h2>
            <div className="flex flex-col items-center justify-center">
              {/* 3D Sphere Visualization */}
              <div className="relative w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-full opacity-60"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-blue-700 via-purple-700 to-pink-700 rounded-full opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                    <MessageCircle size={40} className="text-white" />
                  </div>
                </div>
              </div>
              <Button className="mb-4 px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Try Now
              </Button>
              <p className="text-center text-gray-400 text-sm max-w-xs">
                A chatbot turns human language into system commands for easy control.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Welcome Back & Active Users */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-white">Welcome Back</h2>
                <div className="text-cyan-400">
                  <BarChart3 size={20} />
                </div>
              </div>
              <p className="text-gray-300 mb-4">Osamah Alananzeh</p>
              
              {/* Active Users Chart */}
              <div className="bg-blue-900/30 rounded-lg p-4 mb-4">
                <h3 className="text-sm text-gray-400 mb-2">Active Users</h3>
                <div className="flex items-end space-x-2 h-20">
                  {[40, 60, 30, 80, 90, 70, 85, 95, 75, 60].map((height, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm flex-1"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="text-white font-semibold">32,984</div>
                  <div className="text-gray-400">Users</div>
                </div>
                <div>
                  <div className="text-white font-semibold">2.42m</div>
                  <div className="text-gray-400">Clicks</div>
                </div>
                <div>
                  <div className="text-white font-semibold">2,400$</div>
                  <div className="text-gray-400">Sales</div>
                </div>
                <div>
                  <div className="text-white font-semibold">320</div>
                  <div className="text-gray-400">Items</div>
                </div>
              </div>
            </div>

            {/* Current Threats Blocked */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Current Threats Blocked</h2>
              
              {/* Wave Chart */}
              <div className="bg-blue-900/30 rounded-lg p-4 h-32 relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 400 100">
                  <path
                    d="M0,50 Q100,20 200,50 T400,50 L400,100 L0,100 Z"
                    fill="url(#gradient1)"
                    className="opacity-80"
                  />
                  <path
                    d="M0,60 Q100,30 200,60 T400,60 L400,100 L0,100 Z"
                    fill="url(#gradient2)"
                    className="opacity-60"
                  />
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#0891B2" stopOpacity="0.1"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;


