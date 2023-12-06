import DashCard from '../components/dashboard/DashCard';

function Home() {
  return (
    <section className="sm:grid-cols-23 sm:grid-rows-18 grid h-full gap-6">
      <DashCard type="medium" heading="Book Again" />
      {/* <div className="col-start-1 col-end-8 row-start-1 row-end-[7] rounded-xl bg-yellow-200">
        Book again
      </div> */}
      <div className="col-span-7 row-start-1 row-end-[7] rounded-xl bg-yellow-200">
        Quick Booking
      </div>
      <div className="col-span-full col-start-[15] row-span-full row-start-1 rounded-xl bg-yellow-200">
        Available rooms
      </div>
      <div className="col-start-1 col-end-[15] row-start-7 row-end-[14] rounded-xl bg-yellow-200">
        Upcoming bookings
      </div>
      <div className="col-start-1 col-end-[15] row-span-5 grid grid-cols-3 gap-8">
        <div className="rounded-xl bg-blue-200">rooms in use</div>
        <div className="rounded-xl bg-blue-200">users in rooms</div>
        <div className="rounded-xl bg-blue-200">Most used rooms</div>
      </div>
    </section>
  );
}

export default Home;
