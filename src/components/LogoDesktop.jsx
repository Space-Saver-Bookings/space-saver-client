import desktopLogo from '../assets/logo/ss-logo.png';
import Divider from './Divider';

function LogoDesktop() {
  return (
    <div>
      <img
        src={desktopLogo}
        alt="SpaceSaver desktop logo"
        className="mt-[-3rem]"
      />
      <Divider/>
    </div>
  );
}

export default LogoDesktop;
