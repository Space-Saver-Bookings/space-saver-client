import {Button, Modal} from '@mui/material';
import DashItem from '../components/dashboard/DashItem';
import ListContent from '../components/dashboard/ListContent';
import AccessCode from '../features/space/AccessCode';
import Capacity from '../features/space/Capacity';
import Description from '../features/space/Description';
import {AddRounded, RemoveRounded} from '@mui/icons-material';
import {spaceDropdownOptions} from '../features/space/SpaceDropdownOptions';
import {useAssignHandler} from '../features/space/useAssignHandler.js';
import useModal from '../contexts/useModal.js';
import ModalBox from '../components/modal/ModalBox.jsx';
import ShareCodeModalContent from '../features/space/ShareCodeModalContent.jsx';
// import EditCodeModalContent from '../features/space/EditCodeModalContent.jsx';
import EditDescriptionModalContent from '../features/space/EditDescriptionModalContent.jsx';
import EditCapacityModalContent from '../features/space/EditCapcityModalContent.jsx';
import EditUsersModalContent from '../features/space/EditUsersModalContent.jsx';
import AddNewRoomModalContent from '../components/modal/AddNewRoomModalContent.jsx';
import ConfirmModal from '../components/modal/ConfirmModal.jsx';

function Space() {
  const {open, handleOpen, handleClose, modalName, setModalName} = useModal();

  function handleRemoveSpace() {
    setModalName('Remove Space');
    handleOpen();
  }

  function handleNewRoom() {
    setModalName('Add New Room');
    handleOpen();
  }

  // TODO: Add handle yes/no here? after space is remove, users are returned to home?

  // TODO: A nice to have to figure out a way for users to navigate back to spaces easily eg. header back to btn
  // TODO: Add fecthing logic to dynamically display content of each space
  // Use the space ID from the url param to fetch the correct & desired space

  const accessCode = 57493;
  const roomsCount = 25;
  const peopleCount = 85;

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

  useAssignHandler(handleOpen, setModalName);

  const renderModalContent = () => {
    switch (modalName) {
      case 'Share Access Code':
        // TODO: pass down access code?
        return <ShareCodeModalContent heading="Share Access Code" />;
      // case 'Edit Access Code':
      //   return <EditCodeModalContent heading="Edit Access Code" />;
      case 'Edit Capacity':
        return <EditCapacityModalContent heading="Edit Capacity" />;
      // case 'View All Rooms':
      // TODO: Link to rooms
      //   return 'something';
      case 'Edit Description':
        return <EditDescriptionModalContent heading="Edit Description" />;
      case 'Edit Users':
        return (
          <EditUsersModalContent heading="Edit Users" rows={usersEditRows} />
        );
      case 'Remove Space':
        // TODO: Figure out handling yes/no logic
        return <ConfirmModal heading="Are you sure?" />;
      case 'Add New Room':
        return <AddNewRoomModalContent heading="Add New Room" />;
      default:
        return new Error('Modal name is incorrect.');
    }
  };

  return (
    <section className="grid h-full gap-5 md:grid-cols-23 md:grid-rows-18">
      <DashItem
        heading="Access Code"
        styling="col-start-1 col-end-8 row-span-5"
        content={<AccessCode accessCode={accessCode} />}
        isDropdown={isAdmin}
        dropdownOptions={spaceDropdownOptions.accessCode}
      />

      <DashItem
        heading="Capacity"
        styling="col-span-7 row-span-5"
        content={<Capacity roomsCount={roomsCount} peopleCount={peopleCount} />}
        isDropdown={isAdmin}
        dropdownOptions={spaceDropdownOptions.capacity}
      />

      <DashItem
        heading="Rooms"
        styling={`col-span-full col-start-[15] ${
          isAdmin ? 'row-end-[17]' : 'row-span-full'
        } row-start-1 rounded-xl`}
        content={<ListContent contentType="rooms" toolTipTitle="Go to Room" />}
      />

      {/* CONDITIONAL BTN */}
      {isAdmin && (
        <>
          <section className="col-span-full col-start-[15] row-span-full row-start-[17] flex flex-col items-center justify-center">
            <Button
              variant="contained"
              startIcon={<AddRounded />}
              onClick={handleNewRoom}
            >
              Add New Room
            </Button>
          </section>

          <section className="col-start-1 col-end-[15] row-span-full row-start-[17] flex flex-col items-center justify-center">
            <Button
              variant="contained"
              color="error"
              startIcon={<RemoveRounded />}
              onClick={handleRemoveSpace}
            >
              Remove Space
            </Button>
          </section>
        </>
      )}

      <DashItem
        heading="Description"
        styling={`col-start-1 col-end-[15] ${
          isAdmin ? 'row-start-6 row-span-4' : 'row-start-6 row-span-5'
        }`}
        isScroll
        content={<Description descriptionText={descriptionText} />}
        isDropdown={isAdmin}
        dropdownOptions={spaceDropdownOptions.description}
      />

      <DashItem
        heading="Users"
        styling={`col-start-1 col-end-[15] ${
          isAdmin
            ? 'row-start-[10] row-end-[17]'
            : 'row-start-[11] row-span-full'
        }`}
        content={<ListContent contentType="spaceUsers" />}
        isDropdown={isAdmin}
        dropdownOptions={spaceDropdownOptions.users}
      />

      {/* CONDITIONAL MODAL */}
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

export default Space;
