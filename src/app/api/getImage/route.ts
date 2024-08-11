import axios from "axios";
import { config } from "dotenv";
import { NextResponse } from "next/server";
config();

interface ResultDataType {
    page : number; 
    per_page : number;
    total_results : number;
    photos : object[];
}

export async function GET(request: Request): Promise<Response> {
    const api_url = process.env.BASE_URL;
    const api_key = process.env.API_KEY;
    if (!api_url || !api_key) {
        return new Response('Missing API configuration', { status: 500 });
    }

    const urlParams = new URL(request.url).searchParams;
    const query = urlParams.get('query') || "trending";
    const page = parseInt(urlParams.get('page') || "1", 10) || 1;
    const per_page = parseInt(urlParams.get('per_page') || "15", 10) || 9;
    try {
        const result: ResultDataType = await axios.get(`${api_url}/search/`, {
            headers: {
                Authorization: api_key,
            },
            params: {
                query,
                page,
                per_page,
            },
        }).then(res => res.data);
        return NextResponse.json({data: result.photos, totalPages: Math.ceil(result.total_results/result.per_page)}, {status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "Error Fetching Images", data: []}, {status: 500});
    }
}
