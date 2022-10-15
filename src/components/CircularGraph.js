import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export default function CircularGraph({topMcap}) {

    const names = topMcap.map(e =>   e.name )
    const mcap = topMcap.map(e => e.quote.USD.market_cap)
    const total = mcap.reduce((previousValue, currentValue) => previousValue + currentValue, 0 )
    const percentage = mcap.map(e => Math.round((e * 100 ) / total) )  

    const data = {
    labels: names,
    datasets:[{
        data: percentage,
        backgroundColor: ['#a78bfa', '#d8b4fe', '#a5b4fc','#d9f99d', '#d4d4d8']
    }]
   };
 
   const options = {
    responsive: true
   }  
   ChartJS.register(ArcElement, Tooltip, Legend);


 return(
    <div className="md:w-1/2 lg:w-2/5 ">
       <Pie data={data} options={options} />
    </div>

 )

    
  
}
