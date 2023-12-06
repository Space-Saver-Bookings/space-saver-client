import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

function StyledNavLink({linkName, icon, path}) {
  return (
    <NavLink
      to={path}
      className={(isActive) =>
        `flex items-center hover:bg-blue-400 transition-all ${isActive ? 'bg-blue-100 rounded p-2 pr-20 w-full' : ''}`
      }
    >
      {icon}
      <span className="px-3 text-lg">{linkName}</span>
    </NavLink>
  );
}

StyledNavLink.propTypes = {
  linkName: PropTypes.string,
  icon: PropTypes.element,
  path: PropTypes.string,
};

export default StyledNavLink;