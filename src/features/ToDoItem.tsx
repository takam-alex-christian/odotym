"use client"

import React, { useState, useRef, MouseEventHandler } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import CheckBox from '@/components/CheckBox'
import ImportantStar from '@/components/ImportantStar';

//lib
import { updateToDo } from '@/lib/updateToDo';


interface ToDoItemProps {
    toDoItem: ToDoItemType,
    onContextMenu: (callerData: ContextMenuCallerDataType) => void 

}
export default function ToDoItem(Props: ToDoItemProps) {

    const [toDoState, setToDoState] = useState({
        ...Props.toDoItem
    });

    //self explanatory
    function toggleCheck(e: React.MouseEvent<HTMLButtonElement>) {
        setToDoState((prev) => {
            return { ...prev, completed: prev.completed ? false : true };
        })

        updateToDo({ _id: Props.toDoItem._id, completed: !toDoState.completed }).then((backendResponse: { message: string, doc: ToDoItemType }) => {
            console.log(backendResponse.message)
        })

    }

    //self explanatory
    function toggleImportance(e: React.MouseEvent<HTMLButtonElement>) {
        setToDoState((prev) => {
            return { ...prev, important: prev.important ? false : true };
        })

        updateToDo({ _id: Props.toDoItem._id, important: !toDoState.completed }).then((backendResponse: { message: string, doc: ToDoItemType }) => {
            console.log(backendResponse.message)
        })
    }

    function onContextMenu(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();

        //we calculate and store to contextCallerstate the distance between the cursor and the x and y coordinates of the caller toDoitem
        Props.onContextMenu({_id: toDoState._id, posX: e.clientX, posY: e.clientY});

        console.log(e.screenX)
    }

    return (
        <div onContextMenu={onContextMenu} className='flex flex-row relative items-center justify-between px-6 py-4 rounded-2xl shadow-md bg-white bg-opacity-75 backdrop-blur-sm'>
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
