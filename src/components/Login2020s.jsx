import React, { useState } from 'react';

const Login2020s = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center h-[85vh] bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 font-sans">
      <div className="backdrop-blur-md bg-white/30 border border-white/40 p-8 w-80 rounded-2xl shadow-xl transition-all">
        <h2 className="text-center text-3xl font-bold mb-6 text-white drop-shadow-md">
          {isSignUp ? 'Join Us' : 'Welcome Back'}
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-xl border-none bg-white/60 focus:ring-2 focus:ring-indigo-400 focus:outline-none placeholder-gray-700 text-gray-900"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-xl border-none bg-white/60 focus:ring-2 focus:ring-indigo-400 focus:outline-none placeholder-gray-700 text-gray-900"
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-xl border-none bg-white/60 focus:ring-2 focus:ring-pink-400 focus:outline-none placeholder-gray-700 text-gray-900"
            />
          )}

          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-indigo-400 to-pink-400 text-white rounded-xl hover:from-indigo-500 hover:to-pink-500 transition"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p
          className="mt-4 text-sm text-center text-white underline cursor-pointer hover:text-indigo-200"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Already have an account? Login' : 'New here? Create an account'}
        </p>

        <p className="text-[10px] text-center mt-4 text-white/70">© 2021 Glassify Inc.</p>
      </div>
    </div>
  );
};

export default Login2020s;
