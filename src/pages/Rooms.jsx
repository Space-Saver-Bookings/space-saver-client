import {Link} from 'react-router-dom';
import DashItem from '../components/dashboard/DashItem';
import useModal from '../contexts/useModal';
import {Modal} from '@mui/material';
import ModalBox from '../components/modal/ModalBox';
import CustomizedMenus from '../components/menu/CustomizedMenus';
import useMenuOptionStore from '../features/rooms/menuOptionStore';
import AddNewRoomModalContent from '../components/modal/AddNewRoomModalContent';
import {useEffect, useState} from 'react';
import {getAllSpaces} from '../services/apiSpaces';
import {getAllRooms} from '../services/apiRooms';
import useAuth from '../auth/useAuth';
import MainSectionSpinner from '../components/spinner/MainSectionSpinner';

function Rooms() {
  const {user} = useAuth();
  const {open, handleOpen, handleClose} = useModal();
  const [isLoading, setIsLoading] = useState(true);
  // const [bookedRoomss, setBookedRooms] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [spacess, setSpaces] = useState([]);

  useEffect(() => {
    const getSpaces = async () => {
      try {
        const fetchedSpaces = await getAllSpaces();
        setSpaces(fetchedSpaces);
        const fetchedRooms = await getAllRooms();
        setRooms(fetchedRooms);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getSpaces();
  }, []);

  const bookedRooms = {
    name: 'Booked Rooms',
    admin: user._id,
    rooms: Array.from(
      // Array(Math.trunc(Math.random() * 5) + 1),
      Array(4),
      (_, idx) => ({name: `Room ${idx + 1}`})
    ),
  };

  const spaces = Array.from(spacess, (space) => ({
    id: space._id,
    name: space.name,
    admin: space.admin_id._id,
    rooms: rooms.filter((room) => room.space_id._id === space._id),
  }));

  const options = [bookedRooms, ...spaces];
  // console.log(options);

  const {menuOption} = useMenuOptionStore();
  const currentOption = options.find((option) => option.name === menuOption);
  // console.log(currentOption);

  const isAdmin = currentOption?.admin === user._id;

  return (
    <section className="flex h-full w-full flex-col gap-6">
      <div className="flex justify-center">
        <CustomizedMenus options={options} />
      </div>

      {/* TODO: Fix flex card item alignment, not with justify-center, figure something out might be an issue with the section or main container
       */}

      {isLoading ? (
        <MainSectionSpinner />
      ) : (
        <>
          <section className="flex flex-wrap gap-5">
            {currentOption?.rooms?.length >= 1 ? (
              currentOption.rooms.map((room) => (
                <Link to={`/rooms/${room.name}/${room._id}`} key={room._id}>
                  <DashItem
                    key={room.name}
                    styling="w-[20rem] h-[14.5rem]"
                    heading={room.name}
                    headingStyling="self-center my-auto"
                  />
                </Link>
              ))
            ) : (
              <div className="mx-auto mt-[15rem] self-center text-lg">
                No rooms found in this space
              </div>
            )}

            {isAdmin && menuOption !== 'Booked Rooms' && (
              <button onClick={handleOpen}>
                <DashItem
                  styling="w-[20rem] h-[14.5rem]"
                  heading="Create room +"
                  bgColor="bg-slate-300"
                  headingStyling="self-center my-auto"
                />
              </button>
            )}

            {open && (
              <Modal
                open={open}
                onClose={handleClose}
                // TODO: change aria for accessibility
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <ModalBox
                  content={
                    <AddNewRoomModalContent
                      heading="Add New Room"
                      spaceIdFromRooms={currentOption?.id}
                    />
                  }
                  height="h-auto"
                  width="w-auto"
                />
              </Modal>
            )}
          </section>
        </>
      )}
    </section>
  );
}

export default Rooms;
