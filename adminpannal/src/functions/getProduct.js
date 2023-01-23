import axios from "axios";

const Getdata = async () => {
   return  await axios.get(
       `https://wandering-plum-parka.cyclic.app/products`
     ) .then(function (response) {
       
     })
     .catch(function (error) {
       console.log(error);
     });
     
     
   };
   
   export default Getdata;