import { Route, Routes } from 'react-router-dom';
import Detail from './Component/Details';
import Home from './Component/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crypto/:id/" element={<Detail />} />
    </Routes>
  );
}

export default App;
