import PropTypes from 'prop-types';
import DashTableList from '../../components/dashboard/DashTableList';
import {createData} from '../../helpers/createData';

function ListContent({
  toolTipTitle,
  contentType,
  spaceUsers,
  spaceAdmin,
  rooms,
  roomAvailabilities,
  bookings,
}) {
  let columns, rows;

  // Function to extract date, time, and duration from booking start and end times
  const extractBookingDetails = (startIsoString, endIsoString) => {
    const startDate = new Date(startIsoString);
    const endDate = new Date(endIsoString);

    // Extract date in the format 'MM/DD/YYYY'
    const date = startDate.toLocaleDateString('en-AU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    // Extract start time in the format 'HH:MM AM/PM'
    const time = startDate.toLocaleTimeString('en-AU', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    // Calculate duration in hours
    const durationInMilliseconds = endDate - startDate;
    const durationInHours = Math.round(
      durationInMilliseconds / (1000 * 60 * 60)
    );
    const duration = `${durationInHours}hr`;

    return {date, time, duration};
  };

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
      if (!roomAvailabilities) {
        return <div>Loading...</div>;
      } else {
        columns = ['Date', 'Time', 'Duration'];
        rows = Array.from(roomAvailabilities, (availability) =>
          createData(
            availability.date,
            availability.time,
            availability.duration
          )
        );
      }
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
    // case 'roomUsers':
    //   columns = ['Name', 'Email', 'Type', 'Position'];
    //   rows = Array.from(Array(9), () =>
    //     createData('John Doe', 'johndoe@gmail.com', 'Guest', 'Web Developer')
    //   );
    //   rows.unshift(
    //     createData('John Doe', 'johndoe@gmail.com', 'Resever', 'Web Developer')
    //   );
    //   break;
    case 'upcomingBookings':
      columns = ['Room', 'Title', 'Date', 'Time', 'Duration', 'Attendees'];
      rows = Array.from(bookings, (booking) => {
        const {date, time, duration} = extractBookingDetails(
          booking.start_time,
          booking.end_time
        );
        
        return createData(
          booking.room_id.name,
          booking.description.split(' ').slice(0, 3).join(' ') + '...',
          date,
          time,
          duration,
          booking.invited_user_ids.length + 1
        );
      });
      break;
    // case 'upcomingBookingsShort':
    //   columns = ['Booking', 'Start', 'End'];
    //   rows = Array.from(Array(15), () =>
    //     createData(20346, '12:00pm', '1:00pm')
    //   );
    //   break;
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
  roomAvailabilities: PropTypes.array,
  bookings: PropTypes.array,
};

export default ListContent;
