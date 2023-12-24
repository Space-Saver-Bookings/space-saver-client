import {useEffect, useState} from 'react';
import DashItem from '../components/dashboard/DashItem';
import useModal from '../contexts/useModal';
import {Button, Modal} from '@mui/material';
import ModalBox from '../components/modal/ModalBox';
import JoinSpaceModalContent from '../features/spaces/JoinSpaceModalContent';
import CreateSpaceModalContent from '../features/spaces/CreateSpaceModalContent';
import {Link} from 'react-router-dom';
import {getAllSpaces} from '../services/apiSpaces';
import useAuth from '../auth/useAuth';
import MainSectionSpinner from '../components/spinner/MainSectionSpinner';

/**
 * Spaces is a component that displays a list of all spaces the user is associated with.
 * It differentiates between spaces owned by the user and spaces where the user is a member.
 * Users can toggle between viewing owned or joined spaces.
 */
function Spaces() {
  const {user} = useAuth();
  const {open, handleOpen, handleClose} = useModal();
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [ownedSpaces, setOwnedSpaces] = useState([]);
  const [joinedSpaces, setJoinedSpaces] = useState([]);

  useEffect(() => {
    const getSpaces = async () => {
      try {
        const spaces = await getAllSpaces();
        setOwnedSpaces(
          spaces.filter((space) => user._id === space.admin_id._id)
        );
        setJoinedSpaces(
          spaces.filter((space) => user._id !== space.admin_id._id)
        );
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getSpaces();
  }, [user._id]);

  function handleToggle() {
    setToggle((toggled) => !toggled);
  }

  return (
    <section className="flex flex-col gap-6 h-full w-full">
      <div className="flex justify-center">
        <Button variant="contained" onClick={handleToggle}>
          {toggle ? 'Owned Spaces' : 'Joined Spaces'}
        </Button>
      </div>

      {/* TODO: Fix flex card item alignment, not with justify-center, figure something out
                might be an issue with the section or main container
      */}
      {/* TODO: This might be a grid container rather than flex, fix this last */}

      {isLoading ? (
        <MainSectionSpinner />
      ) : (
        <section className="flex flex-wrap gap-5">
          {/* joined vs owned spaces */}
          {toggle
            ? ownedSpaces.map((space) => (
                <Link to={`/spaces/${space.name}/${space._id}`} key={space._id}>
                  <DashItem
                    key={space._id}
                    styling="w-[20rem] h-[14.5rem]"
                    heading={space.name}
                    headingStyling="self-center my-auto"
                  />
                </Link>
              ))
            : joinedSpaces.map((space) => (
                <Link to={`/spaces/${space.name}/${space._id}`} key={space._id}>
                  <DashItem
                    key={space._id}
                    styling="w-[20rem] h-[14.5rem]"
                    heading={space.name}
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
      )}
    </section>
  );
}

export default Spaces;
