import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import Tag from '../../components/Tag';

function AddNewBookingModalContent({heading, handleClose}) {
  // TODO: Figure out react hook form with this
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
      <div className="flex w-[35rem] flex-col items-center gap-3 px-8">
        
        <div className="flex gap-3 w-full">
          <div className="flex flex-col w-[16rem]">
            <label className="self-start text-lg" htmlFor="">
              Booking Title
            </label>
            <TextField
              required
              // defaultValue="Space Name"
              id="outlined-basic"
              label="required"
              variant="outlined"
              fullWidth
            />
          </div>

          <div className="flex flex-col w-[15rem]">
            {/* TODO: Change these to MUI form and label components? */}
            <label className="self-start text-lg" htmlFor="">
              Room
            </label>
            <Tag options={roomOptions}/>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="mt-1 flex flex-col gap-2">
            <label className="self-start text-lg" htmlFor="">
              Date
            </label>
            <DatePicker label="required*" className="self-start" />
          </div>

          <div className="mt-1 flex flex-col gap-2">
            <label className="self-start text-lg" htmlFor="">
              Start Time
            </label>
            <TimePicker label="required*" className="w-[8.5rem] self-start" />
          </div>
          <div className="mt-1 flex flex-col gap-2">
            <label className="self-start text-lg" htmlFor="">
              End Time
            </label>
            <TimePicker label="required*" className="w-[8.5rem] self-start" />
          </div>
        </div>

        <label className="self-start text-lg" htmlFor="">
          Invite Users
        </label>
        <Tag options={userOptions} isMultiple />

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
          maxRows={6}
        />
      </div>

      <div className="ml-auto mr-5 flex gap-4">
        <Button variant="contained" color="error" onClick={handleClose}>
          Cancel
        </Button>
        {/* TODO: change this to process and submit form */}
        <Button variant="contained" onClick={handleClose}>
          Confirm Booking
        </Button>
      </div>
    </>
  );
}

AddNewBookingModalContent.propTypes = {
  heading: PropTypes.string,
  handleClose: PropTypes.func,
};

export default AddNewBookingModalContent;
