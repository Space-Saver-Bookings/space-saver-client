import DashItem from '../components/dashboard/DashItem';

function Home() {
  return (
    <section className="grid h-full gap-5 sm:grid-cols-23 sm:grid-rows-18">
      <DashItem
        heading="Book Again"
        styling="col-start-1 col-end-8 row-start-1 row-end-[7]"
      />

      <DashItem
        heading="Quick Booking"
        styling="col-span-7 row-start-1 row-end-[7]"
      />

      <DashItem
        heading="Available Rooms"
        styling="col-span-full col-start-[15] row-span-full row-start-1 rounded-xl"
      />

      <DashItem
        heading="Upcoming Bookings"
        styling="col-start-1 col-end-[15] row-start-7 row-end-[14]"
      />

      <section className="col-start-1 col-end-[15] row-span-5 grid grid-cols-3 items-center gap-5">
        <DashItem heading="Rooms in use" styling="h-[12.5rem]" />
        <DashItem heading="Users in rooms" styling="h-[12.5rem]" />
        <DashItem heading="Most used room" styling="h-[12.5rem]" />
      </section>
    </section>
  );
}

export default Home;
