"use client"
import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function BitcoinPriceHistory(){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if(!data) fetchData();
        return () => {
        };
      }, []);


    const fetchData = async () => {
        try {
          const response = await axios.post('/api/coin-api', {
            url: 'https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history',
            params: {
                period_id:'1MTH',
                time_start: '2020-01-01T00:00:00',
            },
          });
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      const parsedDataArray = data?.map((item: { time_period_start: string | number | Date; price_high: any; }) => {
        const timePeriodStart = new Date(item.time_period_start);
        const year = timePeriodStart.getFullYear();
        const month = timePeriodStart.getMonth() + 1;
        
        return {
            month,
            year,
          timePeriodStart,
          priceHigh: item.price_high
        };
      });
      const formatDateLabel = (dateString: string) => {
        const date = new Date(dateString);
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${month} ${year}`;
      };
      const renderLineChart = (
        <LineChart width={600} height={300} data={parsedDataArray}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="timePeriodStart" tickFormatter={formatDateLabel} />
          <YAxis dataKey={""}/>
          <Line type="monotone" dataKey="priceHigh" stroke="#8884d8" />
        </LineChart>
      );

      const renderChartOrLoading = () => {
        if (data === null) {
          return <p>Loading Chart...</p>;
        } else {
          return renderLineChart;
        }
      };

    return(
        <>
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <p className="text-2xl">Bitcoin Price History</p>
            {data ? renderChartOrLoading() : <span>loading...</span>}
            {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"onClick={fetchData}>Refresh Data</button>
      </div>
        </>);}