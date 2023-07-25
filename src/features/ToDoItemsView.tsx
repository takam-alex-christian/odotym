"use client"

import React, { useState, useRef, useReducer, useContext, useEffect } from 'react'

import ToDoItemList from '@/layouts/ToDoItemList'

import ToDoItem from '@/features/ToDoItem';

import { ToDoItemContextMenu } from '@/features/contextMenu';

import {newGetToDos} from '@/lib/getToDos';

import { mainUiStateContext, mainUiDispatchContext } from '@/lib/contexts'; //main ui context and dispatch

import { mainUiReducer } from '@/lib/reducers';

import { MainUiActionTypes, MainUiStateType } from '@/lib/customTypes';



export default function ToDoItemsView() {
    
    const fetchToDos = newGetToDos({start: 0, limit: 6});

    const fetchedToDos = fetchToDos()
    
    const [toDos, setToDos] = useState<Array<ToDoItemType>>(fetchedToDos); 

    const mainUiState = useContext(mainUiStateContext);
    const mainUiDispatch = useContext(mainUiDispatchContext);

    function upDateToDoHandler(toDoItem: Partial<ToDoItemType>){ //makesure id is _id is passed

        // @ts-ignore
        setToDos((prev)=>{
            if(Object.keys(toDoItem).includes('_id')){
                // console.log(prev.map(eachItem => {if(eachItem._id == toDoItem._id) return toDoItem; else return eachItem} ))
                return prev.map(eachItem => eachItem._id == toDoItem._id? {...eachItem, ...toDoItem}: eachItem)
            }
        })
    }

    // useEffect(()=>{
    //     console.log(toDos)
    // }, [toDos])
    
    const [contextMenuState, setContextMenuState] = useState<ContextMenuCallerDataType>({
        _id: "",
        posX: 0,
        posY: 0
    })
    
    const [mainUiStatex, dispatchMainUiStatex] = useReducer(mainUiReducer, {
        isContextMenuVisible: false,

    } as MainUiStateType);

    const contextMenuContainerRef = useRef(null)

    function onContextMenu(callerData: ContextMenuCallerDataType) {
        // alert(`${callerData} is the number passed`);
        // console.log(callerData)

        setContextMenuState({...callerData});

        mainUiDispatch({
            type: MainUiActionTypes.contextMenuShown,
            payload: {}
        })
    }

    return (
        <div className='relative'>
            {mainUiState.isContextMenuVisible && <ToDoItemContextMenu contextMenuState={contextMenuState} contextMenuRef={contextMenuContainerRef} />}
      
            <ToDoItemList>
                {toDos.map((eachToDo: ToDoItemType) => {
                    return <ToDoItem onUpdateToDo={upDateToDoHandler} onContextMenu={onContextMenu} key={eachToDo._id} toDoItem={eachToDo} />
                })}
            </ToDoItemList>
        </div>
    )
}
