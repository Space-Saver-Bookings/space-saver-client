// TODO: this is a duplicate of the new Rooms component, update it
import DashTableList from '../../components/dashboard/DashTableList';

function createData(roomNumber, date, capacity) {
  return {roomNumber, date, capacity};
}

function AvailableRooms() {

  const columns = ['Room #', 'Next Available', 'Capacity'];
  const rows = Array.from(Array(15), () => createData(10310, '28/11/23', 4));

  return (
    <section className="h-full">
      <DashTableList columns={columns} rows={rows} />
    </section>
  );
}

export default AvailableRooms;
