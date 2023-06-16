

import React from 'react'

interface ToDoItemListProps{
    children: React.ReactNode
}

export default function ToDoItemList(Props: ToDoItemListProps) {
  return (
    <div className='flex flex-col gap-2'>
        {Props.children}
    </div>
  )
}
