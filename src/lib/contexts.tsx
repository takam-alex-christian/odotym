"use client"

import { Dispatch, createContext } from "react";
import { MainUiStateType, ToDosStateType } from "./customTypes";


//dispatch functions
import { toDosReducer, ToDosReducerAction } from "./reducers";

export const mainUiStateContext = createContext<MainUiStateType>({
    isContextMenuVisible: false
});

export const mainUiDispatchContext = createContext<any>(null);


export const toDosContext = createContext<{
    toDosState: ToDosStateType,
    toDosDispatch: Dispatch<ToDosReducerAction> | undefined
}> ({
    toDosState: {toDos: []},
    toDosDispatch: undefined
}); // 