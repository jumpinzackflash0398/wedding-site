// pages/api/submit.ts
export async function POST(req: Request) {
    const data = await req.json();
    console.log("body: " + JSON.stringify(data))
    return new Response('', {
        status: 200,
        headers: {
            'content-type': 'application/json'
        }
    })
}
