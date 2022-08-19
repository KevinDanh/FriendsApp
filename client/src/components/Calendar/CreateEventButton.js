import React from 'react'

export default function CreateEventButton() {
  return (
    <button className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
        <img src ='/images/addButton.png' alt='create_event' className='w-7 h-7'/>
        <span className='pl-3 pr-6'>Create</span>
      
    </button>
  )
}
