"use client"
import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';

export default function FinancialNews(){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if(!data) fetchData();
        return () => {
        };
      }, []);

    const fetchData = async () => {
        try {
          const response = await axios.post('/api/proxy', {
            url: 'https://ms-finance.p.rapidapi.com/articles/list',
            params: {
                performanceId: '0P0000OQN8'
            },
            header:{
                'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
            }
          });
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };


    return(
        <>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md m-10 m-w-[50%] basis-1/4">
            <h1 className="text-2xl">Tesla News Ticker:</h1>
            {data && data.slice(0, 5).map((article: any, index: number)=>(
                <div className="p-1 m-2" key={index}>
                <p className="text-l font-bold">{article.Title}</p>
                <p>{article.Authors[0].name}</p>
                <p>{new Date(parseInt(article.PublishDateUTC)).toLocaleDateString()}</p>
                <p>{article.Content.Deck}</p>
                </div>
            ))}
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={fetchData}>Refresh Data</button>
        </div>
        </>
    )
}