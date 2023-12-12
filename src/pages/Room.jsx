/* eslint-disable no-unused-vars */
import {Button, Modal} from '@mui/material';
import DashItem from '../components/dashboard/DashItem';
import ListContent from '../components/dashboard/ListContent';
import AccessCode from '../features/space/AccessCode';
import Capacity from '../features/space/Capacity';
import Description from '../features/space/Description';
import {createData} from '../helpers/createData';
import {useAssignHandler} from '../features/space/useAssignHandler.js';
import useModal from '../contexts/useModal.js';
import ModalBox from '../components/modal/ModalBox.jsx';
// import ShareCodeModalContent from '../features/space/ShareCodeModalContent.jsx';
// import EditCodeModalContent from '../features/space/EditCodeModalContent.jsx';
// import EditDescriptionModalContent from '../features/space/EditDescriptionModalContent.jsx';
// import EditCapacityModalContent from '../features/space/EditCapcityModalContent.jsx';
// import EditUsersModalContent from '../features/space/EditUsersModalContent.jsx';
// import AddNewUserModalContent from '../features/space/AddNewUserModalContent.jsx';
// import AddNewRoomModalContent from '../features/space/AddNewRoomModalContent.jsx';
import {Navigate} from 'react-router-dom';
import BookNow from '../features/room/BookNow.jsx';
import RoomNumber from '../features/room/RoomNumber.jsx';
import CapacityRoom from '../features/room/CapacityRoom.jsx';

function Room() {
  const {open, handleOpen, handleClose, modalName, setModalName} = useModal();

  function handleNavigate() {
    return <Navigate to="/rooms" />;
  }

  const descriptionText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend placerat malesuada. Etiam vitae justo maximus, vestibulum velit eu, mattis nibh. Ut rhoncus nibh id neque tempus, id fringilla velit ullamcorper. Aliquam fermentum vestibulum libero in porttitor. Mauris et rhoncus mi. Donec ac efficitur arcu. Ut ex leo, elementum ac varius posuere, sollicitudin suscipit nulla.';

  const usersViewColumn = ['Name', 'Email', 'Type', 'Position'];

  const usersViewRow = Array.from(Array(9), () =>
    createData('John Doe', 'johndoe@gmail.com', 'Guest', 'Web Developer')
  );

  usersViewRow.unshift(
    createData('John Doe', 'johndoe@gmail.com', 'Resever', 'Web Developer')
  );

  const roomsColumn = ['Date', 'Time', 'Duration'];

  const roomsRow = Array.from(Array(15), () =>
    createData('28/11/23', '4:19pm', '1hr')
  );

  const isAdmin = !true;

  useAssignHandler(handleOpen, setModalName, handleNavigate);

  // const renderModalContent = () => {
  //   switch (modalName) {
  //     case 'Share Access Code':
  //       return <ShareCodeModalContent heading="Share Access Code" />;
  //     case 'Edit Access Code':
  //       return <EditCodeModalContent heading="Edit Access Code" />;
  //     case 'Edit Capacity':
  //       return <EditCapacityModalContent heading="Edit Capacity" />;
  //     // case 'View All Rooms':
  //     //   // TODO: Link to rooms
  //     //   return 'something';
  //     case 'Edit Description':
  //       return <EditDescriptionModalContent heading="Edit Description" />;
  //     case 'Edit Users':
  //       return (
  //         <EditUsersModalContent heading="Edit Users" rows={usersEditRows} />
  //       );
  //     case 'Add New User':
  //       return <AddNewUserModalContent heading="Add New User" />;
  //     case 'Add New Room':
  //       return <AddNewRoomModalContent heading="Add New Room" />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <section className="grid h-full gap-5 md:grid-cols-23 md:grid-rows-18">
      <DashItem
        heading="Book Now"
        styling="col-start-1 col-end-11 row-span-5"
        content={<BookNow date='30/11/23' time={'4:20pm'}/>}
      />

      <DashItem
        heading="Room #"
        styling="col-span-5 row-span-5"
        content={<RoomNumber roomNumber='1569A'/>}
      />

      <DashItem
        heading="Availabilities"
        styling={`col-span-full col-start-[16] ${
          isAdmin ? 'row-end-[19]' : 'row-span-full'
        } row-start-1 rounded-xl`}
        content={
          <ListContent
            columns={roomsColumn}
            rows={roomsRow}
            toolTipTitle="Go to Room"
          />
        }
      />

      {isAdmin && (
        <>
          <section className="col-start-1 col-end-[15] row-span-full row-start-[17] flex flex-col items-center justify-center">
            <Button
              variant="contained"
              // startIcon={<AddRounded />}
              // onClick={handleNewUser}
            >
              Edit Room
            </Button>
          </section>
        </>
      )}

      <DashItem
        heading="Description"
        // styling="col-start-1 col-end-[15] row-start-6 row-span-4"
        styling={`col-start-1 col-end-[11] ${
          isAdmin ? 'row-start-6 row-span-5' : 'row-start-6 row-span-5'
        }`}
        isScroll
        content={<Description descriptionText={descriptionText} />}
      />

      <DashItem
        heading="Capacity"
        styling="col-span-5 row-span-5"
        content={<CapacityRoom capacityAmount={10}/>}
      />

      <DashItem
        heading="Current Users"
        styling={`col-start-1 col-end-[16] ${
          isAdmin
            ? 'row-start-[11] row-end-[17]'
            : 'row-start-[11] row-span-full'
        }`}
        content={<ListContent columns={usersViewColumn} rows={usersViewRow} />}
        // isDropdown={isAdmin}
        // dropdownOptions={spaceDropdownOptions.users}
      />

      {/* {modalName !== 'Edit Users' && open ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox
            content={renderModalContent()}
            height="h-auto"
            width="w-[30rem]"
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
            width="w-[60rem]"
          />
        </Modal>
      )} */}
    </section>
  );
}

export default Room;
