import dayjs from 'dayjs';
import { React, useContext } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import GlobalContext from './context/GlobalContext';

export default function CalendarHeader() {
  const {monthIndex, setMonthIndex} = useContext(GlobalContext)
  function handlePrevMonth(){
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth(){
    setMonthIndex(monthIndex + 1);
  }
  function handleReset(){
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <img src="/images/calendar.png" alt="calendar" className='mr-5 w-21 h-12' />
      <h1 className='mr-10 text-5xl text-black-600 font-bold'>
        Friends Calendar
      </h1>
      <button onClick={handleReset} className='border rounded py-2 px-4 mr-5'>
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <ChevronLeftIcon/>
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <ChevronRightIcon/>
        </span>
      </button>
      <h2 className='ml-4 text-5xl text-yellow-600 font-bold'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  )
}
