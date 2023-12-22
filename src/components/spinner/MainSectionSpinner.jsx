import {CircularProgress} from '@mui/material';

function MainSectionSpinner() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <CircularProgress size={50} />
    </div>
  );
}

export default MainSectionSpinner;
