import NoMeetingRoomRoundedIcon from '@mui/icons-material/NoMeetingRoomRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';

import DashItem from '../components/dashboard/DashItem';
import Analytic from '../features/home/Analytic';
import Book from '../features/home/Book';
import ListContent from '../components/dashboard/ListContent';
import {useEffect, useState} from 'react';
import {getAllRooms} from '../services/apiRooms';
import MainSectionSpinner from '../components/spinner/MainSectionSpinner';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState([]);

  const roomsUpdated = rooms.map((room) => {
    return {
      name: room.name,
      nextAvailable: '28/11/23',
      capacity: room.capacity,
    };
  });

  useEffect(() => {
    async function getRooms() {
      const fetchedRooms = await getAllRooms();
      setIsLoading(false);

      if (fetchedRooms) {
        setRooms(fetchedRooms);
      }
    }

    getRooms();
  }, []);

  return (
    // SECTION AS GRID CONTAINER
    <section
      className={
        isLoading
          ? 'h-full w-full'
          : `grid h-full gap-5 md:grid-cols-23 md:grid-rows-18`
      }
    >
      {/* DASH ITEMS AS GRID ITEMS */}
      {isLoading ? (
        <MainSectionSpinner />
      ) : (
        <>
          <DashItem
            heading="Book Again"
            styling="col-start-1 col-end-8 row-span-6"
            content={<Book />}
          />

          <DashItem
            heading="Quick Booking"
            styling="col-span-7 row-span-6"
            content={<Book isQuickBooking />}
          />

          <DashItem
            heading="Available Rooms"
            content={
              <ListContent
                contentType="rooms"
                toolTipTitle="Go to room"
                rooms={roomsUpdated}
              />
            }
            styling="col-span-full col-start-[15] row-span-full row-start-1 rounded-xl"
          />

          <DashItem
            heading="Upcoming Bookings"
            content={<ListContent contentType="upcomingBookings" />}
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
              content={<Analytic text="Rooms in use" />}
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
              content={<Analytic text="Users in rooms" />}
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
              content={<Analytic text="Most used room" size="text-6xl" />}
            />
          </section>
        </>
      )}
    </section>
  );
}

export default Home;
