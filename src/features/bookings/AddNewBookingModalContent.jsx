import PropTypes from 'prop-types';
import {Autocomplete, Button, TextField} from '@mui/material';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {TimePicker} from '@mui/x-date-pickers/TimePicker';
import {Controller, useForm} from 'react-hook-form';
import api from '../../services/axios';
import toast from 'react-hot-toast';

function AddNewBookingModalContent({heading, handleClose}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data) => {
    console.log('submitted');
    console.log(data);
    // console.log(data.date.format('YYYY-MM-DD'));

    try {
      const res = await api.post('/bookings', data);
      console.log('Booking Successful!');
      console.log(res.data);
    } catch (err) {
      if (err.response) {
        console.error('Booking error:', err.response || err);

        if (err.response.status === 500) {
          toast.error(
            'An error occurred on the server. Please try again later.'
          );
        } else if (err.response.status === 401) {
          toast.error('Unauthorised.');
        } else {
          toast.error('Failed to book: ' + err.response.data.message);
        }
      }
    }
  };

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

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-[38rem] flex-col items-center gap-3 px-8"
      >
        <div className="flex w-full gap-3">
          <Controller
            name="bookingTitle"
            control={control}
            defaultValue=""
            rules={{required: 'Booking title is required'}}
            render={({field}) => (
              <div className="flex w-[18.2rem] flex-col gap-1">
                <label className="self-start text-lg" htmlFor="booking-title">
                  Booking Title
                </label>
                <TextField
                  {...field}
                  error={!!errors.bookingTitle}
                  helperText={errors.bookingTitle?.message}
                  id="booking-title"
                  label="title"
                  variant="outlined"
                  fullWidth
                />
              </div>
            )}
          />

          <Controller
            name="room"
            control={control}
            defaultValue={null}
            rules={{required: 'Room is required'}}
            render={({field: {onChange, value}, fieldState: {error}}) => (
              <div className="flex w-[15rem] flex-col gap-1">
                <label className="self-start text-lg" htmlFor="room">
                  Room
                </label>
                <Autocomplete
                  id="room"
                  options={roomOptions}
                  getOptionLabel={(option) => option.identifier}
                  onChange={(event, item) => {
                    onChange(item ? item.identifier : null);
                  }}
                  value={
                    value
                      ? roomOptions.find(
                          (option) => option.identifier === value
                        )
                      : null
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Room"
                      error={!!error}
                      helperText={error ? error.message : null}
                    />
                  )}
                />
              </div>
            )}
          />
        </div>

        <div className="flex w-full gap-3">
          <Controller
            name="date"
            control={control}
            defaultValue=""
            rules={{required: 'Date is required'}}
            render={({field, fieldState: {error}}) => (
              <div className="mt-1 flex flex-col gap-1">
                <label className="self-start text-lg" htmlFor="date">
                  Date
                </label>
                <DatePicker
                  {...field}
                  id="date"
                  value={field.value || null}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                  className="self-start"
                  slotProps={{
                    textField: {
                      error: !!error,
                      helperText: error ? error?.message : null,
                    },
                  }}
                />
              </div>
            )}
          />

          <Controller
            name="startTime"
            control={control}
            defaultValue=""
            rules={{required: 'Start time is required'}}
            render={({field, fieldState: {error}}) => (
              <div className="mt-1 flex flex-col gap-1">
                <label className="self-start text-lg" htmlFor="start-time">
                  Start Time
                </label>
                <TimePicker
                  {...field}
                  id="start-time"
                  value={field.value || null}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                  className="w-[10rem] self-start"
                  slotProps={{
                    textField: {
                      error: !!error,
                      helperText: error ? error?.message : null,
                    },
                  }}
                />
              </div>
            )}
          />

          <Controller
            name="endTime"
            control={control}
            defaultValue=""
            rules={{required: 'End time is required'}}
            render={({field, fieldState: {error}}) => (
              <div className="mt-1 flex flex-col gap-1">
                <label className="self-start text-lg" htmlFor="end-time">
                  End Time
                </label>
                <TimePicker
                  {...field}
                  id="end-time"
                  value={field.value || null}
                  onChange={(value) => {
                    field.onChange(value);
                  }}
                  slotProps={{
                    textField: {
                      error: !!error,
                      helperText: error ? error?.message : null,
                    },
                  }}
                  className="w-[10rem] self-start"
                />
              </div>
            )}
          />
        </div>

        <Controller
          name="invite"
          control={control}
          defaultValue={null}
          render={({field: {onChange, value}, fieldState: {error}}) => (
            <div className="flex w-full flex-col gap-1">
              <label className="self-start text-lg" htmlFor="invite">
                Invite
              </label>
              <Autocomplete
                id="invite"
                options={userOptions}
                getOptionLabel={(option) => option.identifier}
                onChange={(event, item) => {
                  onChange(item ? item.identifier : null);
                }}
                value={
                  value
                    ? userOptions.find((option) => option.identifier === value)
                    : null
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Invite"
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </div>
          )}
        />

        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({field}) => (
            <div className="flex w-full flex-col gap-1">
              <label className="self-start text-lg" htmlFor="description">
                Description
              </label>
              <TextField
                {...field}
                // error={!!errors.description}
                // helperText={errors.description?.message}
                id="description"
                label="description"
                variant="outlined"
                fullWidth
                sx={{mb: '0.5rem'}}
                multiline
                maxRows={6}
              />
            </div>
          )}
        />

        <div className="ml-auto mr-5 flex gap-4">
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Confirm Booking
          </Button>
        </div>
      </form>
    </>
  );
}

AddNewBookingModalContent.propTypes = {
  heading: PropTypes.string,
  handleClose: PropTypes.func,
};

export default AddNewBookingModalContent;
