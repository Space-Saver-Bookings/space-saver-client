import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

function StyledNavLink({linkName, icon, path}) {
  return (
    <NavLink to={path}>
      {icon}
      <span>{linkName}</span>
    </NavLink>
  );
}

StyledNavLink.propTypes = {
  linkName: PropTypes.string,
  icon: PropTypes.element,
  path: PropTypes.string,
};

export default StyledNavLink;
