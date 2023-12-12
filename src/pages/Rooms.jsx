// import {useState} from 'react';
// import Button from '../components/buttons/Button';
import {Link} from 'react-router-dom';
import DashItem from '../components/dashboard/DashItem';
// import useModal from '../contexts/useModal';
// import {Modal} from '@mui/material';
// import ModalBox from '../components/modal/ModalBox';
import CustomizedMenus from '../components/menu/CustomizedMenus';
import useMenuOptionStore from '../features/rooms/menuOptionStore';

function Rooms() {
  //   const {open, handleOpen, handleClose} = useModal();
  //   const [toggle, setToggle] = useState(false);

  //   function handleToggle() {
  //     setToggle((toggled) => !toggled);
  //   }

  // const rooms = Array.from(Array(3), (_, idx) => `Room ${idx + 1}`);
  const bookedRooms = {
    name: 'Booked Rooms',
    rooms: Array.from(
      // Array(Math.trunc(Math.random() * 5) + 1),
      Array(4),
      (_, idx) => `Room ${idx + 1}`
    ),
  };

  // const spaces = Array.from(Array(8), (_, idx) => `Space ${idx + 1}`);
  const spaces = Array.from(Array(8), (_, idx) => ({
    name: `Space ${idx + 1}`,
    rooms: Array.from(
      // Array(Math.trunc(Math.random() * 5) + 1),
      Array(3),
      (_, idx) => `Room ${idx + 1}`
    ),
  }));

  const options = [bookedRooms, ...spaces];
  // console.log(options);
  // options.unshift(bookedRooms);

  const {menuOption} = useMenuOptionStore();
  const currentOption = options.find((option) => option.name === menuOption);

  // const isAdmin = true;

  return (
    <section className="flex flex-col gap-6">
      {/* TODO: this toggle should be a dropdown instead, will comeback in the future to implement with data from server
       */}
      <div className="flex justify-center">
        {/* <Button onClick={handleToggle}>
          {toggle ? 'Space 1' : 'Booked rooms'}
        </Button> */}
        <CustomizedMenus options={options} />
      </div>

      {/* TODO: Fix flex card item alignment, not with justify-center, figure something out might be an issue with the section or main container
       */}

      <section className="flex flex-wrap gap-5">
        {currentOption.rooms.map((room, idx) => (
          <Link to={`/rooms/${room}/${idx + 1}`} key={room}>
            <DashItem
              key={room}
              styling="w-[20rem] h-[14.5rem]"
              heading={room}
              headingStyling="self-center my-auto"
            />
          </Link>
        ))}

        {/* {toggle && isAdmin && (
          <Button noStyle={true} onClick={handleOpen}>
            <DashItem
              styling="w-[20rem] h-[14.5rem]"
              heading="Create room +"
              bgColor="bg-slate-300"
              headingStyling="self-center my-auto"
            />
          </Button>
        )}

        {open && toggle && (
          <Modal
            open={open}
            onClose={handleClose}
            // TODO: change aria for accessibility
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox
              // content={}
              height="h-[31.5rem]"
              width="w-[40rem]"
            />
          </Modal>
        )} */}
      </section>
    </section>
  );
}

export default Rooms;
