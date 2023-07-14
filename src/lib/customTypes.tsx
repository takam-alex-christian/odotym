

type MainUiStateType = {
    isContextMenuVisible: boolean,
}

enum MainUiActionTypes{
    contextMenuShown = "context_menu_shown",
    contextMenuHidden = "context_menu_hidden"
}


export type {
    MainUiStateType
}

export {
    MainUiActionTypes
}