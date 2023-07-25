
// avoid typos in writing these literals
enum promiseStatus {
    pending = "pending",
    fulfilled = "fulfilled",
    rejected = "rejected"
}

let status: promiseStatus = promiseStatus.pending, result: any

export function newGetToDos(Props: { start: number, limit:number}) { 

    //start and limit are 0 and 4 respectively by default
    let fetchPromise = fetch(`http://localhost:3000/api?start=${Props.start}&number=${Props.limit}`, { method: 'GET', cache: "no-store"})// avoiding cash partially resolves the issue
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