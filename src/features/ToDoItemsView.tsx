"use client"

import React, { useState, useRef, useReducer, useContext, useEffect } from 'react'

import ToDoItemList from '@/layouts/ToDoItemList'

import ToDoItem from '@/features/ToDoItem';

import ToDoInputForm from './ToDoInputForm';

import { ToDoItemContextMenu } from '@/features/contextMenu';

import { newGetToDos } from '@/lib/getToDos';

import { mainUiStateContext, mainUiDispatchContext, toDosContext } from '@/lib/contexts'; //main ui context and dispatch

import { toDosReducer, mainUiReducer, ToDosReducerAction } from '@/lib/reducers';

import { MainUiActionTypes, MainUiStateType, ToDosStateType } from '@/lib/customTypes';



const fetchToDos = newGetToDos({ start: 0, limit: 6 });


export default function ToDoItemsView() {
    const fetchedToDos = fetchToDos()


    const [toDos, setToDos] = useState<Array<ToDoItemType>>(fetchedToDos);



    const initialToDosState: ToDosStateType = { toDos: [...fetchedToDos] };

    const [toDosState, toDosDispatch] = useReducer(toDosReducer, initialToDosState);

    const mainUiState = useContext(mainUiStateContext);
    const mainUiDispatch = useContext(mainUiDispatchContext);


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

        setContextMenuState({ ...callerData });

        mainUiDispatch({
            type: MainUiActionTypes.contextMenuShown,
            payload: {}
        })
    }

    return (
        <div className='flex flex-col justify-between h-full'>
            {mainUiState.isContextMenuVisible && <ToDoItemContextMenu contextMenuState={contextMenuState} contextMenuRef={contextMenuContainerRef} />}

            <div className='relative'>
                <ToDoItemList>
                    {toDosState.toDos.map((eachToDo: ToDoItemType, index) => {
                        return <ToDoItem toDosDispatch={toDosDispatch} onContextMenu={onContextMenu} key={eachToDo._id? eachToDo._id: index } toDoItem={eachToDo} />
                    })}
                </ToDoItemList>
            </div>

            <div className="h-fit flex-grow-0">
                <ToDoInputForm toDosDispatch={toDosDispatch} />
            </div>
            {/* form will now live here */}
        </div>
    )
}
