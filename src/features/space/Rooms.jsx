import DashTableList from "../../components/dashboard/DashTableList";
import { createData } from "../../helpers/createData";

function Rooms() {

  const columns = ['Room #', 'Next Available', 'Capacity'];
  const rows = Array.from(Array(15), () => createData(10310, '28/11/23', 4));

  return (
    <section className="h-full">
      <DashTableList height={660} columns={columns} rows={rows} />
    </section>
  );
}

export default Rooms
