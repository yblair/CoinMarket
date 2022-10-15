import axios from 'axios';

const url ='https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?'
const apiKey ='CMC_PRO_API_KEY=e5baeb44-26cd-4837-b5be-73dfc2913db3'


const getCrypto = async() => {
  const response = await axios(`${url}${apiKey}`) 
   const data = response.data.data.slice(0 , 5)
   return data
 }

 export default getCrypto