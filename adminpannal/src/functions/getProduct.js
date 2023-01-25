import axios from "axios";

const Getdata = async ({page,limit}) => {
 
   return  await axios.get(
       `https://wandering-plum-parka.cyclic.app/products?_page=${page}&_limit=${limit}`
     ) 
     
     
   };
   
   export default Getdata;