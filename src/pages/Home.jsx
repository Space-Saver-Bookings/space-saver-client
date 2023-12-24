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
import {getAvailableTimeSlots, getBookings} from '../services/apiBookings';
import EmptyDashContent from '../components/dashboard/EmptyDashContent';

/**
 * Home is the main dashboard component displaying the summary of bookings, rooms, and other analytics.
 * It provides an overview of the most used room, rooms in use, users in rooms, and allows for quick booking actions.
 */
function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [mostUsedRoom, setMostUsedRoom] = useState('');
  const [roomsInUse, setRoomsInUse] = useState(0);
  const [usersInRooms, setUsersInRooms] = useState(0);
  // const [availabilities, setAvailabilities] = useState([]);

  let mostUsedRoomName = '';
  if (rooms && mostUsedRoom) {
    const foundRoom = rooms.find((room) => room._id === mostUsedRoom);
    if (foundRoom) {
      mostUsedRoomName = foundRoom.name;
    }
  }

  let isNoBooking;
  // let bookAgainName;
  // let bookAgainDate;
  // if (bookings) {
  //   isNoBooking = bookings?.length < 1;
  //   bookAgainName = bookings?.at(-1)?.room_id?.name;
  //   bookAgainDate = bookings?.at(-1)?.start_time.toLocaleDateString();
  // }

  let bookAgainName;
  let bookAgainDate;
  if (bookings && bookings.length > 0) {
    const lastBooking = bookings.at(-1);
    if (lastBooking) {
      bookAgainName = lastBooking.room_id?.name;
      bookAgainDate = new Date(lastBooking.start_time).toLocaleDateString();
    }
  }

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

      if (fetchedRooms) {
        setRooms(fetchedRooms);
      }
      setIsLoading(false);
    }

    async function fetchBookings() {
      try {
        const fetchedBookings = await getBookings();

        if (fetchedBookings) {
          setBookings(fetchedBookings);
        }

        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    async function fetchData() {
      try {
        const data = await getAvailableTimeSlots();
        console.log(data);
        if (data) {
          setMostUsedRoom(data.mostUsedRoom);
          setRoomsInUse(data.numberOfRoomsInUse);
          setUsersInRooms(data.numberOfUsersInRooms.totalNumberOfUsers);
        }
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }

    // async function fetchAvailabilities() {
    //   try {
    //     const fetchedAvailabilities = await getAvailableTimeSlots();

    //     if (fetchAvailabilities) {
    //       console.log(fetchedAvailabilities);
    //       // const currentRoomTimeSlot =
    //       //   fetchedAvailabilities.availableTimeSlots.filter(
    //       //     (room) => room.room_id === roomId
    //       //   );

    //       // if (currentRoomTimeSlot) {
    //       //   setAvailabilities(currentRoomTimeSlot?.at(0)?.time_slots || []);
    //       // }
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   }
    // }

    fetchBookings();
    getRooms();
    fetchData();
    // fetchAvailabilities();
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
            styling="col-start-1 col-end-[15] row-span-6"
            content={
              isNoBooking ? (
                <EmptyDashContent message="No booking found" />
              ) : (

                bookAgainDate && bookAgainName ? 
                <Book
                  bookAgainName={bookAgainName}
                  bookAgainDate={bookAgainDate}
                />
                :
                <EmptyDashContent message='Not enough data to show'/>
              )
            }
          />

          {/* <DashItem
            heading="Quick Booking"
            styling="col-span-7 row-span-6"
            content={
              isNoBooking ? (
                <EmptyDashContent message="No booking found" />
              ) : (
                <Book isQuickBooking />
              )
            }
          /> */}

          <DashItem
            heading="Available Rooms"
            content={
              rooms.length < 1 ? (
                <EmptyDashContent message="No rooms found" />
              ) : (
                <ListContent
                  contentType="rooms"
                  toolTipTitle="Go to room"
                  rooms={roomsUpdated}
                />
              )
            }
            styling="col-span-full col-start-[15] row-span-full row-start-1 rounded-xl"
          />

          <DashItem
            heading="Upcoming Bookings"
            content={
              bookings.length < 1 ? (
                <EmptyDashContent message="No upcoming bookings" />
              ) : (
                <ListContent
                  contentType="upcomingBookings"
                  bookings={bookings}
                />
              )
            }
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
              content={<Analytic text="Rooms in use" roomsInUse={roomsInUse} />}
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
              content={
                <Analytic text="Users in rooms" usersInRooms={usersInRooms} />
              }
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
                  size="text-xl"
                  mostUsedRoom={mostUsedRoomName}
                />
              }
            />
          </section>
        </>
      )}
    </section>
  );
}

export default Home;
