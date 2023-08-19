
async function getData(url:number) {

  const res = await fetch(`${process.env.URL}/api?jello=${url}`)

 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home({ params }:{params:{slug:number}}) {
  const data = await getData(params?.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
{JSON.stringify(data)}
    </main>
  )
}
