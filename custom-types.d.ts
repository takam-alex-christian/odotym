

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

//lib props
interface GetToDosProps{
    start: number,
    number: number
}
