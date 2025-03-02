import axios from 'axios'
const action = async({request}) => {
  const data= await request.json()

    try {
       switch(request.method){
         case 'POST':
            const response =await  axios.post(
              "http://localhost:5000/api/v1/register", data    
            ).then(res=>res.data)
            return response;
         default:
           return "Invalid Method type"
       }
    } catch (error) {
       return error.response.data || "internal server error";
    }
}

export default action