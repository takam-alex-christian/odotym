

export default async function getToDos(Props: GetToDosProps) { //the user component keeps tracks of start and number

    const res = await fetch(`/api?start=${Props.start}&number=${Props.number}`, {
        method: 'GET'
    })

    if(res.ok) return res.json()
    
}