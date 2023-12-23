import PropTypes from 'prop-types';
// import Button from '../../components/buttons/Button';
import {Button, Modal, TextField} from '@mui/material';
import useModal from '../../contexts/useModal';
import ConfirmModal from '../../components/modal/ConfirmModal';
import ModalBox from '../../components/modal/ModalBox';
import {useEffect, useState} from 'react';
import {Controller, useForm, useWatch} from 'react-hook-form';
import {
  deleteSingleRoom,
  getSingleRoom,
  updateRoom,
} from '../../services/apiRooms';
import {useNavigate, useParams} from 'react-router-dom';
import MainSectionSpinner from '../../components/spinner/MainSectionSpinner';

function EditRoomModalContent({heading}) {
  const {open, handleOpen, handleClose} = useModal();
  const {roomId} = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [deleteRoom, setDeleteRoom] = useState(false);
  const [room, setRoom] = useState(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: room?.name,
      capacity: room?.capacity,
      description: room?.description,
    },
  });

  useEffect(() => {
    const getRoom = async () => {
      const fetchedRoom = await getSingleRoom(roomId);

      if (fetchedRoom) {
        setRoom(fetchedRoom);
        // reset function to update the form with the fetched values
        reset({
          name: fetchedRoom.name,
          capacity: fetchedRoom.capacity,
          description: fetchedRoom.description,
        });
        setIsLoading(false);
      }
    };

    getRoom();
  }, [roomId, reset]);

  function handleDeleteRoom() {
    setDeleteRoom(true);
    return handleOpen();
  }

  const handleConfirmDeleteRoom = async () => {
    await deleteSingleRoom(roomId);
    setTimeout(() => {
      navigate('/rooms');
    }, 800);
  };

  // Watch all fields
  const values = useWatch({control});

  const onSubmit = async () => {
    const updatedData = Object.keys(values).reduce((acc, key) => {
      // Include field in updatedData if it's different from the default value
      if (values[key] !== control._defaultValues[key]) {
        acc[key] = values[key];
      }
      return acc;
    }, {});

    try {
      await updateRoom(updatedData, roomId);
      handleClose();
      setTimeout(() => {
        navigate('/rooms');
      }, 800);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h4 className="mb-2 mt-[-.6rem] font-coplette text-3xl">{heading}</h4>
      <section className="h-full w-full">
        {isLoading ? (
          <div className="p-[10rem]">
            <MainSectionSpinner />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full flex-col items-center gap-1"
          >
            <Controller
              name="name"
              control={control}
              defaultValue={room?.name}
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
              defaultValue={room?.capacity}
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
              defaultValue={room?.description}
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
                    variant="outlined"
                    fullWidth
                    sx={{mb: '0.5rem'}}
                    multiline
                    maxRows={8}
                  />
                </>
              )}
            />

            <div className="ml-auto mr-5 mt-4 flex gap-4">
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteRoom}
              >
                Delete Room
              </Button>
              <Button variant="outlined" color="error" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Confirm
              </Button>
            </div>
          </form>
        )}

        {deleteRoom && open && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox
              // TODO: heading should be default
              content={
                <ConfirmModal
                  heading="Are you sure?"
                  handleYes={handleConfirmDeleteRoom}
                />
              }
              height="h-auto"
              width="w-auto"
            />
          </Modal>
        )}
      </section>
    </>
  );
}

EditRoomModalContent.propTypes = {
  heading: PropTypes.string,
};

export default EditRoomModalContent;
