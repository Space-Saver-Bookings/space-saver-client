import PropTypes from 'prop-types';
import DashTableList from '../../components/dashboard/DashTableList';
import {createData} from '../../helpers/createData';

function ListContent({toolTipTitle, contentType}) {
  let columns, rows;

  // TODO: add custom hook for fetched data with react query instead of hard coded
  switch (contentType) {
    case 'rooms':
      columns = ['Room', 'Next Available', 'Capacity'];
      rows = Array.from(Array(15), () => createData(10310, '28/11/23', 4));
      break;
    case 'roomAvailabilities':
      columns = ['Date', 'Time', 'Duration'];
      rows = Array.from(Array(15), () =>
        createData('28/11/23', '4:19pm', '1hr')
      );
      break;
    case 'users':
      columns = ['Name', 'Email', 'Date Added', 'Position'];
      rows = Array.from(Array(10), () =>
        createData('John Doe', 'johndoe@gmail.com', '28/11/23', 'Web Developer')
      );
      break;
    case 'roomUsers':
      columns = ['Name', 'Email', 'Type', 'Position'];
      rows = Array.from(Array(9), () =>
        createData('John Doe', 'johndoe@gmail.com', 'Guest', 'Web Developer')
      );
      rows.unshift(
        createData('John Doe', 'johndoe@gmail.com', 'Resever', 'Web Developer')
      );
      break;
    case 'upcomingBookings':
      columns = ['Room', 'Title', 'Date', 'Time', 'Duration', 'Attendees'];
      rows = Array.from(Array(15), () =>
        createData(10310, 'Booking with...', '28/11/23', '12:00pm', '1hr', 2)
      );
      break;
    case 'activeBookings':
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
  columns: PropTypes.array,
  rows: PropTypes.array,
  toolTipTitle: PropTypes.string,
  contentType: PropTypes.string,
};

export default ListContent;
