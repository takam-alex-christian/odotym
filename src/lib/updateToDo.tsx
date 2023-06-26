

async function updateToDo(UpdateToDoProps: Partial<ToDoItemType>){


    const headers = new Headers();
    headers.append("Content-Type", "application/json")


    if(typeof(UpdateToDoProps._id) !== "undefined"){
        //then we push the request
        let res = await fetch("/api",{
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(UpdateToDoProps)
        })

        if(res.ok) return res.json()
    }
}

export {updateToDo}