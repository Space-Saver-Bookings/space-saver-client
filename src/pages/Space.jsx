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
// import ShareCodeModalContent from '../features/space/ShareCodeModalContent.jsx';
// import EditCodeModalContent from '../features/space/EditCodeModalContent.jsx';
import EditDescriptionModalContent from '../features/space/EditDescriptionModalContent.jsx';
import EditCapacityModalContent from '../features/space/EditCapcityModalContent.jsx';
import EditUsersModalContent from '../features/space/EditUsersModalContent.jsx';
import AddNewRoomModalContent from '../components/modal/AddNewRoomModalContent.jsx';
import ConfirmModal from '../components/modal/ConfirmModal.jsx';
import {useNavigate, useParams} from 'react-router-dom';
import {
  deleteSpace,
  getSingleSpace,
  updateSpace,
} from '../services/apiSpaces.js';
import {useEffect, useState} from 'react';
import useAuth from '../auth/useAuth.js';
import MainSectionSpinner from '../components/spinner/MainSectionSpinner.jsx';
import {getAllRooms} from '../services/apiRooms.js';
import EmptyDashContent from '../components/dashboard/EmptyDashContent.jsx';

/**
 * Space is a component that displays details about a specific space and its rooms.
 * It allows for managing users, access codes, and rooms within the space.
 * Admin users can edit space details or remove the space entirely.
 */
function Space() {
  const navigate = useNavigate();
  const {user} = useAuth();
  const {spaceId} = useParams();
  const {open, handleOpen, handleClose, modalName, setModalName} = useModal();
  const [isLoading, setIsLoading] = useState(true);
  // const [space, setSpace] = useState(null);

  const [spaceAdmin, setSpaceAdmin] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [usersEditRows, setUsersEditRows] = useState([]);
  const [accessCode, setAccessCode] = useState('');
  const [peopleCount, setPeopleCount] = useState(0);
  const [description, setDescription] = useState('');
  const [rooms, setRooms] = useState([]);

  const roomsUpdated = rooms.map((room) => {
    return {
      name: room.name,
      nextAvailable: '28/11/23',
      capacity: room.capacity,
    };
  });

  const roomsCount = roomsUpdated.length;

  useEffect(() => {
    const getSpace = async (spaceId) => {
      try {
        const fetchedSpace = await getSingleSpace(spaceId);
        // setSpace(fetchedSpace);
        const fetchedRooms = await getAllRooms();
        const roomsInCurrentSpace = fetchedRooms.filter((room) => spaceId === room.space_id._id)
        setIsLoading(false);

        if (fetchedSpace) {
          setSpaceAdmin(fetchedSpace.admin_id._id);
          setIsAdmin(user._id === fetchedSpace.admin_id._id);
          setUsers(fetchedSpace.user_ids);
          setAccessCode(fetchedSpace.invite_code);
          setPeopleCount(fetchedSpace.capacity);
          setDescription(fetchedSpace.description);
          setRooms(roomsInCurrentSpace);

          if (fetchedSpace.user_ids) {
            const newUsersEditRows = fetchedSpace.user_ids.map((user) =>
              createUsersData(
                user._id,
                user.first_name,
                user.last_name,
                user.email,
                user.post_code,
                user.position
              )
            );
            setUsersEditRows(newUsersEditRows);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    getSpace(spaceId);
  }, [spaceId, user._id]);

  const handleDeleteUser = async (userIdsToDelete) => {
    const updatedUsers = usersEditRows.filter(
      (userFromRow) => !userIdsToDelete.includes(userFromRow.id)
    );

    const updatedUserIds = users.filter(
      (userAcc) => !userIdsToDelete.includes(userAcc._id)
    );

    setUsersEditRows(updatedUsers);

    const updateData = {
      user_ids: updatedUserIds,
    };

    await updateSpace(updateData, spaceId);

    // TODO: leave this?
    // setTimeout(() => {
    //   window.location.reload();
    // }, 800);
  };

  const handleMakeAdmin = async (newAdminId) => {
    const updatedData = {
      admin_id: newAdminId,
    };

    await updateSpace(updatedData, spaceId);
    handleClose();

    navigate('/spaces');
  };

  function handleRemoveSpace() {
    setModalName('Remove Space');
    handleOpen();
  }

  function handleConfirmRemoveSpace() {
    deleteSpace(spaceId);
    navigate('/spaces');
  }

  function handleNewRoom() {
    setModalName('Add New Room');
    handleOpen();
  }

  function createUsersData(
    id,
    first_name,
    last_name,
    email,
    post_code,
    position
  ) {
    return {
      id,
      first_name,
      last_name,
      email,
      post_code,
      position,
    };
  }

  useAssignHandler(handleOpen, setModalName);

  const renderModalContent = () => {
    switch (modalName) {
      // case 'Share Access Code':
      //   // TODO: pass down access code?
      //   return <ShareCodeModalContent heading="Share Access Code" />;
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
          <EditUsersModalContent
            heading="Edit Users"
            rows={usersEditRows}
            handleDeleteUser={handleDeleteUser}
            handleMakeAdmin={handleMakeAdmin}
          />
        );
      case 'Remove Space':
        // TODO: Figure out handling yes/no logic
        return (
          <ConfirmModal
            heading="Are you sure?"
            handleYes={handleConfirmRemoveSpace}
          />
        );
      case 'Add New Room':
        return <AddNewRoomModalContent heading="Add New Room" />;
      default:
        return new Error('Modal name is incorrect.');
    }
  };

  return (
    <section
      className={
        isLoading
          ? 'h-full w-full'
          : `grid h-full gap-5 md:grid-cols-23 md:grid-rows-18`
      }
    >
      {isLoading ? (
        <MainSectionSpinner />
      ) : (
        <>
          <DashItem
            heading="Access Code"
            styling="col-start-1 col-end-8 row-span-5"
            content={<AccessCode accessCode={accessCode} />}
          />

          <DashItem
            heading="Capacity"
            styling="col-span-7 row-span-5"
            content={
              <Capacity roomsCount={roomsCount} peopleCount={peopleCount} />
            }
            isDropdown={isAdmin}
            dropdownOptions={spaceDropdownOptions.capacity}
          />

          <DashItem
            heading="Rooms"
            styling={`col-span-full col-start-[15] ${
              isAdmin ? 'row-end-[17]' : 'row-span-full'
            } row-start-1 rounded-xl`}
            content={
              roomsCount < 1 ? (
                <EmptyDashContent message="No rooms found in this space" />
              ) : (
                <ListContent
                  contentType="rooms"
                  toolTipTitle="Go to Room"
                  rooms={roomsUpdated}
                />
              )
            }
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
            content={<Description descriptionText={description} />}
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
            content={
              <ListContent
                contentType="spaceUsers"
                spaceUsers={users}
                spaceAdmin={spaceAdmin}
              />
            }
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
        </>
      )}
    </section>
  );
}

export default Space;
