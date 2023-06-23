
import { NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest){

    const {searchParams} = new URL(request.url)
    
    const getToDos = await fetch(`http://localhost:3001/odotym/todo?start=${searchParams.get('start')}&number=${searchParams.get('number')}`, {
        method: 'GET'
    })

    return NextResponse.json(await getToDos.json())
}


export async function POST(request: NextRequest) {
    const reqBody = await request.json();
    
    const backendPostBody = new URLSearchParams();

    const headers = new Headers();
    headers.append("Content-Type", "application/x-www-form-urlencoded");

    
    Object.keys(reqBody).forEach((key)=>{
        backendPostBody.append(key, reqBody[key])
    })
    
    const backendResponse = await fetch("http://localhost:3001/odotym/todo",{
        headers: headers,
        method: "POST",
        body: backendPostBody
    } )
    
    return NextResponse.json(await backendResponse.json())
}

