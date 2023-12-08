import AvailableRoomTable from "../../components/dashboard/AvailableRoomTable";

function AvailableRoom() {
    return (
      <section className="h-full bg-blue-200">
        <div className="flex justify-evenly gap-4">
          <p>Room #</p>
          <p>Next Available</p>
          <p>Capacity</p>
        </div>

        {/* <div className="flex justify-between px-5 mt-2">
          <p>10310</p>
          <p>28/11/23</p>
          <p>4</p>
        </div> */}

        <AvailableRoomTable/>
      </section>
    );
}

export default AvailableRoom
