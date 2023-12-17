import {Outlet} from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import useAuthToken from '../hooks/useAuthToken';

function AppLayout() {
  useAuthToken();

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
