import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Spaces from './pages/Spaces';
import Rooms from './pages/Rooms';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="spaces" element={<Spaces />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
