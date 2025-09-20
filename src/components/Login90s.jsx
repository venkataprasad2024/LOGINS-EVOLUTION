import React, { useState } from 'react';

const Login90s = ({ onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate login success
    onLoginSuccess(); 
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 to-gray-300 text-black font-serif">
      <div className="w-96 border border-black p-6 shadow-[6px_6px_0_#000] bg-white">
        <h1 className="text-center text-2xl mb-4 underline uppercase">
          {isSignUp ? 'Create Account' : 'Login'}
        </h1>

        <form className="flex flex-col gap-3 text-sm" onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              className="w-full border border-black p-1 mt-1 bg-white text-black"
              placeholder="Enter username"
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              className="w-full border border-black p-1 mt-1 bg-white text-black"
              placeholder="Enter password"
            />
          </label>

          {isSignUp && (
            <label>
              Confirm Password  :
              <input
                type="password"
                className="w-full border border-black p-1 mt-1 bg-white text-black"
                placeholder="Re-enter password"
              />
            </label>
          )}

          <button
            type="submit"
            className="mt-3 bg-gray-800 text-white py-1 hover:bg-gray-900 border border-black shadow-[2px_2px_0_#000]"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p
          onClick={() => setIsSignUp(!isSignUp)}
          className="mt-4 text-center text-xs cursor-pointer underline hover:text-gray-600"
        >
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </p>

        <p className="text-[10px] text-center mt-4 text-gray-500">© 1997 YourCompany</p>
      </div>
    </div>
  );
};

export default Login90s;
