

export default async function addToDoItem(AddToDoProps: Partial<ToDoItemType>) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    

    const res = await fetch("/api", {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(AddToDoProps)
    })

    
    if(res.ok) return res.json()
}

