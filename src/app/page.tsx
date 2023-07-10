"use client"

//custom imports
import ToDoInputForm from "@/features/ToDoInputForm"

import ToDoItemsView from "@/features/ToDoItemsView"


import { mainUiStateContext, mainUiDispatchContext } from "@/lib/contexts";
import { MainUiStateType } from "@/lib/customTypes";
import { mainUiReducer } from "@/lib/reducers";
import { useReducer } from "react";

export default function Home() {

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

  //context menu
  //react docs says it's not unusual to pass a state 12 times down

  return (
    <mainUiStateContext.Provider value={mainUiState} >
      <mainUiDispatchContext.Provider value={mainUiDispatch}>
        <main className=" flex relative justify-center h-screen bg-gradient-to-br from-[#00000099] to-transparent ">


          <div className="flex flex-col justify-between w-3/4 h-full overflow-hidden py-6 gap-2">
            <div className="flex flex-col gap-2">

              <div className={"flex flex-col gap-1 py-8"}>
                <div className={`text-[#ffffff] text-2xl font-semibold tracking-wide`}>
                  My Day
                </div>
                <div className="text-[#FFFFFFD0] drop-shadow-lg  text-base font-light">
                  {`${daysOfTheWeek[userDate.getDay()]}, ${monthsOfTheYear[userDate.getMonth()]} ${userDate.getDate()}`}
                </div>
              </div>

              <ToDoItemsView />

            </div>

            <ToDoInputForm />
          </div>

        </main>
      </mainUiDispatchContext.Provider>
    </mainUiStateContext.Provider>
  )
}
