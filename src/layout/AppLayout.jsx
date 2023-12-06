import {Outlet} from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-5 grid-rows-[80px_minmax(0,1fr)] bg-slate-100">
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element,
};

export default AppLayout;
