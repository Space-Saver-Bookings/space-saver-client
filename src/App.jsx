import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import Bookings from './pages/Bookings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="bookings" element={<Bookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
