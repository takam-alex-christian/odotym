"use client"

import React, { ChangeEvent, FormEvent, SyntheticEvent, useEffect, useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import addToDoItem from '@/lib/addToDoItem';

export default function ToDoInputForm() {

    const [newToDoState, setNewToDoState] = useState({
        value: "",
    });

    const [formState, setFormState] = useState({
        submitted: false,
        success: false
    })

    async function onToDoSubmit(e:FormEvent) {
        e.preventDefault();

        console.log(await addToDoItem({value: newToDoState.value}));

        console.log("life is cool here")

    }

    function onToDoChange(e: ChangeEvent<HTMLInputElement>){
        setNewToDoState((prev)=>{
            return {...prev, value: e.target.value}
        });
    }

    //on form successful submission
    useEffect(()=>{
        setFormState({submitted: false, success: false})
    }, [formState.success])

    return (
        <form onSubmit={onToDoSubmit}>
            <div className='flex flex-row px-6 h-16 bg-white shadow rounded-2xl gap-4'>
                {/* input state icon */}
                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center w-5 h-5'>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>

                {/* todo input */}
                <div className='w-full'>
                    <input onChange={onToDoChange} value={newToDoState.value} className='w-full h-full text-lg placeholder-zinc-500 text-zinc-900 focus:outline-none' placeholder='Type something like "Pay my rent by Monday"' />
                </div>
            </div>
        </form>
    )
}
