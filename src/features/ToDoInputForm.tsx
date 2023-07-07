"use client"

import React, { ChangeEvent, FormEvent, SyntheticEvent, useEffect, useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import addToDoItem from '@/lib/addToDoItem';

export default function ToDoInputForm() {

    const [formState, setFormState] = useState<{inputValue: string}>({
        inputValue: ""
    })



    async function onToDoSubmit(e:FormEvent) {
        e.preventDefault();

        await addToDoItem({value: formState.inputValue}).then(result=>{
            console.log(result)
        })

    }

    function onToDoChange(e: ChangeEvent<HTMLInputElement>){
        setFormState((prev)=>{
            return {...prev, inputValue: e.target.value}
        });
    }


    return (
        <form onSubmit={onToDoSubmit}>
            <div className='flex flex-row px-6 h-16 bg-white shadow rounded-2xl gap-4'>
                {/* input state icon */}
                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center w-5 h-5'>
                        {formState.inputValue.length !== 0? <FontAwesomeIcon icon={faCircle} />: <FontAwesomeIcon icon={faPlus} />}
                    </div>
                </div>

                {/* todo input */}
                <div className='w-full'>
                    <input onChange={onToDoChange} value={formState.inputValue} className='w-full h-full text-lg placeholder-zinc-500 text-zinc-900 focus:outline-none' placeholder='Type something like "Pay my rent by Monday"' />
                </div>
            </div>
        </form>
    )
}
