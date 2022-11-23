import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Detail from './Component/Details';
import Home from './Component/Home';

function App() {
  return (
    <Routes>
      <Route path="React-Capstone/" element={<Home />} />
      <Route path="React-Capstone/crypto/:id/" element={<Detail />} />
    </Routes>
  );
}

export default App;
