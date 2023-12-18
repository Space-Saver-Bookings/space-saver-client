import {Outlet} from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import useAuthToken from '../hooks/useAuthToken';
import FullPageSpinner from '../components/spinner/FullPageSpinner';
import useAuth from '../auth/useAuth';

function AppLayout() {
  const {isLoading} = useAuth();
  useAuthToken();

  if (isLoading) {
    return <FullPageSpinner />;
  }

  return (
    <div className="grid h-screen w-full grid-cols-[17rem_minmax(0,1fr)] grid-rows-[6.8rem_minmax(0,1fr)] bg-slate-100">
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
