import axios from 'axios';

const url ='/v1/cryptocurrency/listings/latest'
/*  const apiKey ='?CMC_PRO_API_KEY=e5baeb44-26cd-4837-b5be-73dfc2913db3' */


 const getCrypto = async() => {
  try{  const response = await axios.get(url, {
    headers: {
      'X-CMC_PRO_API_KEY': 'e5baeb44-26cd-4837-b5be-73dfc2913db3',
    },
  }) 
  if(response){
    const data = response.data.data.slice(0 , 5)
    return data
  }
} catch(err) {
  return err
}
  }

  
 

 /* let response = null;

 const a = new Promise(async (resolve, reject) => {
   try {
     response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
       headers: {
         'X-CMC_PRO_API_KEY': 'e5baeb44-26cd-4837-b5be-73dfc2913db3',
       },
     });
   } catch(ex) {
     response = null;
     // error
     console.log(ex);
     reject(ex);
   }
   if (response) {
     // success
     const json = response.data;
     console.log(json);
     resolve(json);
   }
 });

 const getCrypto = async() =>{
  await a
 } */


 export default getCrypto