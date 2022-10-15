import { useEffect, useState } from 'react';
import getCrypto from './services/getCrypto';
import CircularGraph from './components/CircularGraph';
import Details from './components/Details';
import Measurer from './components/Measurer';


function App() {
  const [topMcap, setTopMcap] = useState([])

  const data = async() =>{
    const getInfo = await getCrypto()
    setTopMcap(getInfo)
  }

  useEffect(()=>{
   data()
  }, [])


  return (
    <div>
     
    <div className='mt-8 sm:flex'  >
      <CircularGraph topMcap={topMcap} />
      <Details topMcap={topMcap}/>
    </div>
      <div className='mt-8 flex justify-center'>
      <Measurer/>
      </div>
    </div>
  );
}

export default App;
