import PropTypes from 'prop-types';
// import Button from '../../components/buttons/Button';
import {Button, TextField} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import Tag from '../../components/Tag';
import {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import {editBooking, deleteBooking} from '../../services/apiBookings';

function EditBookingModalContent({heading, handleClose, booking, ...props}) {
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    room: '',
    date: null,
    startTime: null,
    endTime: null,
    inviteUsers: [],
    description: '',
  });
  function handleToggle() {
    setToggle((t) => !t);
  }
  // // TODO: figure out options and how to work with this data
  const roomOptions = [
    {identifier: 'Room 1', roomId: 1234},
    {identifier: 'Room 2', roomId: 1234},
    {identifier: 'Room 3', roomId: 1234},
    {identifier: 'Room 4', roomId: 1234},
  ];

  // const userOptions = [
  //   {identifier: 'User 1', userId: 1234},
  //   {identifier: 'User 1', userId: 1234},
  //   {identifier: 'User 1', userId: 1234},
  //   {identifier: 'User 1', userId: 1234},
  // ];

  useEffect(() => {
    if (booking) {
      setFormData({
        title: booking.title || '',
        room: booking.room_id?.name || '',
        date: booking.start_time || null,
        startTime: booking.start_time || null,
        endTime: booking.end_time || null,
        inviteUsers: booking.invited_user_ids || [],
        description: booking.description || '',
      });
    }
  }, [booking]);

  async function handleConfirmEdit() {
    try {
      const changes = {...formData};
      console.log(changes);

      if (Object.keys(changes).length > 0) {
        await editBooking(booking?._id, changes);
        console.log('Confirmed Edit');
      }
      // eslint-disable-next-line react/prop-types
      props.handleRefreshBookings();
      handleClose();
    } catch (error) {
      console.error('Error confirming edit:', error);
    }
  }

  async function handleRemoveBooking() {
    try {
      await deleteBooking(booking?.id);
      console.log('Remove Booking');
      handleClose();
    } catch (error) {
      console.error('Error removing booking:', error);
    }
  }

  return (
    <>
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-full flex-col items-center gap-2 px-8">
        <div className="flex w-full gap-3">
          <div className="flex w-[16rem] flex-col">
            <label className="self-start text-lg" htmlFor="">
              Booking Title
            </label>
            <TextField
              required
              value={formData.title}
              id="outlined-basic"
              label="required"
              variant="outlined"
              fullWidth
              disabled={!toggle}
              onChange={(field) =>
                setFormData({...formData, title: field.target.value})
              }
            />
          </div>

          <div className="flex w-[15rem] flex-col">
            <label className="self-start text-lg" htmlFor="">
              Room
            </label>
            <Tag options={roomOptions} isDisabled={!toggle} />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="mt-1 flex flex-col gap-2">
            <label className="self-start text-lg" htmlFor="">
              Date
            </label>
            <DatePicker
              label="required*"
              value={dayjs(formData.date)}
              className="self-start"
              disabled={!toggle}
              onChange={(date) => {
                setFormData({...formData, date: date.toDate()});
              }}
            />
          </div>

          <div className="mt-1 flex flex-col gap-2">
            <label className="self-start text-lg" htmlFor="">
              Start Time
            </label>
            <TimePicker
              label="required*"
              value={formData.startTime ? dayjs(formData.startTime) : null}
              className="w-[8.5rem] self-start"
              disabled={!toggle}
              onChange={(date) =>
                setFormData({...formData, startTime: date.toDate()})
              }
            />
          </div>
          <div className="mt-1 flex flex-col gap-2">
            <label className="self-start text-lg" htmlFor="">
              End Time
            </label>
            <TimePicker
              label="required*"
              value={formData.endTime ? dayjs(formData.endTime) : null}
              className="w-[8.5rem] self-start"
              disabled={!toggle}
              onChange={(date) =>
                setFormData({...formData, endTime: date.toDate()})
              }
            />
          </div>
        </div>

        {/* <label className="self-start text-lg" htmlFor="">
          Invite Users
        </label>
        <Tag options={userOptions} isMultiple isDisabled={!toggle} /> */}

        <label className="self-start text-lg" htmlFor="">
          Description
        </label>
        <TextField
          required
          value={formData.description}
          id="outlined-basic"
          label="required"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
          multiline
          maxRows={6}
          disabled={!toggle}
          onChange={(field) =>
            setFormData({...formData, description: field.target.value})
          }
        />
      </div>

      {toggle ? (
        <div className="ml-auto mr-5 flex gap-4">
          <Button
            variant="contained"
            color="error"
            onClick={handleRemoveBooking}
          >
            Remove Booking
          </Button>
          <Button variant="outlined" color="error" onClick={handleToggle}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleConfirmEdit}>
            Confirm Edit
          </Button>
        </div>
      ) : (
        <div className="flex gap-4">
          <Button variant="contained" onClick={handleToggle}>
            Edit
          </Button>
        </div>
      )}
    </>
  );
}

EditBookingModalContent.propTypes = {
  heading: PropTypes.string,
  handleClose: PropTypes.func,
  booking: PropTypes.object,
};

export default EditBookingModalContent;
