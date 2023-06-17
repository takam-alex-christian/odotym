
import { NextRequest, NextResponse } from "next/server"

export  async function POST(req: NextRequest){
    console.log(req.json().then((res)=>{console.log(res)}))
    return NextResponse.json({success: true, message: "the world is still alife"})
}