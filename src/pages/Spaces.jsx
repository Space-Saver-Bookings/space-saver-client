import {useState} from 'react';
import Button from '../components/buttons/Button';
import DashItem from '../components/dashboard/DashItem';
import useModal from '../contexts/useModal';
import { Box, Modal, Typography } from '@mui/material';

const spaces = Array.from(Array(4), (_, idx) => `Space ${idx + 1}`);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Spaces() {
  const {open, handleOpen, handleClose} = useModal()
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((toggled) => !toggled);
  }

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-center">
        <Button onClick={handleToggle}>
          {toggle ? 'Owned Spaces' : 'Joined Spaces'}
        </Button>
      </div>

      {/* TODO: Fix flex card item alignment, not with justify-center, figure something out
                might be an issue with the section or main container
      */}
      <section className="flex flex-wrap gap-5">
        {spaces.map((space) => (
          <DashItem
            key={space}
            styling="w-[20rem] h-[14.5rem]"
            heading={space}
            headingStyling="self-center my-auto"
          />
        ))}

        {toggle ? (
          <DashItem
            styling="w-[20rem] h-[14.5rem]"
            heading="Create Space +"
            bgColor="bg-slate-300"
            headingStyling="self-center my-auto"
          />
        ) : (
          <Button noStyle={true} onClick={handleOpen}>
            <DashItem
              styling="w-[20rem] h-[14.5rem]"
              heading="Join Space +"
              bgColor="bg-slate-300"
              headingStyling="self-center my-auto"
            />
          </Button>
        )}

        {open && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{mt: 2}}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        )}
      </section>
    </section>
  );
}

export default Spaces;
