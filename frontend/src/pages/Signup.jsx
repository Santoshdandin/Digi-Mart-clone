import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Box,
  Input,
  VStack, 
  Center,
  Link,
  useToast,
} from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";

function Signup() {
  const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [mobile,setMobile] = useState("")
  const toast = useToast();
  const navigate = useNavigate()


const handleSubmit = (e) =>{
  e.preventDefault();

  const payload={
    name,
    mobile,
    email,
    password,
    
}

if(payload.mobile.length<10){
  toast({
    title:"Invalid mobile number",
    description:"mobile number should be 10digits",
    status:"error",
    position:"top",
    duration:5000,
    isClosable:true,
  })
} else {
  fetch("https://wandering-plum-parka.cyclic.app/users/register",{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json())
        .then(res=>{
          console.log(res)
        if(res.msg==="User already exists"){
          toast({
            title:"Signup failed",
            description:"User already exist, Please login",
            status:"error",
            position:"top",
            duration:5000,
            isClosable:true,
          })

          navigate("/login")
        } else if(res.msg==="Registered"){
          toast({
            title:"Signup successfull",
            description:"Account has been created, Please login",
            status:"success",
            position:"top",
            duration:5000,
            isClosable:true,
          })

          navigate("/login")
        } else {
          toast({
            title:"Signup failed",
            description:"Something went wrong",
            status:"error",
            position:"top",
            duration:5000,
            isClosable:true,
          })
        }
        })
        .catch(err=>console.log(err))

}



  
}

  return (


<div>

  
<Box display="flex" justifyContent="flex-end" mr="20px">



    <Box width={{base:"xs", sm:"xs", md:"xl", lg:"lg"}} >
      
    <form onSubmit={handleSubmit}>

    <VStack  width="full" boxShadow="xl"  py={{base:4, sm:4, md:4, lg:6 }} my={{base:4, sm:4, md:8, lg:10 }} px={{base:1, sm:1, md:4, lg:6 }}>

<FormControl isRequired>
    <FormLabel>Name</FormLabel>
    <Input name="name" type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}  />
    

  </FormControl>

  <FormControl isRequired>
    <FormLabel>Mobile</FormLabel>
    <Input name="mobile" type="number" placeholder="Enter Mobile number" value={mobile} onChange={(e)=>setMobile(e.target.value)}  />
    

  </FormControl>

  <FormControl isRequired>
    <FormLabel>Email adress</FormLabel>
    <Input name="email" type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}  />
    <FormHelperText>We'll never share your email.</FormHelperText>

  </FormControl>

  <FormControl isRequired >
    <FormLabel>Password</FormLabel>
    <Input name="password" type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}   />
    
    
  </FormControl>

  <FormControl>
    <Center>
      <Button 

 w="full"  _hover={{
              bg: "red.600",
            }} variant="outline" color="white" bg="rgb(228, 37, 41)" mt={4} type="submit" ><Link textDecoration="none" >Register</Link></Button>
    </Center>

  </FormControl>

  <Box>already have account? <Link href="/login" textDecoration="underline" color="blue" fontSize="16px" fontWeight="semibold">Signin</Link> </Box>

</VStack>

      </form>

    </Box>
    </Box>

    {
      
    }
    
    </div>
    );
}

export default Signup