import React, { useRef, useEffect, useState } from 'react';
import Login90s from './Login90s';
 import Login20s from './Login20s';
 import LoginMid20s from './LoginMid20s';
// import Login2020s from './Login2020s';
// import LoginModern from './LoginModern';
import { motion, AnimatePresence } from 'framer-motion';

const components = [
  { title: 'Login — 90s', component: <Login90s /> },
   { title: 'Login — 20s', component: <Login20s /> },
  { title: 'Login — Mid 20s', component: <LoginMid20s /> },
//   { title: 'Login — 2020s', component: <Login2020s /> },
//   { title: 'Login — Modern', component: <LoginModern /> },
];

const backgrounds = [
  'bg-gradient-to-br from-gray-800 to-gray-300', // 90s
  'bg-gradient-to-br from-blue-100 to-white',    // 20s
  'bg-gradient-to-br from-pink-100 to-yellow-100', // Mid 20s
  'bg-gradient-to-br from-indigo-300 to-purple-100', // 2020s
  'bg-gradient-to-br from-gray-900 to-slate-700', // Modern
];

const LoginCarousel = () => {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  const handleScroll = () => {
    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setIndex(newIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div className={`h-screen transition-all duration-700 ease-in-out ${backgrounds[index]} text-white`}>
    <div className="text-center py-6 bg-opacity-50 backdrop-blur-sm">
      <AnimatePresence mode="wait">
        <motion.h1
          key={components[index].title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-serif drop-shadow"
        >
          {components[index].title}
        </motion.h1>
      </AnimatePresence>
    </div>
   <div
        ref={containerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory h-[85vh] scrollbar-hide"
      >
        {components.map((item, i) => (
          <div key={i} className="snap-center shrink-0 w-full flex justify-center items-center px-4">
            <div className="w-full max-w-lg">{item.component}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LoginCarousel;
