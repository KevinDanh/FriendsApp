import {React, useContext} from 'react'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';
import GlobalContext from './context/GlobalContext';


export default function EventModel() {
    const {setShowEventModel} = useContext(GlobalContext)
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            <DragHandleIcon />
          </span>
          <button onClick={()=> setShowEventModel(false)}>
            <span className="material-icons-outlined text-gray-400">
              <CloseIcon />
            </span>
          </button>
        </header>
      </form>
    </div>
  );
}
