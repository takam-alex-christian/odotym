

// TodoItemType
type ToDoItemType = {
    _id: string,
    value: string,
    completed: boolean,
    creationDate: Date,
    lastModified: Date,
    important: boolean,
    parentFolder: string
}

//this is essentially used in passing the onContextMenu handler down to the caller todoItem
type ContextMenuCallerDataType = {
    _id: string,
    posX: number,
    posY: number
}

//lib props
interface GetToDosProps{
    start: number,
    number: number
}

//