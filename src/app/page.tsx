"use client"

import ToDoItemsView from "@/features/ToDoItemsView"


import { mainUiStateContext, mainUiDispatchContext } from "@/lib/contexts";
import { MainUiStateType, ToDosStateType } from "@/lib/customTypes";
import { mainUiReducer, toDosReducer } from "@/lib/reducers";
import { Suspense, useReducer } from "react";




export default function Home() {


    // const [toDosState, toDosDispatch] = useReducer(toDosReducer, initialState);

  const [mainUiState, mainUiDispatch] = useReducer(mainUiReducer, {
    isContextMenuVisible: false,
  } as MainUiStateType);

  const userDate = new Date();

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

  const monthsOfTheYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]


  //notes will be fetched here
  //they will simply be passed to the todoitemsview




  return (
    <mainUiStateContext.Provider value={mainUiState} >
      <mainUiDispatchContext.Provider value={mainUiDispatch}>
        <main className=" flex relative justify-center h-screen bg-gradient-to-br from-[#00000099] to-transparent ">

          <div className="flex flex-col justify-start w-3/4 h-screen py-6 gap-2">

            <div className={"flex flex-col gap-1 py-8 flex-grow-0 "}>
              <div className={`text-[#ffffff] text-2xl font-semibold tracking-wide`}>
                My Day
              </div>
              <div className="text-[#FFFFFFD0] drop-shadow-lg  text-base font-light">
                {`${daysOfTheWeek[userDate.getDay()]}, ${monthsOfTheYear[userDate.getMonth()]} ${userDate.getDate()}`}
              </div>
            </div>

              {/* this area is appropriate for a new context to pass fetched toDos */}
              <div className="h-full flex-grow overflow-y-auto">
                <Suspense fallback={<div className="p-2 rounded-lg bg-slate-400">Loadinging...</div>}>
                  <ToDoItemsView />
                </Suspense>
              </div>

              
          </div>
        </main>
      </mainUiDispatchContext.Provider>
    </mainUiStateContext.Provider>
  )
}
