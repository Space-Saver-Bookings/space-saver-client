import NoMeetingRoomRoundedIcon from '@mui/icons-material/NoMeetingRoomRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';

import DashItem from '../components/dashboard/DashItem';
import Analytic from '../features/dashboard/Analytic';
import Book from '../features/dashboard/Book';
import AvailableRooms from '../features/dashboard/AvailableRooms';
import UpcomingBookings from '../features/dashboard/UpcomingBookings';

function Home() {
  return (
    <section className="grid h-full gap-5 sm:grid-cols-23 sm:grid-rows-18">
      <DashItem
        heading="Book Again"
        styling="col-start-1 col-end-8 row-start-1 row-end-[7]"
        content={<Book roomNumber="1802" date="21/11/23" />}
      />

      <DashItem
        heading="Quick Booking"
        styling="col-span-7 row-start-1 row-end-[7]"
        content={
          <Book
            roomNumber="3401"
            date="13/8/23"
            isBookFor={true}
            time="13:20pm"
          />
        }
      />

      <DashItem
        heading="Available Rooms"
        content={<AvailableRooms/>}
        styling="col-span-full col-start-[15] row-span-full row-start-1 rounded-xl"
      />

      <DashItem
        heading="Upcoming Bookings"
        content={<UpcomingBookings/>}
        styling="col-start-1 col-end-[15] row-start-7 row-end-[14]"
      />

      <section className="col-start-1 col-end-[15] row-span-5 grid grid-cols-3 gap-5">
        <DashItem
          heading={
            <NoMeetingRoomRoundedIcon
              sx={{
                fontSize: '2.4rem',
                color: 'rgb(30 64 175)',
              }}
            />
          }
          content={<Analytic text="Rooms in use" amount={8} />}
        />
        <DashItem
          heading={
            <PeopleRoundedIcon
              sx={{
                fontSize: '2.4rem',
                color: 'rgb(30 64 175)',
              }}
            />
          }
          content={<Analytic text="Users in rooms" amount={16} />}
        />
        <DashItem
          heading={
            <EqualizerRoundedIcon
              sx={{
                fontSize: '2.4rem',
                color: 'rgb(30 64 175)',
              }}
            />
          }
          content={
            <Analytic
              text="Most used room"
              amount={3023}
              size="text-6xl"
            />
          }
        />
      </section>
    </section>
  );
}

export default Home;
