"use client"

import React, { useState } from 'react'


import CheckBox from '@/components/CheckBox'
import ImportantStar from '@/components/ImportantStar';




interface ToDoItemProps{
    toDoItem: ToDoItemType,

}
export default function ToDoItem(Props: ToDoItemProps) {

    const [toDoState, setToDoState] = useState<ToDoItemType>({
        value: "Default",
        completed: false,
        important: false,
        parentFolder: "Default"
    });

    function toggleCheck(e: React.MouseEvent<HTMLButtonElement>) {
        setToDoState((prev) => {
            return { ...prev, completed: prev.completed ? false : true };
        })
    }

    function toggleImportance(e: React.MouseEvent<HTMLButtonElement>) {
        setToDoState((prev) => {
            return { ...prev, important: prev.important ? false : true };
        })
    }


    return (
        <div className='flex flex-row items-center justify-between px-6 py-4 rounded-2xl shadow-md bg-white bg-opacity-75 backdrop-blur-sm'>
            <div className='flex flex-row gap-4 items-center'>
                {/* check box*/}
                <div className='flex'>
                    <CheckBox checkState={toDoState.completed} onCheckChange={toggleCheck} />
                </div>

                {/* the text content of the item */}
                <div className='flex flex-col gap-1'>
                    <div className='text-base text-zinc-900 leading-none'>{toDoState.value}</div>
                    <div className='text-sm text-zinc-600 leading-none'>{toDoState.parentFolder}</div>
                </div>
            </div>


            {/* ToDoItem options */}
            <div className='flex'>
                <ImportantStar isImportant={toDoState.important} onImportanceChange={toggleImportance} />
            </div>

        </div>
    )
}
