import PropTypes from 'prop-types';
// import Button from '../../components/buttons/Button';
import {Button, Modal, TextField} from '@mui/material';
import useModal from '../../contexts/useModal';
import ConfirmModal from '../../components/modal/ConfirmModal';
import ModalBox from '../../components/modal/ModalBox';
import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';

function EditRoomModalContent({heading}) {
  const {open, handleOpen, handleClose} = useModal();
  const [deleteRoom, setDeleteRoom] = useState(false);

  const {
    control,
    handleSubmit,
    // reset,
    formState: {errors},
  } = useForm();

  // const handleReset = () => {
  //   reset({
  //     spaceName: '',
  //     capacity: '',
  //     description: '',
  //   });
  // };

  function handleDeleteRoom() {
    setDeleteRoom(true);
    return handleOpen();
  }

  const onSubmit = (data) => {
    console.log('Submitted');
    console.log(data);

    // console.log('default headers:', api.defaults.headers);

    // TODO: when jwt is sorted
    // try {
    //   const res = await api.post(`/spaces`, data);
    //   console.log(res);
    // } catch (err) {
    //   if (err.response) {
    //     console.error('Booking error:', err.response || err);

    //     if (err.response.status === 500) {
    //       toast.error(
    //         'An error occurred on the server. Please try again later.'
    //       );
    //     } else if (err.response.status === 401) {
    //       toast.error('Unauthorised.');
    //     } else {
    //       toast.error('Failed to create space: ' + err.response.data.message);
    //     }
    //   }
    // }
  };

  return (
    <>
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center gap-1"
      >
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{required: 'Room name is required'}}
          render={({field}) => (
            <>
              <label className="self-start text-lg" htmlFor="room-name">
                Room Name
              </label>
              <TextField
                {...field}
                error={!!errors.name}
                helperText={errors.name?.message}
                id="room-name"
                label="required"
                variant="outlined"
                fullWidth
                sx={{mb: '0.5rem'}}
              />
            </>
          )}
        />

        <Controller
          name="capacity"
          control={control}
          defaultValue=""
          rules={{required: 'Capacity is required'}}
          render={({field}) => (
            <>
              <label className="self-start text-lg" htmlFor="capacity">
                Capacity
              </label>
              <TextField
                {...field}
                error={!!errors.capacity}
                helperText={errors.capacity?.message}
                id="capacity"
                label="required"
                variant="outlined"
                fullWidth
                sx={{mb: '0.5rem'}}
              />
            </>
          )}
        />

        <Controller
          name="description"
          control={control}
          defaultValue=""
          rules={{required: 'description is required'}}
          render={({field}) => (
            <>
              <label className="self-start text-lg" htmlFor="">
                Description
              </label>
              <TextField
                {...field}
                error={!!errors.description}
                helperText={errors.description?.message}
                id="outlined-basic"
                label="required"
                variant="outlined"
                fullWidth
                sx={{mb: '0.5rem'}}
                multiline
                maxRows={8}
              />
            </>
          )}
        />

        <div className="ml-auto mr-5 flex gap-4 mt-4">
          <Button variant="contained" color="error" onClick={handleDeleteRoom}>
            Delete Room
          </Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" type='submit'>Confirm</Button>
        </div>
      </form>

      {deleteRoom && open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox
            // TODO: heading should be default and figure out handler yes/no logic to be contained within
            content={<ConfirmModal heading="Are you sure?" />}
            height="h-auto"
            width="w-auto"
          />
        </Modal>
      )}
    </>
  );
}

EditRoomModalContent.propTypes = {
  heading: PropTypes.string,
};

export default EditRoomModalContent;
