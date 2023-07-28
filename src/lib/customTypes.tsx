

type MainUiStateType = {
    isContextMenuVisible: boolean,
}

enum MainUiActionTypes{
    contextMenuShown = "context_menu_shown",
    contextMenuHidden = "context_menu_hidden"
}

//types toDoState
type ToDosStateType = {
    toDos: Array<ToDoItemType>
}



export type {
    MainUiStateType,
    ToDosStateType
}

export{
    MainUiActionTypes
}