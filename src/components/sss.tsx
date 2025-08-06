import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

interface ChatBotProps {
  isSidebarHovered: boolean;
}

const ChatBot: React.FC<ChatBotProps> = ({ isSidebarHovered }) => {
  const [open, setOpen] = useState(false);
  const [isTableExpanded, setIsTableExpanded] = useState(false);

  return (
    <div
      className={`custom-scroll relative w-full m-10 max-w-7xl mx-auto flex gap-6 flex-1 p-8 overflow-y-auto transition-all duration-300 ease-in-out ${
        isSidebarHovered ? 'blur-sm' : ''
      }`}
      style={{
        scrollBehavior: 'smooth',
        transform: 'translateZ(0)',
        willChange: 'scroll-position',
        marginLeft: isSidebarHovered ? '220px' : '120px',
        transition: 'margin-left 0.3s ease'
      }}>
      {/* Chat Section */}
      <div className={`${isTableExpanded ? 'w-[60%]' : 'w-full'} relative transition-all duration-300 rounded-xl overflow-hidden`}>
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black"
          style={{
            width: "100%",
            height: 0,
            borderTop: "1.11px solid rgba(255,255,255,0.2)",
            margin: "12px auto",
            transition: "width 0.3s ease-in-out"
          }}
        />
        <img
          src="src/assets/Warden.png"
          alt="ChatBot"
          className="absolute inset-0 w-full h-full object-cover blur-lg"
        />
        <div className="relative flex flex-col h-full p-8 bg-white/10 backdrop-blur-md rounded-xl border border-[#61C3CB75] text-white">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-6">
            <div className="flex justify-start">
              <div className="bg-blue-600 rounded-lg px-4 py-2 max-w-xs">
                Hello! I'm Warden, your AI assistant for firewall operations. How can I help you today?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-gray-600 rounded-lg px-4 py-2 max-w-xs">
                Show me the current firewall status
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-blue-600 rounded-lg px-4 py-2 max-w-xs">
                The firewall is currently active and monitoring all network traffic. Would you like me to show you the detailed status report?
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 bg-[#012A39] rounded-lg px-4 py-3 border border-[#61C3CB75] focus:border-blue-500 focus:outline-none"
            />
            <Button className="px-6 py-3 h-full bflex-1 bg-[#012A39] rounded-lg border border-[#61C3CB75] text-white">
              <img
                src="src/assets/send.png"
                alt="Send"
                className="w-5 h-5"
                style={{ opacity: 0.8, transition: "opacity 0.3s ease-in-out" }}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* Latest Configuration Changes Section */}
      <div 
        className={`transition-all duration-300 ${isTableExpanded ? 'w-[40%]' : 'w-[50px]'} flex flex-col gap-6 relative`}
        style={{
          position: 'relative',
          height: 'auto',
          minHeight: '400px',
          borderRadius: '20px',
          background: 'rgba(1, 42, 57, 0.75)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(97, 195, 203, 0.45)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isTableExpanded ? 'flex-start' : 'center',
          alignItems: isTableExpanded ? 'flex-start' : 'center',
          padding: isTableExpanded ? '20px' : '0',
          cursor: 'pointer'
        }}
        onClick={() => setIsTableExpanded(!isTableExpanded)}
      >
        {!isTableExpanded && (
          <Button className="p-0 w-full h-full flex items-center justify-center">
            <span className="text-white text-xs rotate-90 whitespace-nowrap">Latest Configuration Changes</span>
          </Button>
        )}
        {isTableExpanded && (
          <div className="w-full h-full flex flex-col">
            <div className="flex justify-between items-center border-b border-white/20 pb-2 mb-4">
              <h2 className="text-sm font-SF Pro Rounded text-white">Latest Configuration Changes</h2>
              <div className="relative">
                <button
                  onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
                  className="text-sm text-white/70 flex items-center gap-1 focus:outline-none"
                >
                  Date
                  <span className="select-none">
                    {open ? (
                      <img src="src/assets/angle-up.png" alt="Up" className="w-3 h-3" />
                    ) : (
                      <img src="src/assets/angle-down.png" alt="Down" className="w-3 h-3" />
                    )}
                  </span>
                </button>
                {open && (
                  <ul className="absolute right-0 mt-1 w-28 bg-[#012A39]/90 rounded-md border border-[#61C3CB75] shadow-lg text-white text-xs z-10">
                    {months.map((month) => (
                      <li
                        key={month}
                        className="px-3 py-1 hover:bg-[#61C3CB]/50 cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Selected: ${month}`);
                          setOpen(false);
                        }}
                      >
                        {month}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 text-xs text-white/70 font-SF Pro Rounded border-b border-white/10 pb-2 mb-2">
              <div>Time</div>
              <div>Command</div>
            </div>
            <div className="flex-1 overflow-y-auto max-h custom-scroll">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className="grid grid-cols-2 text-sm py-2 border-b border-white/5">
                  <div className="font-bold">17 Sun 11:56:0{i % 10}</div>
                  <div className="truncate">Block IP 192.168.{i}.{i}...</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBot;


