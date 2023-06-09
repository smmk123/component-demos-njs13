/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import Image from "next/image";

export default function BitcoinPrices(){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if(!data) fetchData();
        return () => {
        };
      }, []);


    const fetchData = async () => {
        try {
          const response = await axios.post('/api/proxy', {
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {
                from_currency: 'BTC',
                function: 'CURRENCY_EXCHANGE_RATE',
                to_currency: 'USD'
            },
            headers: {
              'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
            }
          });
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    return(
        <>
            
    <div className="bg-gray-100 rounded-lg p-6 shadow-md min-w-20 m-10">
      <Image src="/images/bitcoin.png" width="200" height="100" alt="bitcoin"/>
    {data ? (
                    <><p>
                    <span className="font-semibold text-2xl text-blue-900">Exchange Rate:
                    {parseFloat(data['Realtime Currency Exchange Rate']['5. Exchange Rate']).toFixed(2)} 
                    ({data['Realtime Currency Exchange Rate']['3. To_Currency Code']}) 
                    </span>
                </p>
                    <p>
                        <span className="text-sm">From Currency:
                        {data['Realtime Currency Exchange Rate']['1. From_Currency Code']} 
                        ({data['Realtime Currency Exchange Rate']['1. From_Currency Code']})
                        </span> 
                    </p><p>
                            <span className="text-sm">To Currency: 
                            {data['Realtime Currency Exchange Rate']['4. To_Currency Name']} 
                            ({data['Realtime Currency Exchange Rate']['3. To_Currency Code']})
                            </span>
                        </p><p>
                            <span className="text-xs">Last Refreshed: 
                            {data['Realtime Currency Exchange Rate']['6. Last Refreshed']} 
                            {data['Realtime Currency Exchange Rate']['7. Time Zone']}
                            </span>
                        </p>
                        </>
                    ) :  (<p>loading...</p>)}

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={fetchData}>Refresh Data</button>
                </div>
      </>
        
    );
}