
import React, { MouseEventHandler } from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faStar } from '@fortawesome/free-regular-svg-icons'

import { faStar as filledFaStar } from '@fortawesome/free-solid-svg-icons'

interface ImportantStarProps {
    isImportant: boolean,
    onImportanceChange: MouseEventHandler<HTMLButtonElement>
}

export default function ImportantStar(Props: ImportantStarProps) {
    return (
        <button onClick={Props.onImportanceChange}>
            <div className='flex w-full h-full'>
                {Props.isImportant ? <FontAwesomeIcon className='text-orange-600 text-xl' icon={filledFaStar} /> : <FontAwesomeIcon icon={faStar} className='text-xl'/>}
            </div>
        </button>
    )
}
