import React, { useState } from 'react';

const Login20s = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center h-[85vh] bg-gradient-to-br from-blue-200 via-white to-blue-100 text-black font-sans border border-blue-400 rounded-md shadow-lg">
      <div className="bg-white border border-blue-300 p-6 w-80 rounded-md shadow-[6px_6px_0_#4a90e2]">
        <h2 className="text-center text-xl font-bold text-blue-700 mb-4 border-b-2 border-blue-300 pb-1">
          {isSignUp ? 'Create Your Account' : 'Member Login'}
        </h2>

        <form className="flex flex-col text-sm" onSubmit={(e) => e.preventDefault()}>
          <label className="mb-2">
            Username:
            <input
              type="text"
              className="w-full mt-1 p-1 border border-blue-300 rounded bg-blue-50"
              placeholder="Enter username"
            />
          </label>

          <label className="mb-2">
            Password:
            <input
              type="password"
              className="w-full mt-1 p-1 border border-blue-300 rounded bg-blue-50"
              placeholder="Enter password"
            />
          </label>

          {isSignUp && (
            <label className="mb-2">
              Confirm Password:
              <input
                type="password"
                className="w-full mt-1 p-1 border border-blue-300 rounded bg-blue-50"
                placeholder="Re-enter password"
              />
            </label>
          )}

          <button
            type="submit"
            className="mt-3 py-1 bg-gradient-to-r from-blue-400 to-blue-600 text-white border border-blue-800 rounded shadow-md hover:from-blue-500 hover:to-blue-700"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <p
          className="mt-4 text-xs text-center text-blue-600 underline cursor-pointer hover:text-blue-800"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? 'Already a member? Login' : 'New user? Sign up here'}
        </p>

        <p className="text-[10px] text-center mt-4 text-gray-500">© 2003 NetPortal</p>
      </div>
    </div>
  );
};

export default Login20s;
