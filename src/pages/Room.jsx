import {Button, Modal} from '@mui/material';
import DashItem from '../components/dashboard/DashItem';
import ListContent from '../components/dashboard/ListContent';
import Description from '../features/space/Description';
import useModal from '../contexts/useModal.js';
import ModalBox from '../components/modal/ModalBox.jsx';
import BookNow from '../features/room/BookNow.jsx';
import CapacityRoom from '../features/room/CapacityRoom.jsx';
import EditUsersModalContent from '../features/space/EditUsersModalContent.jsx';
import EditRoomModalContent from '../features/room/EditRoomModalContent.jsx';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getSingleRoom} from '../services/apiRooms.js';
import useAuth from '../auth/useAuth.js';
import MainSectionSpinner from '../components/spinner/MainSectionSpinner.jsx';
import {getAvailableTimeSlots} from '../services/apiBookings.js';
import EmptyDashContent from '../components/dashboard/EmptyDashContent.jsx';

/**
 * Room is a component that displays details about a specific room.
 * It includes room capacity, description, admin details, and availabilities.
 * It allows for editing room details if the current user is the admin of the room.
 */
function Room() {
  const {open, handleOpen, handleClose, modalName, setModalName} = useModal();
  const {roomId} = useParams();
  const {user} = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [capacity, setCapacity] = useState(0);
  const [description, setDescription] = useState('');
  const [admin, setAdmin] = useState('');
  const [availabilities, setAvailabilities] = useState([]);
  const isAdmin = admin === user._id;
  const isWoo = true;
  let formattedAvailabilities;

  if (availabilities) {
    formattedAvailabilities = availabilities.map((availability) => {
      const startTime = new Date(availability.available_start_time);
      const endTime = new Date(availability.available_end_time);

      const dateOptions = {day: '2-digit', month: '2-digit', year: '2-digit'};
      const date = startTime.toLocaleDateString('en-AU', dateOptions);

      const timeOptions = {hour: 'numeric', minute: '2-digit', hour12: true};
      const time = startTime.toLocaleTimeString('en-AU', timeOptions);

      const durationInMilliseconds = endTime - startTime;
      const durationInHours = Math.round(
        durationInMilliseconds / (1000 * 60 * 60)
      );
      const duration = `${durationInHours}hr`;
      return {
        date,
        time,
        duration,
      };
    });
  }

  useEffect(() => {
    const getRoom = async () => {
      try {
        const fetchedRoom = await getSingleRoom(roomId);
        const fetchedAvailabilities = await getAvailableTimeSlots();

        if (fetchedRoom) {
          console.log(fetchedRoom);
          setCapacity(fetchedRoom.capacity);
          setDescription(fetchedRoom.description);
          setAdmin(fetchedRoom.space_id.admin_id._id);
        }

        if (fetchedAvailabilities) {
          console.log(fetchedAvailabilities);
          const currentRoomTimeSlot =
            fetchedAvailabilities.availableTimeSlots.filter(
              (room) => room.room_id === roomId
            );

          if (currentRoomTimeSlot) {
            setAvailabilities(currentRoomTimeSlot?.at(0)?.time_slots || []);
          }
        }

        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getRoom();
  }, [roomId]);

  function handleEditRoom() {
    setModalName('Edit Room');
    handleOpen();
  }

  // function handleEditUsers() {
  //   setModalName('Edit Users');
  //   return handleOpen();
  // }

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

  const renderModalContent = () => {
    switch (modalName) {
      case 'Edit Users':
        return (
          <EditUsersModalContent heading="Edit Users" rows={usersEditRows} />
        );
      case 'Edit Room':
        return <EditRoomModalContent heading="Edit Room" />;
      default:
        return new Error('Incorrect modalName');
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
          {/* TODO: still need to finish this after bookings is integrated */}
          <DashItem
            heading="Book Now"
            styling="col-start-1 col-end-12 row-span-5"
            content={
              <BookNow
                date={formattedAvailabilities.at(0).date}
                time={formattedAvailabilities.at(0).time}
              />
            }
          />

          {/* <DashItem
        heading="Room"
        styling="col-span-5 row-span-5"
        content={<RoomName roomName={roomName} />}
      /> */}

          {/* TODO: still need to finish this after bookings is integrated */}
          <DashItem
            heading="Availabilities Today"
            styling={`col-span-full col-start-[16] ${
              isAdmin ? 'row-end-[19]' : 'row-span-full'
            } row-start-1 rounded-xl`}
            content={
              <ListContent
                contentType="roomAvailabilities"
                toolTipTitle="Go to bookings"
                roomAvailabilities={formattedAvailabilities}
              />
            }
          />

          {isAdmin && (
            <>
              <section className="col-start-1 col-end-[15] row-span-full row-start-[17] flex flex-col items-center justify-center">
                <Button variant="contained" onClick={handleEditRoom}>
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
            content={<Description descriptionText={description} />}
          />

          <DashItem
            heading="Capacity"
            styling={'col-span-4 row-span-5'}
            content={<CapacityRoom capacityAmount={capacity} />}
          />

          {/* TODO: still need to finish this after bookings is integrated */}
          <DashItem
            heading="Current Users"
            styling={`col-start-1 col-end-[16] ${
              isAdmin
                ? 'row-start-[10] row-end-[17]'
                : 'row-start-[11] row-span-full'
            }`}
            content={isWoo ? <EmptyDashContent message='No users currently in room'/> : <ListContent contentType="roomUsers" />}
            // isDropdown={isAdmin}
            // dropdownOptions={[
            //   {name: 'Edit Users', handleOpen: handleEditUsers},
            // ]}
          />
        </>
      )}

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
