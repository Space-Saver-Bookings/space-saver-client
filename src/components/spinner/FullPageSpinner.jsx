import { CircularProgress } from "@mui/material"

function FullPageSpinner() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <CircularProgress size={60}/>
    </div>
  )
}

export default FullPageSpinner
