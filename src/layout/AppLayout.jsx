import {Outlet} from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import useAuthToken from '../hooks/useAuthToken';
import { useEffect } from 'react';

function AppLayout() {
  useAuthToken();

  useEffect(() => {
    // This will run when the component mounts
    console.log('AppLayout mounted');

    // The cleanup function runs when the component unmounts
    return () => {
      console.log('AppLayout unmounted');
    };
  }, []);
  
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
