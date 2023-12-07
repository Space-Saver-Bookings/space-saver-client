import {Outlet} from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[18rem_minmax(0,1fr)] grid-rows-[7rem_minmax(0,1fr)] bg-slate-100 w-full">
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
