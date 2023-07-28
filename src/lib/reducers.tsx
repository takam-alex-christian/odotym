import { MainUiStateType, MainUiActionTypes, ToDosStateType } from '@/lib/customTypes'


interface MainUiAction {
    type: MainUiActionTypes,
    payload: Object
}

export function mainUiReducer(prevState: MainUiStateType, action: MainUiAction) {
    switch (action.type) {
        case MainUiActionTypes.contextMenuHidden: {
            return { ...prevState, isContextMenuVisible: false } as MainUiStateType
        }
        case MainUiActionTypes.contextMenuShown: {
            return { ...prevState, isContextMenuVisible: true } as MainUiStateType
        }
        default: {
            throw new Error("invalid MainUiAction dispatched");
        }
    }
}



//toDosReducer
export enum AllowedToDoActionTypes {
    added = "added",
    completed = "completed",
    marked = "marked",
    deleted = "deleted",
    initialized = "initialized",
    revalidated = "revalidated" // for a recently added todo with more precise data from the backend
}

//ActionType
type ToDosReducerAction = | { type: AllowedToDoActionTypes.initialized, payload: { toDos: Array<ToDoItemType> } }
    | { type: AllowedToDoActionTypes.added, payload: { toDoItem: Partial<ToDoItemType> } }
    | { type: AllowedToDoActionTypes.completed, payload: { _id: string } }
    | { type: AllowedToDoActionTypes.marked, payload: { _id: string } }
    | { type: AllowedToDoActionTypes.deleted, payload: { _id: string } }
    | { type: AllowedToDoActionTypes.revalidated, payload: { toDoItem: ToDoItemType } }


export function toDosReducer(prevState: ToDosStateType, action: ToDosReducerAction): ToDosStateType {
    switch (action.type) {
        case AllowedToDoActionTypes.initialized: {
            return { toDos: [...action.payload.toDos] }
        };
        case AllowedToDoActionTypes.added: {
            // logic for the addition of a new toDoItem
            return { toDos: [...prevState.toDos, (action.payload.toDoItem as ToDoItemType)] }
        };
        case AllowedToDoActionTypes.revalidated: {
            return {
                toDos: [...prevState.toDos.map((eachToDo, index) => {
                    return index == prevState.toDos.length - 1? action.payload.toDoItem : eachToDo
                })]

            }
        };
        case AllowedToDoActionTypes.completed: {
            // logic for the completion of a toDoItem
            return { toDos: [...prevState.toDos] }
        };
        case AllowedToDoActionTypes.marked: {
            // logic for the mark of a toDoItem
            return { toDos: [...prevState.toDos] }
        };
        case AllowedToDoActionTypes.deleted: {
            // logic for the deletion of a toDoItem
            return { toDos: [...prevState.toDos] }
        };
        default: { throw new Error("Wrong toDosReducer manipulation"); }
    }
}

export type {
    ToDosReducerAction
}