import {useContext} from 'react';
import {ModalContext} from './ModalContext';

/**
 * Custom React hook that provides access to the ModalContext.
 * 
 * @returns {Object} - The modal context containing functions and state related to modals.
 * @throws {Error} - Throws an error if the hook is used outside of a ModalProvider.
 */
export default function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('ModalContext was used outside of ModalProvider');
  }

  return context;
}
