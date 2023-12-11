import {useEffect} from 'react';
import {spaceDropdownOptions} from './SpaceDropdownOptions';

export function useAssignHandler(handleOpen, setModalName) {
  useEffect(() => {
    Object.keys(spaceDropdownOptions).forEach((menu) => {
      spaceDropdownOptions[menu].forEach(
        (option) =>
          (option.handleOpen = () => {
            setModalName(option.name);
            handleOpen();
          })
      );
    });
    // spaceDropdownOptions.accessCode[0].handleOpen = () => handleOpen();
  }, [handleOpen, setModalName]);
}
