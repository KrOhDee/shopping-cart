import { HashRouter, Routes, HashRoute } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Navbar from './components/Navbar';

function RouteSwitch() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <HashRoute path="*" element={<Homepage />} />
        <HashRoute path="/" element={<Homepage />} />
        <HashRoute path="/shop" element={<Shop />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
