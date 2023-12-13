import PropTypes from 'prop-types';
import desktopLogo from '../assets/logo/ss-logo.png';
import Divider from './Divider';

function LogoDesktop({NoDivider}) {
  return (
    <div>
      <img
        src={desktopLogo}
        alt="SpaceSaver desktop logo"
        className="mt-[-3rem]"
      />
      {!NoDivider && <Divider />}
    </div>
  );
}

LogoDesktop.propTypes = {
  NoDivider: PropTypes.bool,
};

export default LogoDesktop;
