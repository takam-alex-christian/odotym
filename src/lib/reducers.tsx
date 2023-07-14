import {MainUiStateType, MainUiActionTypes} from '@/lib/customTypes'


interface MainUiAction{
    type: MainUiActionTypes,
    payload: Object
}

export function mainUiReducer(prevState: MainUiStateType , action: MainUiAction){
    switch(action.type){
        case MainUiActionTypes.contextMenuHidden: {
            return {...prevState, isContextMenuVisible: false} as MainUiStateType
            break;
        }
        case MainUiActionTypes.contextMenuShown:{
            return {...prevState, isContextMenuVisible: true} as MainUiStateType
            break;
        }
        default: {
            throw new Error("invalid MainUiAction dispatched");
        }
    }
}