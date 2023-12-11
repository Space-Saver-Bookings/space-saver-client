import {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext(null);

export default function ModalProvider({children}) {
  const [open, setOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider
      value={{open, handleOpen, handleClose, modalName, setModalName}}
    >
      {children}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node,
};
