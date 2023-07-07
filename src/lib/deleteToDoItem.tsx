

export default async function deleteToDoItem(Props: Partial<ToDoItemType>){
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    
    const res = await fetch("/api", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({...Props, action: "delete"})
    });

    if(res.ok) return res.json()

}