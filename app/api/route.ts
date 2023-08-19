import { NextResponse } from 'next/server'
 
export async function GET(req:Request) {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const skip = searchParams.get("jello"); // Retrieves the value of the 'skip' parameter
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${skip}`, {
    headers: {
      'Content-Type': 'application/json'
    },
  })
  const data = await res.json()

  console.log(skip,"dffsdfsdf")
  return NextResponse.json({ data })
}