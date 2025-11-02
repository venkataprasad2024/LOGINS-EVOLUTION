import React, { useState } from 'react';

const LoginMid20s = ({ onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess(); // move to next era
  };

  return (
    <div className="w-[420px] ml-12 -mt-15 bg-gradient-to-br from-pink-500 via-red-400 to-yellow-300 backdrop-blur-lg text-white p-10 rounded-2xl shadow-2xl border border-white/20 transition-all duration-500">
      <h2 className="text-4xl font-bold text-center mb-8">
        {isSignUp ? 'Create Account' : 'Welcome Back'}
      </h2>

      <form className="flex flex-col space-y-5 text-base" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="w-full px-5 py-3 rounded-md bg-white/20 placeholder-white text-lg focus:outline-none focus:ring-2 focus:ring-white transition"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-5 py-3 rounded-md bg-white/20 placeholder-white text-lg focus:outline-none focus:ring-2 focus:ring-white transition"
        />

        {isSignUp && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-5 py-3 rounded-md bg-white/20 placeholder-white text-lg focus:outline-none focus:ring-2 focus:ring-white transition"
          />
        )}

        <button
          type="submit"
          className="w-full bg-white text-pink-500 text-lg font-bold py-3 rounded-md hover:bg-gray-100 transition"
        >
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>

      <p
        onClick={() => setIsSignUp(!isSignUp)}
        className="mt-6 text-center text-base text-white underline cursor-pointer hover:text-yellow-100"
      >
        {isSignUp ? 'Already registered? Login' : 'Need an account? Sign up'}
      </p>

      <p className="text-xs text-center mt-4 text-white/60">© 2015 FlatDesign  \\\\\\\\\
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      Inc.</p>
      
    </div>
  );
};

export default LoginMid20s;
