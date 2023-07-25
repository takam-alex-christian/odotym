"use client"

import React from 'react'

import CheckBox from '@/components/CheckBox'
import ImportantStar from '@/components/ImportantStar';

//lib
import { updateToDo } from '@/lib/updateToDo';


export default function ToDoItem(Props: {
    toDoItem: ToDoItemType,
    onUpdateToDo: Function,
    onContextMenu: (callerData: ContextMenuCallerDataType) => void

}) {

    //self explanatory
    function toggleCheck(e: React.MouseEvent<HTMLButtonElement>) {

        Props.onUpdateToDo({ _id: Props.toDoItem._id, completed: !Props.toDoItem.completed }) //update the state first, then initiate the request to the backend server
        updateToDo({ _id: Props.toDoItem._id, completed: !Props.toDoItem.completed })
        .then((backendResponse: { message: string, doc: ToDoItemType }) => {
            console.log(backendResponse)
        }) // we do nothing with the response yet

    }

    //self explanatory
    function toggleImportance(e: React.MouseEvent<HTMLButtonElement>) {
        Props.onUpdateToDo({ _id: Props.toDoItem._id, important: !Props.toDoItem.important}) //update the state first, then initiate the request to the backend server

        updateToDo({ _id: Props.toDoItem._id, important: !Props.toDoItem.important })
        .then((backendResponse: { message: string, doc: ToDoItemType }) => {
            console.log(backendResponse)
        })
    }

    function onContextMenu(e: React.MouseEvent<HTMLDivElement>) {
        e.preventDefault();

        //we calculate and store to contextCallerstate the distance between the cursor and the x and y coordinates of the caller toDoitem
        Props.onContextMenu({ _id: Props.toDoItem._id, posX: e.clientX, posY: e.clientY });

        // console.log(e.screenX)
    }

    return (
        <div onContextMenu={onContextMenu} className='flex flex-row relative items-center justify-between px-6 py-4 rounded-2xl shadow-md bg-white bg-opacity-75 backdrop-blur-sm'>
            <div className='flex flex-row gap-4 items-center'>
                {/* check box*/}
                <div className='flex'>
                    <CheckBox checkState={Props.toDoItem.completed} onCheckChange={toggleCheck} />
                </div>

                {/* the text content of the item */}
                <div className='flex flex-col gap-1'>
                    <div className='text-base text-zinc-900 leading-none'>{Props.toDoItem.value}</div>
                    <div className='text-sm text-zinc-600 leading-none'>{Props.toDoItem.parentFolder}</div>
                </div>
            </div>


            {/* ToDoItem options */}
            <div className='flex'>
                <ImportantStar isImportant={Props.toDoItem.important} onImportanceChange={toggleImportance} />
            </div>

        </div>
    )
}
