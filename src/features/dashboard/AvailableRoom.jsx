import DashTableList from '../../components/dashboard/DashTableList';

function createData(roomNumber, date, capacity) {
  return {roomNumber, date, capacity};
}

const columns = ['Room #', 'Next Available', 'Capacity'];
const rows = Array.from(Array(15), () => createData(10310, '28/11/23', 4));

function AvailableRoom() {
  return (
    <section className="h-full">
      <DashTableList height={660} columns={columns} rows={rows} />
    </section>
  );
}

export default AvailableRoom;
