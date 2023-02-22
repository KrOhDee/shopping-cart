import { HashRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import Navbar from './components/Navbar';

function RouteSwitch() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
