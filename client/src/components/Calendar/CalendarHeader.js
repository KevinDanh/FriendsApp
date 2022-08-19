import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function CalendarHeader() {
  return (
    <header className="px-4 py-2 flex items-center">
      <img src="/images/calendar.png" alt="calendar" className='mr-5 w-21 h-12' />
      <h1 className='mr-10 text-5xl text-yellow-600 font-bold'>
        Friends Calendar
      </h1>
      <button className='broder rounded py-2 px-4 mr-5'>
        Today
      </button>
      <button>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <ChevronLeftIcon/>
        </span>
      </button>
      <button>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          <ChevronRightIcon/>
        </span>
      </button>
    </header>
  )
}
