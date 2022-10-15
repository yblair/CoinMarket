import React,{useState} from 'react'


export default function Details({topMcap}) {
    
    const [details, setDetails] = useState(false)

    function abbreviateNumber(value) {
        let newValue = value; 
        const suffixes = ["", "K", "M", "B","T"]; 
        let suffixNum = 0; 

        while (newValue >= 1000) { 
          newValue /= 1000;
          suffixNum++;
        }     
        newValue = newValue.toPrecision(3);
        newValue += suffixes[suffixNum];
        return newValue;
      }

      const total = topMcap.map(e => e.quote.USD.market_cap).reduce((previousValue, currentValue) => previousValue + currentValue, 0 ) 
   

  return (
    <div className="md:w-3/4 lg:w-4/5 md:h-screen ">
        <button onClick={e => !details ? setDetails(true) : setDetails(false)} type="button" className="py-2 px-6 transition-all  bg-violet-200 hover:bg-violet-400  text-zinc-800 font-bold uppercase rounded-lg shadow-lg">See Details</button>
        {details ? (
                    <div className='flex justify-center '>
                   <table className=" text-zinc-800 shadow-lg text-xs  bg-zinc-100 mt-10 rounded-xl border-2">
                   <tbody>
                   
                   <tr >
                    <th>Mcap: ${abbreviateNumber(total)} </th>
                    <th>ROI</th>
                    <th>BTC dominance</th>
                    </tr>
                    
                     <tr className='bg-neutral-100 text-zinc-800 shadow-lg '>
                       
                       <th className='py-3'>#</th>
                       <th className='py-3'>ASSET</th>
                       <th className='py-3'>PRICE</th>
                       <th className='py-3'>24H CHANGE</th>
                       <th className='py-3'>MCAP</th>
                     </tr>
            { topMcap.map(e => {
                return(
              <tr className='hover:bg-neutral-200' key={e.name}>
                <th className='p-3 '>{e.cmc_rank}</th>
                <td className='font-bold p-3'>{e.name}</td>
                <td className='font-bold p-3'>${e.quote.USD.price.toFixed(2)}</td>
                {
                e.quote.USD.percent_change_24h.toFixed(2) >= 0.0 ?
                (<td className='text-green-700 p-3'>+{e.quote.USD.percent_change_24h.toFixed(2)}%</td>) :
                (<td className='text-rose-700 p-3'>{e.quote.USD.percent_change_24h.toFixed(2)}%</td>)

                     }
               
                <td className='font-bold p-3'>{abbreviateNumber(e.quote.USD.market_cap)}</td>
              </tr>
               ) })}
               </tbody>
             </table>
             </div>
        ) : null}
    </div>
  )
}
