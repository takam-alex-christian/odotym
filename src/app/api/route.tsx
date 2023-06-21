
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


    return NextResponse.json(reqBody)
}

