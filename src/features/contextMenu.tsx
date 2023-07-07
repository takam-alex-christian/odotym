
import React, {Ref, RefObject, useEffect, useRef} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import deleteToDoItem from '@/lib/deleteToDoItem'


interface ToDoItemContextMenuProps{
    contextMenuRef:  RefObject<HTMLDivElement>,
    contextMenuState: Partial<ContextMenuCallerDataType>
}

/*
    with the use of the ref created from the main app, the ContextMenu can be repositioned from there
*/
export function ToDoItemContextMenu(Props: ToDoItemContextMenuProps) {

    useEffect(()=>{   
        (Props.contextMenuRef.current as HTMLDivElement).style.left = `${Props.contextMenuState.posX}px`;
        (Props.contextMenuRef.current as HTMLDivElement).style.top = `${Props.contextMenuState.posY}px`
    }, [Props.contextMenuState])
    

    function onDeletehandler(e: React.MouseEvent<HTMLButtonElement>){
        // to be implemented
        deleteToDoItem({_id: Props.contextMenuState._id}).then((result)=>{
            console.log("item deleted real quick")
        })

    }

    return (
        <div ref={Props.contextMenuRef} className={`flex flex-col gap-1 fixed z-10 bg-white rounded-lg`}>
            <button onClick={onDeletehandler} className='h-12 px-3'><div className={`flex flex-row gap-2 `}><div className='text-red-600'><FontAwesomeIcon icon={faTrash} /></div> <div>Delete</div></div></button>
        </div>
    )
}