
import { NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest) {

    const { searchParams } = new URL(request.url)

    const getToDos = await fetch(`http://localhost:3001/odotym/todo?start=${searchParams.get('start')}&number=${searchParams.get('number')}`, {
        method: 'GET'
    })

    return NextResponse.json(await getToDos.json())
}


export async function POST(request: NextRequest) {
    const reqBody = await request.json();

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    if (reqBody.action == "delete") {


        let backendResponse = await fetch("http://localhost:3001/odotym/todo", {
            headers: headers,
            method: "DELETE",
            body: JSON.stringify(reqBody)
        })

        return NextResponse.json(await backendResponse.json())
    } else {

        let backendResponse = await fetch("http://localhost:3001/odotym/todo", {
            headers: headers,
            method: "POST",
            body: JSON.stringify(reqBody)
        })
        return NextResponse.json(await backendResponse.json())
    }


}

export async function PATCH(request: NextRequest) {

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const patchData = await request.json()


    const backendReq = await fetch("http://localhost:3001/odotym/todo",
        {
            method: "PATCH",
            headers: headers,
            body: JSON.stringify(patchData)
        })


    return NextResponse.json(await backendReq.json())
}
