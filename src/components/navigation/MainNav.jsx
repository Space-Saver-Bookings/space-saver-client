import Divider from '../Divider';
import StyledNavLink from './StyledNavLink';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

function MainNav() {
  return (
    <nav className="h-full px-10 py-6">
      <ul className="flex h-full list-none flex-col items-start gap-10">
        <li>
          <StyledNavLink
            path="/home"
            linkName="Home"
            icon={<HomeRoundedIcon />}
          />
        </li>
        <li>
          <StyledNavLink
            path="/bookings"
            linkName="Bookings"
            icon={<CalendarMonthRoundedIcon />}
          />
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
