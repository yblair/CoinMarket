import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export default function Measurer() {

    ChartJS.register(ArcElement, Tooltip, Legend);
     const transactions = {
        abiertas: 1000,
        cerradas: 300,
        totales: 1300
    } 
    const openTransactions = [(transactions.abiertas * 100) / transactions.totales]
    const closeTransactions = [(transactions.cerradas * 100) / transactions.totales]
    const total = [...openTransactions, ...closeTransactions]


    const data = {
        labels: ['Open Trades', 'Closed Trades'],
        datasets: [
          {
            label: 'Trades',
            data: total,
            backgroundColor: [
                '#a78bfa',
                '#ddd6fe',

            ],
            borderColor: [
                'white'
             
         
            ],
            borderWidth: 2,
          },
        ],
      };
 

  return (

    <div className='flex justify-center  mb-5'>
        <Doughnut data={data} />
    </div>
  
  )
}
