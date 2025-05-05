import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginEvolutionFlow from './components/LoginEvolutionFlow';

import Login90s from './components/Login90s';
 // import Login20s from './components/Login20s';
// import LoginMid20s from './components/LoginMid20s';
// import Login2020s from './components/Login2020s';
// import LoginModern from './components/LoginModern';

function App() {
  return (
    <>
<LoginEvolutionFlow/>
    </>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login90s />} />
    //     <Route path="/20s" element={<Login20s />} />
    //     <Route path="/mid20s" element={<LoginMid20s />} />
    //     <Route path="/2020s" element={<Login2020s />} />
    //     <Route path="/modern" element={<LoginModern />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
