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
import {AuthProvider} from './auth/AuthContext';
import {Toaster} from 'react-hot-toast';
import ProtectedRoute from './auth/ProtectedRoute';

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
                  <Route
                    path="home"
                    element={
                      <ProtectedRoute>
                        <Home />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="bookings"
                    element={
                      <ProtectedRoute>
                        <Bookings />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="spaces"
                    element={
                      <ProtectedRoute>
                        <Spaces />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="spaces/:spaceName/:spaceId"
                    element={
                      <ProtectedRoute>
                        <Space />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="rooms"
                    element={
                      <ProtectedRoute>
                        <Rooms />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="rooms/:roomName/:roomId"
                    element={
                      <ProtectedRoute>
                        <Room />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="settings"
                    element={
                      <ProtectedRoute>
                        <Settings />
                      </ProtectedRoute>
                    }
                  />
                </Route>

                <Route path="register" element={<Register />} />
                <Route path="login" element={<LogIn />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>

            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{margin: '8px'}}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: '16px',
                  maxWidth: '400px',
                  padding: '16px 24px',
                  // backgroundColor: 'var(--color-grey-0)',
                  // color: 'var(--color-grey-700)',
                },
              }}
            />
          </PageHeadingProvider>
        </ModalProvider>
      </LocalizationProvider>
    </AuthProvider>
  );
}

export default App;
