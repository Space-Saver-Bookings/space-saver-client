import {Button, Modal} from '@mui/material';
import DashItem from '../components/dashboard/DashItem';
import ListContent from '../components/dashboard/ListContent';
import Description from '../features/space/Description';
import useModal from '../contexts/useModal.js';
import ModalBox from '../components/modal/ModalBox.jsx';
import BookNow from '../features/room/BookNow.jsx';
// import RoomName from '../features/room/RoomName.jsx';
import CapacityRoom from '../features/room/CapacityRoom.jsx';
import EditUsersModalContent from '../features/space/EditUsersModalContent.jsx';
import EditRoomModalContent from '../features/room/EditRoomModalContent.jsx';

function Room() {
  const {open, handleOpen, handleClose, modalName, setModalName} = useModal();

  function handleEditRoom() {
    setModalName('Edit Room');
    handleOpen();
  }

  function handleEditUsers() {
    setModalName('Edit Users');
    return handleOpen();
  }

  // const roomName = '1569A';
  const capacityAmount = 10;

  const descriptionText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend placerat malesuada. Etiam vitae justo maximus, vestibulum velit eu, mattis nibh. Ut rhoncus nibh id neque tempus, id fringilla velit ullamcorper. Aliquam fermentum vestibulum libero in porttitor. Mauris et rhoncus mi. Donec ac efficitur arcu. Ut ex leo, elementum ac varius posuere, sollicitudin suscipit nulla.';

  function createUsersData(
    id,
    firstName,
    lastName,
    email,
    dateJoined,
    postCode,
    position
  ) {
    return {
      id,
      firstName,
      lastName,
      email,
      dateJoined,
      postCode,
      position,
    };
  }

  const usersEditRows = Array.from(Array(13), (_, idx) =>
    createUsersData(
      Number(`${idx + 1}`),
      'John',
      'Doe',
      'johndoe@gmail.com',
      '28/11/23',
      2001,
      'Web Developer'
    )
  );

  const isAdmin = true;

  const renderModalContent = () => {
    switch (modalName) {
      case 'Edit Users':
        return <EditUsersModalContent heading='Edit Users' rows={usersEditRows}/>;
      case 'Edit Room':
        return <EditRoomModalContent heading="Edit Room" />;
      default:
        return new Error('Incorrect modalName');
    }
  };

  return (
    <section className="grid h-full gap-5 md:grid-cols-23 md:grid-rows-18">
      <DashItem
        heading="Book Now"
        styling="col-start-1 col-end-11 row-span-5"
        content={<BookNow />}
      />

      {/* <DashItem
        heading="Room"
        styling="col-span-5 row-span-5"
        content={<RoomName roomName={roomName} />}
      /> */}

      <DashItem
        heading="Availabilities"
        styling={`col-span-full col-start-[16] ${
          isAdmin ? 'row-end-[19]' : 'row-span-full'
        } row-start-1 rounded-xl`}
        content={
          <ListContent
            contentType='roomAvailabilities'
            toolTipTitle="Go to bookings"
          />
        }
      />

      {isAdmin && (
        <>
          <section className="col-start-1 col-end-[15] row-span-full row-start-[17] flex flex-col items-center justify-center">
            <Button
              variant="contained"
              onClick={handleEditRoom}
            >
              Edit Room
            </Button>
          </section>
        </>
      )}

      <DashItem
        heading="Description"
        styling={`col-start-1 col-end-[16] ${
          isAdmin ? 'row-start-6 row-span-4' : 'row-start-6 row-span-5'
        }`}
        isScroll
        content={<Description descriptionText={descriptionText} />}
      />

      <DashItem
        heading="Capacity"
        styling={'col-span-5 row-span-5'}
        content={<CapacityRoom capacityAmount={capacityAmount} />}
      />

      <DashItem
        heading="Current Users"
        styling={`col-start-1 col-end-[16] ${
          isAdmin
            ? 'row-start-[10] row-end-[17]'
            : 'row-start-[11] row-span-full'
        }`}
        content={<ListContent contentType='roomUsers' />}
        isDropdown={isAdmin}
        dropdownOptions={[{name: 'Edit Users', handleOpen: handleEditUsers}]}
      />

      {modalName !== 'Edit Users' && open ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox
            content={renderModalContent()}
            height="h-auto"
            width="w-auto"
          />
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox
            content={renderModalContent()}
            height="h-[35.5rem]"
            width="w-[63rem]"
          />
        </Modal>
      )}
    </section>
  );
}

export default Room;
