import { React, useContext, useState } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import GlobalContext from "./context/GlobalContext";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SegmentIcon from "@mui/icons-material/Segment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from '@mui/icons-material/Delete';

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple",];

export default function EventModel() {
  const { 
    setShowEventModel, 
    daySelected, 
    dispatchCalEvent, 
    selectedEvent 
} = useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "");
  const [selectedLabel, setSelectedLabel] = useState( selectedEvent ? labelsClasses.find((lbl) => lbl === selectedEvent.label) : labelsClasses[0]);


  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
        title,
        description,
        label: selectedLabel,
        day: daySelected.valueOf(),
        id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
        dispatchCalEvent({type: 'update', payload: calendarEvent});
    }else{
        dispatchCalEvent({type: 'push', payload: calendarEvent});
    }
    setShowEventModel(false);
  }

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-auto">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            <DragHandleIcon />
          </span>
          <div>
            {selectedEvent && (
                <span onClick= {() => {
                    dispatchCalEvent({
                        type: "delete", 
                        payload: selectedEvent,
                    });
                    setShowEventModel(false);
                }}
                className = 'material-icons-outlined text-gray-400 cursor-pointer ml-56'>
                    <DeleteIcon/>
                </span>
            )}
          <button onClick={() => setShowEventModel(false)}>
          </button>
          </div>
          <button onClick={() => setShowEventModel(false)}>
            <span className="material-icons-outlined text-gray-400 ">
              <CloseIcon />
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              required
              className=" border-0 text-black-600 text-xl font-semibold pb-2 w-full border-b-2 border-black-600 focus:outline-none focus:ring-0 focus:border-yellow-600"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex flex-row">
              <span className="material-icons-outlined text-gray-400">
                <ScheduleIcon />
              </span>
              <p className="pl-10">{daySelected.format("dddd, MMMM DD")}</p>
            </div>
            <div className="flex flex-row gap-x-6">
              <span className="material-icons-outlined text-gray-400 pt-1">
                <SegmentIcon />
              </span>
              <input
                type="text"
                name="Description"
                placeholder="Add a Description"
                value={description}
                required
                className="border-0 text-black-600 w-full border-b-2 border-black-600 focus:outline-none focus:ring-0 focus:border-yellow-600"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
            <span className="material-icons-outlined text-gray-400  pr-9">
              <BookmarkBorderIcon />
            </span>
            {/* <div class="font-bold text-gray-700 rounded-full bg-indigo-500 flex items-center justify-center font-mono height: 500px; width: 500px; font-size: 170px;">404</div>
            <div class="font-bold text-gray-700 rounded-full bg-gray-500 flex items-center justify-center font-mono height: 500px; width: 500px; font-size: 170px;">404</div>
            <div class="font-bold text-gray-700 rounded-full bg-blue-500 flex items-center justify-center font-mono height: 500px; width: 500px; font-size: 170px;">404</div>
            <div class="font-bold text-gray-700 rounded-full bg-green-500 flex items-center justify-center font-mono height: 500px; width: 500px; font-size: 170px;">404</div>
            <div class="font-bold text-gray-700 rounded-full bg-red-500 flex items-center justify-center font-mono height: 500px; width: 500px; font-size: 170px;">404</div>
            <div class="font-bold text-gray-700 rounded-full bg-purple-500 flex items-center justify-center font-mono height: 500px; width: 500px; font-size: 170px;">404</div> */}
            <div className="flex gap-x-5">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={()=> setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                    {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                        <CheckIcon />
                    </span> 
                    )}
                </span>
              ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-end broder-t p-3 mt-5">
            <button 
            type="submit"
            onClick={handleSubmit} 
            className="bg-yellow-600 hover:bg-yellow-500 px-6 py-2 rounded text-white">
                Save
            </button>

        </footer>
      </form>
    </div>
  );
}
