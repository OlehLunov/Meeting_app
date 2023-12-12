import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Reg from './components/Registration/Reg';
import Main from './components/Main/Main';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Reg />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;
