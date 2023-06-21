"use client"

import React, { useState, useEffect } from 'react'

import ToDoItemList from '@/layouts/ToDoItemList'
import ToDoItem from './ToDoItem';

import getToDos from '@/lib/getToDos';


export default function ToDoItemsView() {
    const [toDos, setToDos] = useState<Array<ToDoItemType>>([]);


    //we fetch todos on start once
    useEffect(() => {
        getToDos({ start: 0, number: 5 }).then((fetchedToDos: Array<ToDoItemType>) => {
            setToDos([...fetchedToDos])
        })
    }, [])


    return (
        <div>
            <ToDoItemList>
                {toDos.map((eachToDo: ToDoItemType, index: number) => {
                    return <ToDoItem key={index} toDoItem={eachToDo} />
                })}
            </ToDoItemList>
        </div>
    )
}
