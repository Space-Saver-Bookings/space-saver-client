/* eslint-disable no-unused-vars */
import {Button, Modal} from '@mui/material';
import DashItem from '../components/dashboard/DashItem';
import ListContent from '../components/dashboard/ListContent';
import {AddRounded} from '@mui/icons-material';
import useModal from '../contexts/useModal.js';
import ModalBox from '../components/modal/ModalBox.jsx';
import {useState, useEffect} from 'react';
import Calendar from '../features/bookings/Calendar.jsx';
import AddNewBookingModalContent from '../features/bookings/AddNewBookingModalContent.jsx';
import EditBookingModalContent from '../features/bookings/EditBookingModalContent.jsx';
import {getBookings} from '../services/apiBookings.js';
import {getAllRooms} from '../services/apiRooms.js';
import {getUsers} from '../services/apiUsers.js';

function Bookings() {
  const {open, handleOpen, handleClose} = useModal();
  const [toggle, setToggle] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [users, setUsers] = useState([]);

  const roomOptions = rooms.map((room) => {
    return {
      identifier: room.name,
      roomId: room._id,
    };
  });

  const userOptions = users.map((user) => {
    return {
      identifier: `${user.first_name} ${user.last_name}`,
      userId: user._id,
    };
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();

        if (fetchedUsers) {
          setUsers(fetchedUsers);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  function handleToggle() {
    // Toggling between "My Bookings" and "All Bookings",
    setToggle((t) => !t);
  }
  function handleAddNewBooking() {
    // Open the modal for adding a new booking
    setSelectedBooking(null);
    handleOpen();
  }

  function handleEditBooking(booking) {
    // Open the modal for editing a booking
    setSelectedBooking(booking);
    handleOpen();
  }

  function handleRefreshBookings() {
    setRefresh(true);
    handleOpen();
  }

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const fetchedBookings = await getBookings(toggle);
        setBookings(fetchedBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
    setRefresh(false);
  }, [toggle, refresh]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const fetchedRooms = await getAllRooms();
        setRooms(fetchedRooms);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <section className="grid h-full gap-5 md:grid-cols-23 md:grid-rows-18">
      <div className="col-start-1 col-span-full row-span-1 flex flex-col items-center justify-center">
        <Button variant="contained" onClick={handleToggle}>
          {toggle ? 'My Bookings' : 'All Bookings'}
        </Button>
      </div>

      <section className="col-start-1 col-span-full row-end-[17] row-start-2 rounded-xl border-2 bg-white shadow-xl">
        <Calendar
          myBookingFilter={toggle}
          bookings={bookings}
          onEditBooking={handleEditBooking}
        />
      </section>

      {/* <DashItem
        heading="Upcoming Bookings"
        content={<ListContent contentType="upcomingBookingsShort" />}
        styling="col-span-full col-start-[16] row-end-[17] row-start-1 rounded-xl"
      /> */}

      {open && selectedBooking && (
        <Modal
          open={open && selectedBooking !== null}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox
            content={
              <EditBookingModalContent
                heading="Booking Details"
                booking={selectedBooking}
                handleClose={() => {
                  setSelectedBooking(null);
                  handleClose();
                }}
                handleRefreshBookings={handleRefreshBookings}
                roomOptions={rooms}
              />
            }
            height="h-auto"
            width="w-[38rem]"
          />
        </Modal>
      )}

      {open && !selectedBooking && (
        <Modal
          open={open && !selectedBooking}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox
            content={
              <AddNewBookingModalContent
                heading="Add New Booking"
                handleClose={() => {
                  setSelectedBooking(null);
                  handleClose();
                }}
                roomOptions={roomOptions}
                userOptions={userOptions}
              />
            }
            height="h-auto"
            width="w-[40rem]"
          />
        </Modal>
      )}

      <div className="col-span-full col-start-1 row-span-2 row-start-[17] flex flex-col items-center justify-center">
        <Button
          variant="contained"
          startIcon={<AddRounded />}
          onClick={handleAddNewBooking}
        >
          Add New Booking
        </Button>
      </div>
    </section>
  );
}

export default Bookings;
