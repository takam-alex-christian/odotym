"use client"

import React, { useState, useEffect } from 'react'

import ToDoItemList from '@/layouts/ToDoItemList'
import ToDoItem from './ToDoItem';

import getToDos from '@/lib/getToDos';


export default function ToDoItemsView() {
    const [toDos, setToDos] = useState<Array<ToDoItemType>>([]);


    //we fetch todos on start once
    useEffect(() => {
        getToDos({ start: 0, number: 6 }).then((fetchedToDos: Array<ToDoItemType>) => {
            
            console.log(fetchedToDos)
            setToDos([...fetchedToDos])
            
        })
    }, [])
    

    return (
        <div className=''>
            <ToDoItemList>
                {toDos.map((eachToDo: ToDoItemType, index: number) => {
                    return <ToDoItem key={index} toDoItem={eachToDo} />
                })}
            </ToDoItemList>
        </div>
    )
}
