import React, { useState } from 'react';

const Login2020s = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (

      <div
        className={`w-full ml-10 -mt-5 max-w-md p-8 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 border border-white/40 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-700 ease-in-out ${
          isSignUp ? 'min-h-[500px]' : 'min-h-[440px]'
        }`}
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg transition-opacity duration-700">
          {isSignUp ? 'Join the Future' : 'Welcome Back'}
        </h2>

        <form
          className="flex flex-col gap-5 transition-all duration-700 ease-in-out"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-xl bg-white/80 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg transition-all duration-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/80 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-lg transition-all duration-500"
          />

          <div
            className={`overflow-hidden transition-all duration-700 ${
              isSignUp ? 'opacity-100 max-h-[60px]' : 'opacity-0 max-h-0'
            }`}
          >
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-xl bg-white/80 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-lg transition-all duration-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-700 hover:to-pink-700 transition duration-300"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p
          onClick={() => setIsSignUp(!isSignUp)}
          className="mt-6 text-sm text-center text-white/90 cursor-pointer hover:underline hover:text-pink-200 transition duration-300"
        >
          {isSignUp ? 'Already have an account? Login' : 'New here? Create an account'}
        </p>

        <p className="text-[10px] text-center mt-4 text-white/60 transition-opacity duration-700">
          © 2021 Glassify Inc.
        </p>
      </div>

  );
};

export default Login2020s;
