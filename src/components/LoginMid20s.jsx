import React, { useState } from 'react';

const LoginMid20s = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-pink-500 via-red-400 to-yellow-300 flex items-center justify-center font-sans">
      <div className="w-[360px] bg-white/10 backdrop-blur-lg text-white p-8 rounded-2xl shadow-2xl border border-white/20 transition-all duration-500">
        <h2 className="text-3xl font-bold text-center mb-6">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>

        <form className="flex flex-col space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
          />

          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          )}

          <button
            type="submit"
            className="w-full bg-white text-pink-500 font-bold py-2 rounded-md hover:bg-gray-100 transition"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p
          onClick={() => setIsSignUp(!isSignUp)}
          className="mt-4 text-center text-sm text-white underline cursor-pointer hover:text-yellow-100"
        >
          {isSignUp ? 'Already registered? Login' : 'Need an account? Sign up'}
        </p>

        <p className="text-[10px] text-center mt-4 text-white/60">© 2015 FlatDesign Inc.</p>
      </div>
    </div>
  );
};

export default LoginMid20s;
