// pages/api/submit.ts
import pool from '../../db'

export async function POST(req: Request) {
    type Rsvp = {
        name: string;
        email: string;
        rsvpStatus: string;
        plusOne: string;
        message: string;
    }
    const rsvp:Rsvp = await req.json();
    try {
        await pool.query("INSERT INTO formdata (name, email, rsvpstatus, plusone, message) VALUES ($1, $2, $3, $4, $5)", [rsvp.name, rsvp.email, rsvp.rsvpStatus, rsvp.plusOne, rsvp.message])
        return new Response('Thank You', {
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