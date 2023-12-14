import DashTableList from '../../../components/dashboard/DashTableList';

function createData(roomNumber, title, date, time, duration, attendees) {
  return {roomNumber, title, date, time, duration, attendees};
}

const columns = ['Room #', 'Title', 'Date', 'Time', 'Duration', 'Attendees'];
const rows = Array.from(Array(15), () =>
  createData(10310, 'Booking with...', '28/11/23', '12:00pm', '1hr', 2)
);

function UpcomingBookings() {
  return (
    <section className="h-full">
      <DashTableList height={220} columns={columns} rows={rows} />
    </section>
  );
}

export default UpcomingBookings;
