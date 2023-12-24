import PropTypes from 'prop-types';
import DashTableList from '../../components/dashboard/DashTableList';
import {createData} from '../../helpers/createData';

function ListContent({
  toolTipTitle,
  contentType,
  spaceUsers,
  spaceAdmin,
  rooms,
}) {
  let columns, rows;

  // TODO: add custom hook for fetched data with react query instead of hard coded
  switch (contentType) {
    case 'rooms':
      if (!rooms) {
        return <div>Loading...</div>;
      } else {
        columns = ['Room', 'Next Available', 'Capacity'];
        // rows = Array.from(Array(15), () => createData(10310, '28/11/23', 4));
        // TODO: still need to fix hard coded next available
        rows = Array.from(rooms, (room) =>
          createData(room.name, '28/11/23', room.capacity)
        );
      }
      break;
    case 'roomAvailabilities':
      columns = ['Date', 'Time', 'Duration'];
      rows = Array.from(Array(15), () =>
        createData('28/11/23', '4:19pm', '1hr')
      );
      break;
    case 'spaceUsers':
      if (!spaceUsers) {
        return <div>Loading...</div>;
      } else {
        columns = ['Name', 'Email', 'Type', 'Position'];
        rows = Array.from(spaceUsers, (user) =>
          createData(
            `${user.first_name} ${user.last_name}`,
            user.email,
            `${String(spaceAdmin) === String(user._id) ? 'Admin' : 'User'}`,
            user.position
          )
        );
      }
      break;
    case 'roomUsers':
      columns = ['Name', 'Email', 'Type', 'Position'];
      rows = Array.from(Array(9), () =>
        createData('John Doe', 'johndoe@gmail.com', 'Guest', 'Web Developer')
      );
      rows.unshift(
        createData('John Doe', 'johndoe@gmail.com', 'Reserver', 'Web Developer')
      );
      break;
    case 'upcomingBookings':
      columns = ['Room', 'Title', 'Date', 'Time', 'Duration', 'Attendees'];
      rows = Array.from(Array(15), () =>
        createData(10310, 'Booking with...', '28/11/23', '12:00pm', '1hr', 2)
      );
      break;
    case 'upcomingBookingsShort':
      columns = ['Booking', 'Start', 'End'];
      rows = Array.from(Array(15), () =>
        createData(20346, '12:00pm', '1:00pm')
      );
      break;
    default:
      throw new Error(`Unrecognized content type: ${contentType}`);
  }

  return (
    <section className="mt-[-.2rem] h-full">
      <DashTableList
        columns={columns}
        rows={rows}
        toolTipTitle={toolTipTitle}
      />
    </section>
  );
}

ListContent.propTypes = {
  toolTipTitle: PropTypes.string,
  contentType: PropTypes.string,
  spaceUsers: PropTypes.array,
  spaceAdmin: PropTypes.string,
  rooms: PropTypes.array,
};

export default ListContent;
