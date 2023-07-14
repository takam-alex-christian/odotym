

export default async function getToDos(Props: GetToDosProps) { //the user component keeps tracks of start and number

    const res = await fetch(`/api?start=${Props.start}&number=${Props.number}`, {
        method: 'GET'
    })

    if (res.ok) return res.json()

}


// avoid typos in writing these literals
enum promiseStatus {
    pending = "pending",
    fulfilled = "fulfilled",
    rejected = "rejected"
}


export function newGetToDos(Props: { start: number, limit:number}) { 
    let status: promiseStatus = promiseStatus.pending, result: any

    //start and limit are 0 and 4 respectively by default
    let fetchPromise = fetch(`http://localhost:3000/api?start=${Props.start}&number=${Props.limit}`, { method: 'GET' })
        .then(res => res.json())
        .then(fetchedData => {
            //fulfilled

            status = promiseStatus.fulfilled
            result = fetchedData
        })
        .catch((err) => {
            //rejected

            status = promiseStatus.rejected
            result = err
        });

    return ()=>{
        if(status == promiseStatus.pending) throw fetchPromise
        else if (status == promiseStatus.rejected) throw result
        else if (status == promiseStatus.fulfilled) return result
    };
}