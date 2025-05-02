import React, { useState } from 'react';

const LoginModern = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-full h-screen flex items-center justify-center font-sans">
      <div className="relative w-[900px] h-[550px] rounded-xl overflow-hidden shadow-2xl border border-gray-700 backdrop-blur-xl">

        {/* Main layout container */}
        <div className="absolute top-0 left-0 w-full h-full flex">

          {/* Signup Form */}
          <div className={`w-1/2 h-full flex items-center justify-center px-6 transition-opacity duration-700 ${isSignUp ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <form className="bg-white/10 backdrop-blur-md p-8 rounded-lg w-full max-w-sm text-white shadow-xl space-y-4">
              <h2 className="text-3xl font-bold text-center">Create Account</h2>
              <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none" />
              <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none" />
              <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none" />
              <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 py-2 rounded-md font-semibold">Sign Up</button>
            </form>
          </div>

          {/* Login Form */}
          <div className={`w-1/2 h-full flex items-center justify-center px-6 transition-opacity duration-700 ${isSignUp ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}>
            <form className="bg-white/10 backdrop-blur-md p-8 rounded-lg w-full max-w-sm text-white shadow-xl space-y-4">
              <h2 className="text-3xl font-bold text-center">Sign In</h2>
              <input type="text" placeholder="Username" className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none" />
              <input type="password" placeholder="Password" className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-gray-300 focus:outline-none" />
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-md font-semibold">Login</button>
            </form>
          </div>
        </div>

        {/* Sliding Info Panel */}
        <div
          className={`absolute top-0 h-full w-1/2 transition-all duration-700 ease-in-out 
          ${isSignUp ? 'left-1/2' : 'left-0'} 
          bg-gradient-to-br from-pink-500 to-yellow-400 text-white flex items-center justify-center text-center px-10`}
        >
          <div className="space-y-4 max-w-xs">
            {isSignUp ? (
              <>
                <h2 className="text-3xl font-bold">Welcome Back!</h2>
                <p>Already have an account? Sign in to stay connected.</p>
                <button
                  onClick={() => setIsSignUp(false)}
                  className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-pink-500 transition"
                >
                  Sign In
                </button>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold">Hello, Friend!</h2>
                <p>Enter your personal details and start your journey with us.</p>
                <button
                  onClick={() => setIsSignUp(true)}
                  className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-yellow-500 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModern;
