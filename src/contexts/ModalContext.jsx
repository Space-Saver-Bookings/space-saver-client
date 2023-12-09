import {createContext, useState} from 'react';
import PropTypes from 'prop-types';

export const ModalContext = createContext(null);

export default function ModalProvider({children}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider value={{open, handleOpen, handleClose}}>
      {children}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node,
};
