import Divider from '../Divider';
import StyledNavLink from './StyledNavLink';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import MeetingRoomRoundedIcon from '@mui/icons-material/MeetingRoomRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

function MainNav() {
  return (
    <nav className="h-full px-10 py-6">
      <ul className="flex h-full list-none flex-col items-start gap-6">
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
          <StyledNavLink
            path="/spaces"
            linkName="Spaces"
            icon={<ApartmentRoundedIcon />}
          />
        </li>
        <li>
          <StyledNavLink
            path="/rooms"
            linkName="Rooms"
            icon={<MeetingRoomRoundedIcon />}
          />
        </li>
        <li className="flex grow"></li>
        <Divider />
        <li>
          <StyledNavLink
            path="/settings"
            linkName="Settings"
            icon={<SettingsRoundedIcon />}
          />
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
