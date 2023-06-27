"use client"

import React, { useState, useEffect, useRef } from 'react'




import ToDoItemList from '@/layouts/ToDoItemList'
import ToDoItem from './ToDoItem';

import { ToDoItemContextMenu } from './contextMenu';

import getToDos from '@/lib/getToDos';


export default function ToDoItemsView() {
    const [toDos, setToDos] = useState<Array<ToDoItemType>>([]);

    // const ToDoItemMenu = 

    //we fetch todos on start once
    useEffect(() => {
        getToDos({ start: 0, number: 6 }).then((fetchedToDos: Array<ToDoItemType>) => {

            console.log(fetchedToDos)
            setToDos([...fetchedToDos])

        })
    }, [])


    //context menu related
    const [contextMenuState, setContextMenuState] = useState<ContextMenuCallerDataType>({
        _id: "",
        posX: 0,
        posY: 0
    })

    const [isContextMenuVisible, setContextMenuVisibility] = useState(false)

    const contextMenuContainerRef = useRef(null)

    function onContextMenu(callerData: ContextMenuCallerDataType) {
        // alert(`${callerData} is the number passed`);
        console.log(callerData)
        setContextMenuState({...callerData});
        setContextMenuVisibility(true);
    }


    return (
        <div className='relative'>
            {isContextMenuVisible && <ToDoItemContextMenu contextMenuState={contextMenuState} contextMenuRef={contextMenuContainerRef} />}
      
            <ToDoItemList>
                {toDos.map((eachToDo: ToDoItemType, index: number) => {
                    return <ToDoItem onContextMenu={onContextMenu} key={index} toDoItem={eachToDo} />
                })}
            </ToDoItemList>
        </div>
    )
}
