import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

function StyledNavLink({linkName, icon, path}) {
  return (
    <NavLink
      to={path}
      // className={(isActive) =>
      //   `flex items-center hover:bg-blue-300 transition-all ${isActive ? 'bg-blue-200 rounded-lg p-2 pr-20 w-[12rem]' : ''}`
      // }
      className="nav-hover flex w-[13rem] items-center rounded-lg px-3 py-3 pr-20"
    >
      {icon}
      <span className="pl-3 text-lg">{linkName}</span>
    </NavLink>
  );
}

StyledNavLink.propTypes = {
  linkName: PropTypes.string,
  icon: PropTypes.element,
  path: PropTypes.string,
};

export default StyledNavLink;
