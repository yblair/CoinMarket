import axios from 'axios';



 const getCrypto = async() => {
  try{  const response = await axios.get('http://localhost:3001/')
      return response.data
  } 
 catch(err) {
  return err
}
  }

 


 export default getCrypto