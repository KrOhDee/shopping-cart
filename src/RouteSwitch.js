import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Shop from './pages/Shop';
import Navbar from './components/Navbar';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='*' element={<Homepage />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
