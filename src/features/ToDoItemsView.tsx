"use client"

import React, { useState, useEffect, useRef, useReducer, useContext } from 'react'

import ToDoItemList from '@/layouts/ToDoItemList'

import ToDoItem from '@/features/ToDoItem';

import { ToDoItemContextMenu } from '@/features/contextMenu';

import getToDos from '@/lib/getToDos';

import { mainUiStateContext, mainUiDispatchContext } from '@/lib/contexts'; //main ui context and dispatch

import { mainUiReducer } from '@/lib/reducers';

import { MainUiActionTypes, MainUiStateType } from '@/lib/customTypes';


export default function ToDoItemsView() {
    const [toDos, setToDos] = useState<Array<ToDoItemType>>([]);

    const mainUiState = useContext(mainUiStateContext);
    const mainUiDispatch = useContext(mainUiDispatchContext);

    console.log("rerendering")

    //we fetch todos on start once
    useEffect(() => {
        if(toDos.length == 0){
            getToDos({ start: 0, number: 6 }).then((fetchedToDos: Array<ToDoItemType>) => {

            console.log(fetchedToDos)
            setToDos([...fetchedToDos])

        })
        }

        //if the user clicks when context menu is visible, toggle it's visibility

    }, [])


    function upDateToDoHandler(toDoItem: Partial<ToDoItemType>){ //makesure id is _id is passed

        // @ts-ignore
        setToDos((prev)=>{
            if(Object.keys(toDoItem).includes('_id')){
                console.log(prev.map(eachItem => {if(eachItem._id == toDoItem._id) return toDoItem; else return eachItem} ))
                return prev.map(eachItem => eachItem._id == toDoItem._id? toDoItem: eachItem)
            }
        })
    }
    
    // //context menu related
    // window.addEventListener("click", (e)=>{
    //     if(isContextMenuVisible) setContextMenuVisibility(false);
    // })
    

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

    //testing
    useEffect(()=>{
        console.log("action passed");
        console.log(mainUiState)
    }, [mainUiState])

    return (
        <div className='relative'>
            {mainUiState.isContextMenuVisible && <ToDoItemContextMenu contextMenuState={contextMenuState} contextMenuRef={contextMenuContainerRef} />}
      
            <ToDoItemList>
                {toDos.map((eachToDo: ToDoItemType, index: number) => {
                    return <ToDoItem onUpdateToDo={upDateToDoHandler} onContextMenu={onContextMenu} key={index} toDoItem={eachToDo} />
                })}
            </ToDoItemList>
        </div>
    )
}
