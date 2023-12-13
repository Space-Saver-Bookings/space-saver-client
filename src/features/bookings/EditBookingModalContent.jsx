import PropTypes from 'prop-types';
// import Button from '../../components/buttons/Button';
import {Button, TextField} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import Tag from '../../components/Tag';
import {useState} from 'react';

function EditBookingModalContent({heading, handleClose}) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((t) => !t);
  }

  // TODO: figure out options and how to work with this data
  const roomOptions = [
    {identifier: 'Room 1', roomId: 1234},
    {identifier: 'Room 2', roomId: 1234},
    {identifier: 'Room 3', roomId: 1234},
    {identifier: 'Room 4', roomId: 1234},
  ];

  const userOptions = [
    {identifier: 'User 1', userId: 1234},
    {identifier: 'User 1', userId: 1234},
    {identifier: 'User 1', userId: 1234},
    {identifier: 'User 1', userId: 1234},
  ];

  return (
    <>
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <div className="flex w-72 flex-col items-center gap-2">
        <label className="self-start text-lg" htmlFor="">
          Booking Title
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          // TODO: Figure out which size to choose
          // size="small"
          fullWidth
          sx={{mb: '0.5rem'}}
          disabled={!toggle}
        />
        {/* TODO: Change these to MUI form and label components */}
        <label className="self-start text-lg" htmlFor="">
          Room
        </label>
        <Tag options={roomOptions} isDisabled={!toggle} />
        <label className="self-start text-lg" htmlFor="">
          Date
        </label>
        <DatePicker
          label="required*"
          className="self-start"
          disabled={!toggle}
        />
        <div className="flex gap-3">
          <div className="mt-1 flex flex-col gap-2">
            <label className="self-start text-lg" htmlFor="">
              Start Time
            </label>
            <TimePicker
              label="required*"
              className="w-[8.5rem] self-start"
              disabled={!toggle}
            />
          </div>
          <div className="mt-1 flex flex-col gap-2">
            <label className="self-start text-lg" htmlFor="">
              End Time
            </label>
            <TimePicker
              label="required*"
              className="w-[8.5rem] self-start"
              disabled={!toggle}
            />
          </div>
        </div>
        <label className="self-start text-lg" htmlFor="">
          Invite Users
        </label>
        <Tag options={userOptions} isMultiple isDisabled={!toggle} />
        <label className="self-start text-lg" htmlFor="">
          Description
        </label>
        <TextField
          required
          // defaultValue="Space Name"
          id="outlined-basic"
          label="required"
          variant="outlined"
          fullWidth
          sx={{mb: '0.5rem'}}
          multiline
          maxRows={8}
          disabled={!toggle}
        />
      </div>

      {toggle ? (
        <div className="ml-auto mr-5 flex gap-4">
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained">Confirm Booking</Button>
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
  handleClose: PropTypes.func
};

export default EditBookingModalContent;
