import {useState} from 'react';
import Button from '../components/buttons/Button';
import DashItem from '../components/dashboard/DashItem';
import useModal from '../contexts/useModal';
import {Modal} from '@mui/material';
import ModalBox from '../components/modal/ModalBox';

const rooms = Array.from(Array(3), (_, idx) => `Space ${idx + 1}`);
const isAdmin = true;

function Rooms() {
  const {open, handleOpen, handleClose} = useModal();
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((toggled) => !toggled);
  }
  
  return (
    <section className="flex flex-col gap-6">
        {/* TODO: this toggle should be a dropdown instead, will comeback in the future to implement
                  with data from server
        */}
      <div className="flex justify-center">
        <Button onClick={handleToggle}>
          {toggle ? 'Space 1' : 'Booked rooms'}
        </Button>
      </div>

      {/* TODO: Fix flex card item alignment, not with justify-center, figure something out
                might be an issue with the section or main container
      */}
      <section className="flex flex-wrap gap-5">
        {rooms.map((room) => (
          <DashItem
            key={room}
            styling="w-[20rem] h-[14.5rem]"
            heading={room}
            headingStyling="self-center my-auto"
          />
        ))}

        {toggle && isAdmin && (
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
        )}
      </section>
    </section>
  );
}

export default Rooms;
