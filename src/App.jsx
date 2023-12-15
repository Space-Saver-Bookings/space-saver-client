import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import Spaces from './pages/Spaces';
import Rooms from './pages/Rooms';
import Settings from './pages/Settings';
import LogIn from './pages/LogIn';
import PageNotFound from './pages/PageNotFound';
import PageHeadingProvider from './contexts/PageHeadingContext';
import ModalProvider from './contexts/ModalContext';
import Space from './pages/Space';
import Room from './pages/Room';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import Register from './pages/Register';
import {AuthProvider} from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ModalProvider>
          <PageHeadingProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<AppLayout />}>
                  <Route index element={<Navigate replace to="home" />} />
                  <Route path="home" element={<Home />} />
                  <Route path="bookings" element={<Bookings />} />
                  <Route path="spaces" element={<Spaces />} />
                  <Route
                    path="spaces/:spaceName/:spaceId"
                    element={<Space />}
                  />
                  <Route path="rooms" element={<Rooms />} />
                  <Route path="rooms/:roomName/:roomId" element={<Room />} />
                  <Route path="settings" element={<Settings />} />
                </Route>

                <Route path="register" element={<Register />} />
                <Route path="login" element={<LogIn />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
          </PageHeadingProvider>
        </ModalProvider>
      </LocalizationProvider>
    </AuthProvider>
  );
}

export default App;
