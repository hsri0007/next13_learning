// 'use client'
// import { useRouter } from 'next/router'


async function getData(url:number) {
  // const router = useRouter()

  const res = await fetch(`http://localhost:3000/api?jello=${url}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home({ params }:{params:{slug:number}}) {
  const data = await getData(params?.slug);
console.log(params)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
asasasas
{JSON.stringify(data)}
    </main>
  )
}
