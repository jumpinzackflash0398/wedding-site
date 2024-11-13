// pages/api/submit.ts
import pool from '../../db'

export async function POST(req: Request) {
    const data = await req.json();
    console.log("body: " + JSON.stringify(data))
    try {
        await pool.query('INSERT INTO "submissions" (Data) VALUES ($1)', [data])
        return new Response('', {
            status: 200,
            headers: {
                'content-type': 'application/json'
            }
        })
    } catch (e) {
        console.error("Error: " + e)
        return new Response('', {
            status: 500,
            headers: {
                'content-type': 'application/json'
            }
        })
    }
}