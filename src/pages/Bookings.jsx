import {Button, Modal} from '@mui/material';
import DashItem from '../components/dashboard/DashItem';
import ListContent from '../components/dashboard/ListContent';
import {AddRounded} from '@mui/icons-material';
import useModal from '../contexts/useModal.js';
import ModalBox from '../components/modal/ModalBox.jsx';
import {useState} from 'react';
import Calendar from '../features/bookings/Calendar.jsx';
// import AddNewBookingModalContent from '../features/bookings/AddNewBookingModalContent.jsx';
import EditBookingModalContent from '../features/bookings/EditBookingModalContent.jsx';

function Bookings() {
  const {open, handleOpen, handleClose} = useModal();
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((t) => !t);
  }

  return (
    <section className="grid h-full gap-5 md:grid-cols-23 md:grid-rows-18">
      <div className="col-start-1 col-end-[16] row-span-1 flex flex-col items-center justify-center">
        <Button variant="contained" onClick={handleToggle}>
          {toggle ? 'My Bookings' : 'All Bookings'}
        </Button>
      </div>

      <section className="col-start-1 col-end-[16] row-span-full row-start-2 rounded-xl border-2 bg-white shadow-xl">
        {/* TODO: Calendar logic is separated into its own component */}
        <Calendar />
      </section>

      {/* TODO: figure out how to open a modal when a user clicks on an upcoming booking */}
      <DashItem
        heading="Upcoming Bookings"
        content={<ListContent contentType="upcomingBookingsShort" />}
        styling="col-span-full col-start-[16] row-end-[17] row-start-1 rounded-xl"
      />

      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {/* <ModalBox
            content={
              <AddNewBookingModalContent
                heading="Add New Booking"
                handleClose={handleClose}
              />
            }
            height="h-auto"
            width="w-[38rem]"
          /> */}
          {/* TODO: this was used to check the modal through the add new booking btn, 
          but it should come from clicking on a booking on the upcoming bookings list */}
          <ModalBox
            content={
              <EditBookingModalContent
                heading="Booking Details"
                handleClose={handleClose}
              />
            }
            height="h-auto"
            width="w-[38rem]"
          />
        </Modal>
      )}

      <div className="col-span-full col-start-[16] row-span-2 row-start-[17] flex flex-col items-center justify-center">
        {/* TODO: change this to process and submit add new booking form */}
        <Button
          variant="contained"
          startIcon={<AddRounded />}
          onClick={handleOpen}
        >
          Add New Booking
        </Button>
      </div>
    </section>
  );
}

export default Bookings;
