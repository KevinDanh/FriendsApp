import { React, useContext, useState } from "react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import GlobalContext from "./context/GlobalContext";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SegmentIcon from "@mui/icons-material/Segment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CheckIcon from "@mui/icons-material/Check";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple",];

export default function EventModel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelsClasses[0]);
  const { setShowEventModel, daySelected } = useContext(GlobalContext);
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            <DragHandleIcon />
          </span>
          <button onClick={() => setShowEventModel(false)}>
            <span className="material-icons-outlined text-gray-400">
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
            <span className="material-icons-outlined text-gray-400 pt-1 pr-9">
              <BookmarkBorderIcon />
            </span>
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
      </form>
    </div>
  );
}
