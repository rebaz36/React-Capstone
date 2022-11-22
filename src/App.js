import { Route, Routes } from 'react-router-dom';
import Detail from './Component/Details';
import Home from './Component/Home';
import Nav from './Component/Nav';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto/:id/" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
