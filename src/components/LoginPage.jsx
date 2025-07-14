import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import NetworkBackground from './NetworkBackground';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 relative overflow-hidden">
      {/* Network Background Animation */}
      <NetworkBackground />
      
      {/* Sign In Link */}
      <div className="absolute top-6 right-6 z-20">
        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
          Sign In
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Welcome Message */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-white leading-tight">
              Welcome to Your Secure Firewall Assistant
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Control your firewall with a chatbot, detect threats with AI, and monitor your network, all in one place.
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold text-white mb-8 text-center">
                Login to your account
              </h2>
              
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 text-sm">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 h-12"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-gray-300 text-sm">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 h-12 pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-12 rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  Login now
                </Button>

                {/* Sign Up Link */}
                <div className="text-center pt-4">
                  <span className="text-gray-400 text-sm">
                    Don't Have An Account?{' '}
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Sign Up
                    </a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

