import React from 'react';

const Login90s = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#000080]">
      <div className="bg-gray-700 border-2 border-gray-600 p-6 w-80 shadow-[4px_4px_0px_rgba(0,0,0,0.5)]">
        <h1 className="text-center font-serif text-xl mb-4 text-black underline">Welcome</h1>
        <form className="flex flex-col font-serif text-sm text-black">
          <label className="mb-2">
            Username:
            <input
              type="text"
              className="w-full border border-black p-1 mt-1 mb-2 bg-white"
              placeholder="Enter Username"
            />
          </label>
          <label className="mb-2">
            Password:
            <input
              type="password"
              className="w-full border border-black p-1 mt-1 mb-2 bg-white"
              placeholder="Enter Password"
            />
          </label>
          <button
            type="submit"
            className="mt-3 bg-gray-400 border border-black px-4 py-1 hover:bg-gray-500"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-center mt-4 text-gray-700">© 1997 YourCompany</p>
      </div>
    </div>
  );
};

export default Login90s;
