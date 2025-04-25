import React, { useState } from 'react';

const LoginMid20s = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center h-[85vh] bg-gradient-to-br from-pink-100 to-yellow-100 text-gray-800 font-sans">
      <div className="bg-white border border-gray-200 p-8 w-80 rounded-xl shadow-md transition-all">
        <h2 className="text-center text-2xl font-semibold mb-6 text-gray-700">
          {isSignUp ? 'Create Account' : 'Login'}
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 transition"
            />
          )}

          <button
            type="submit"
            className="w-full bg-pink-400 text-white py-2 rounded-md hover:bg-pink-500 transition"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p
          className="mt-4 text-sm text-center text-pink-600 underline cursor-pointer hover:text-pink-800"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Already registered? Login' : 'Need an account? Sign up'}
        </p>

        <p className="text-[10px] text-center mt-4 text-gray-400">© 2015 FlatDesign Inc.</p>
      </div>
    </div>
  );
};

export default LoginMid20s;
