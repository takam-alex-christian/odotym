import React from 'react'


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

export default function ToDoInputForm() {
  return (
    <form>
        <div className='flex flex-row px-6 h-16 bg-white shadow rounded-2xl gap-4'>
            {/* input state icon */}
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center w-5 h-5'>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>

            {/* todo input */}
            <div className='w-full'>
                <input className='w-full h-full text-lg placeholder-zinc-500 text-zinc-900 focus:outline-none' placeholder='Type something like "Pay my rent by Monday"'/>
            </div>
        </div>
    </form>
  )
}
