import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Navbar from './components/Navbar';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
