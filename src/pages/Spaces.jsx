import {useState} from 'react';
import DashItem from '../components/dashboard/DashItem';
import useModal from '../contexts/useModal';
import {Button, Modal} from '@mui/material';
import ModalBox from '../components/modal/ModalBox';
import JoinSpaceModalContent from '../features/spaces/JoinSpaceModalContent';
import CreateSpaceModalContent from '../features/spaces/CreateSpaceModalContent';
import {Link} from 'react-router-dom';

function Spaces() {
  const {open, handleOpen, handleClose} = useModal();
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((toggled) => !toggled);
  }

  // TODO: think about how to fetch and render joined vs owned spaces (use toggle?)
  // Hard coded spaces
  const spaces = Array.from(Array(4), (_, idx) => `Space ${idx + 1}`);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-center">
        <Button variant="contained" onClick={handleToggle}>
          {toggle ? 'Owned Spaces' : 'Joined Spaces'}
        </Button>
      </div>

      {/* TODO: Fix flex card item alignment, not with justify-center, figure something out
                might be an issue with the section or main container
      */}
      {/* TODO: This might be a grid container rather than flex, fix this last */}
      <section className="flex flex-wrap gap-5">
        {/* TODO: think about how to fetch and render joined vs owned spaces */}
        {spaces.map((space, index) => (
          // TODO: space should be an object, where you grab the spaceId, change this later
          <Link to={`/spaces/${space}/${index + 1}`} key={space}>
            <DashItem
              key={space}
              styling="w-[20rem] h-[14.5rem]"
              heading={space}
              headingStyling="self-center my-auto"
            />
          </Link>
        ))}

        {/* CONDITIONAL BTNS */}
        {toggle ? (
          <button onClick={handleOpen}>
            <DashItem
              styling="w-[20rem] h-[14.5rem]"
              heading="Create Space +"
              bgColor="bg-slate-300"
              headingStyling="self-center my-auto"
            />
          </button>
        ) : (
          <button onClick={handleOpen}>
            <DashItem
              styling="w-[20rem] h-[14.5rem]"
              heading="Join Space +"
              bgColor="bg-slate-300"
              headingStyling="self-center my-auto"
            />
          </button>
        )}
        
        {/* CONDITIONAL MODALS */}
        {open && toggle ? (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox
              content={<CreateSpaceModalContent heading="Create New Space" />}
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
              content={<JoinSpaceModalContent heading="Join Space" />}
              height="h-auto"
              width="w-[27rem]"
            />
          </Modal>
        )}
      </section>
    </section>
  );
}

export default Spaces;
