import {Avatar} from '@mui/material';
import {usePageHeading} from '../contexts/usePageHeading';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function Header() {
  const {heading, setHeading} = usePageHeading();
  const {pathname} = useLocation();
  const pathnameArr = pathname.split('/');
  let pageHeading;

  console.log(pathnameArr);

  if (pathnameArr.length <= 2) {
    pageHeading = pathname.slice(1);
    console.log(pageHeading);
  } else if (pathnameArr.length > 2) {
    pageHeading = decodeURI(pathname.split('/').at(2));
  }

  useEffect(() => {
    switch (pageHeading) {
      case 'home':
        setHeading(`Good Afternoon, Alex!`);
        break;
      case 'bookings':
        setHeading('Bookings');
        break;
      case 'spaces':
        setHeading('Spaces');
        break;
      case 'rooms':
        setHeading('Rooms');
        break;
      case 'settings':
        setHeading('Settings');
        break;
      default:
        setHeading(pageHeading);
    }
  }, [setHeading, pageHeading]);

  return (
    <div className="col-span-full col-start-2 flex items-center justify-between px-8 font-coplette text-5xl">
      {/* <h1>Good %timeOfDay%, %firstName%</h1> */}
      <h1 className="tracking-wide">{heading}</h1>
      <Avatar {...stringAvatar('Alex Holder')} />
    </div>
  );
}

export default Header;
