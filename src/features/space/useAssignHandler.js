import {useEffect} from 'react';
import {spaceDropdownOptions} from './SpaceDropdownOptions';

export function useAssignHandler(handleOpen) {
  useEffect(() => {
    spaceDropdownOptions.accessCode[0].handleOpen = () => handleOpen();
  }, [handleOpen]);
}
