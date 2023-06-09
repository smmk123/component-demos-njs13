import axios from 'axios';
import { NextResponse } from 'next/server';

const API_KEY = process.env.RAPIDAPI_KEY;



export async function POST(req: Request) {
    const { url, method = 'GET', params = {}, headers = {} } =await req.json()
  try {
    const response = await axios.request({
      url,
      method,
      params,
      headers: {
         'X-RapidAPI-Key': API_KEY,
         ...headers
      },
    });
    axios.interceptors.request.use(function (config) {
        console.log('Request:', config);
        return config;
      }, function (error) {
        return Promise.reject(error);
      });
    return NextResponse.json(response.data);
  } catch (error:any) {
    return NextResponse.json({message:error.message})
  }
}