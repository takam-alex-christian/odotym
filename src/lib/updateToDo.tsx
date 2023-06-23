

async function updateToDo(UpdateToDoProps: Partial<ToDoItemType>){
    
    const urlencoded = new URLSearchParams();
    var res;

    if(typeof(UpdateToDoProps._id) !== "undefined"){
        // now we append all entries to patch body
        Object.keys(UpdateToDoProps).forEach(key => {

            //use key to select the corresponding value and append it to urlencoded searchparams
            urlencoded.append(key, UpdateToDoProps[key as keyof ToDoItemType] as string)

        });

        //then we push the request
        res = await fetch("/api",{
            method: "PATCH",
            body: urlencoded
        })

        if(res.ok) return res.json()
    }
}

export {updateToDo}