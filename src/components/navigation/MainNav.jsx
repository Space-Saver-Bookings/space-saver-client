import StyledNavLink from './StyledNavLink';
import HomeIcon from '@mui/icons-material/Home';

function MainNav() {
  return (
    <nav>
      <ul className="flex h-full list-none flex-col gap-8 bg-slate-400">
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
        <li>
          <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
