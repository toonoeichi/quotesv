import * as qd from "../../static/quotes.json"

export async function GET() {
    const quotes = qd.quotes;
    const ri = Math.floor(Math.random() * quotes.length);
    const res = quotes[ri]
    const out = 
        {'quote': res.quote,
         'origin': res.origin
        }
    return new Response(JSON.stringify(out), {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}