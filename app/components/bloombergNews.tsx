"use client"
import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BloombergNews(){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if(!data) fetchData();
        return () => {
        };
      }, []);

    const fetchData = async () => {
        try {
          const response = await axios.post('/api/proxy', {
            url: 'https://bb-finance.p.rapidapi.com/news/list',
            params: {
                id: 'markets'
            },
            header:{
                'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
            }
          });
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const filterArrayList = (data: any) => {
        const stories = data.modules
          ?.flatMap((module: any) => module.stories)
          .filter((story: any, index: number, self: any[]) => {
            return index === self.findIndex((s) => s.id === story.id);
          })
          .slice(0, 10);
        return (
          stories.map((story: any) => (
          <div className="m-2" key={story.id}>
            <h2 className="text-xl font-bold">{story.title}</h2>
            <p>{story.summary}</p>
            <p>Published: {new Date(story.published*1000).toLocaleDateString()}</p>
            <p>By: {story.byline}</p>
            <Link className="text-blue-500 text-sm"href={story.longURL}>Click for More.</Link>
          </div>
          )));};
      

    return(
        <>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md m-10 m-w-[50%] basis-1/2">
            <h1 className="text-3xl font-extrabold">Bloomberg News Ticker:</h1>
            <div className="p-2">
              {data ? (filterArrayList(data)):(<span>Loading...</span>)}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={fetchData}>Refresh Data</button>
        </div>
        </>
    )
}