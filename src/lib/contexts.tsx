"use client"

import {createContext } from "react";
import { MainUiStateType } from "./customTypes";


export const mainUiStateContext = createContext<MainUiStateType>({
    isContextMenuVisible: false
});

export const mainUiDispatchContext = createContext<any>(null);