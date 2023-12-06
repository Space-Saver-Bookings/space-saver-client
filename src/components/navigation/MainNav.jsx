import Divider from '../Divider';
import StyledNavLink from './StyledNavLink';
import HomeIcon from '@mui/icons-material/Home';

function MainNav() {
  return (
    <nav className="h-full w-full p-7">
      <ul className="flex h-full list-none flex-col items-center gap-10">
        <li>
          <StyledNavLink path="/home" linkName="Home" icon={<HomeIcon />} />
        </li>
        <li>
          <span>Bookings</span>
        </li>
        <li>
          <span>Spaces</span>
        </li>
        <li>
          <span>Rooms</span>
        </li>
        <li className="flex grow"></li>
        <Divider />
        <li>
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
