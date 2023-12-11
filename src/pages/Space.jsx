import {Button, Modal} from '@mui/material';
import DashItem from '../components/dashboard/DashItem';
import ListContent from '../components/dashboard/ListContent';
import AccessCode from '../features/space/AccessCode';
import Capacity from '../features/space/Capacity';
import Description from '../features/space/Description';
import {createData} from '../helpers/createData';
import {AddRounded} from '@mui/icons-material';
import {spaceDropdownOptions} from '../features/space/SpaceDropdownOptions';
import {useAssignHandler} from '../features/space/useAssignHandler.js';
import useModal from '../contexts/useModal.js';
import ModalBox from '../components/modal/ModalBox.jsx';
import ShareCodeModalContent from '../features/space/ShareCodeModalContent.jsx';

function Space() {
  const {open, handleOpen, handleClose} = useModal();

  // TODO: A nice to have to figure out a way for users to navigate back to spaces easily eg. header back to btn
  // TODO: Add fecthing logic to dynamically display content of each space
  // Use the space ID from the url param to fetch the correct & desired space

  // Example query
  // const dynamicHeading = 'someDynamicHeading';

  const descriptionText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eleifend placerat malesuada. Etiam vitae justo maximus, vestibulum velit eu, mattis nibh. Ut rhoncus nibh id neque tempus, id fringilla velit ullamcorper. Aliquam fermentum vestibulum libero in porttitor. Mauris et rhoncus mi. Donec ac efficitur arcu. Ut ex leo, elementum ac varius posuere, sollicitudin suscipit nulla.';

  const usersColumn = ['Name', 'Email', 'Date Added', 'Position'];

  const usersRow = Array.from(Array(10), () =>
    createData('John Doe', 'johndoe@gmail.com', '28/11/23', 'Web Developer')
  );

  const roomsColumn = ['Room #', 'Next Available', 'Capacity'];

  const roomsRow = Array.from(Array(15), () =>
    createData(10310, '28/11/23', 4)
  );

  const isAdmin = true;

  useAssignHandler(handleOpen);

  return (
    <section className="grid h-full gap-5 md:grid-cols-23 md:grid-rows-18">
      <DashItem
        heading="Access Code"
        styling="col-start-1 col-end-8 row-span-5"
        content={<AccessCode accessCode={57493} />}
        isDropdown={isAdmin}
        dropdownOptions={spaceDropdownOptions.accessCode}
      />

      <DashItem
        heading="Capacity"
        styling="col-span-7 row-span-5"
        content={<Capacity roomsCount={25} peopleCount={85} />}
        isDropdown={isAdmin}
        dropdownOptions={spaceDropdownOptions.capacity}
      />

      <DashItem
        heading="Rooms"
        styling={`col-span-full col-start-[15] ${
          isAdmin ? 'row-end-[17]' : 'row-span-full'
        } row-start-1 rounded-xl`}
        content={<ListContent columns={roomsColumn} rows={roomsRow} />}
        isDropdown={isAdmin}
        dropdownOptions={spaceDropdownOptions.rooms}
      />

      {isAdmin && (
        <>
          <section className="col-span-full col-start-[15] row-span-full row-start-[17] flex flex-col items-center justify-center">
            <Button variant="contained" startIcon={<AddRounded />}>
              Add New Room
            </Button>
          </section>

          <section className="col-start-1 col-end-[15] row-span-full row-start-[17] flex flex-col items-center justify-center">
            <Button variant="contained" startIcon={<AddRounded />}>
              Add New User
            </Button>
          </section>
        </>
      )}

      <DashItem
        heading="Description"
        // styling="col-start-1 col-end-[15] row-start-6 row-span-4"
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
        content={<ListContent columns={usersColumn} rows={usersRow} />}
        isDropdown={isAdmin}
        dropdownOptions={spaceDropdownOptions.users}
      />

      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalBox
            content={<ShareCodeModalContent heading="Share Access Code" />}
            height="h-[14.2rem]"
            width="w-[27rem]"
          />
        </Modal>
      )}
    </section>
  );
}

export default Space;
