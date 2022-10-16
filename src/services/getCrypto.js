import axios from 'axios';



 const getCrypto = async() => {
  try{  const response = await axios.get('https://boiling-earth-02055.herokuapp.com/')
      return response.data
  } 
 catch(err) {
  return err
}
  }

 


 export default getCrypto
