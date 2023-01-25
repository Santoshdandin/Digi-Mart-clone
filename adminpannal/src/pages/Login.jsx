import React from "react";
import { useState } from "react";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";

function Login() {
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const navigate=useNavigate()
  const payload = {
    email,
    password,
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
      axios
      .post(`https://wandering-plum-parka.cyclic.app/users/login`, payload)
      .then(function (res) {
        // console.log(response.data.token);
        
        if(res.data.msg==="Login Successfull"){
          localStorage.setItem("Token",JSON.stringify(true));
          toast({
            title:"Login Successfull",
            description:"You are redirected to home page",
            status:"success",
            position:"top",
            duration:5000,
            isClosable:true,
          })

          navigate("/home")
        } else if(res.data.msg==="wrong credential"){
          toast({
            title:"Login failed",
            description:"Wrong credentials",
            status:"error",
            position:"top",
            duration:5000,
            isClosable:true,
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
   
  };

  return (
    <div>
      
      <Box display="flex" justifyContent="flex-end" mr="20px">
        <Box width={{ base: "xs", sm: "xs", md: "xl", lg: "lg" }} bg="white">
          <VStack
            width="full"
            boxShadow="xl"
            py={{ base: 4, sm: 4, md: 4, lg: 6 }}
            my={{ base: 4, sm: 4, md: 8, lg: 10 }}
            px={{ base: 1, sm: 1, md: 4, lg: 6 }}
          >
            <FormControl>
              <FormLabel>Email adress</FormLabel>
              <Input
                name="email"
                type="email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
              />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                value={password}
                onInput={(e) => setpassword(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <Center>
                <Button
                  w="full"
                  _hover={{
                    bg: "red.600",
                  }}
                  variant="outline"
                  color="white"
                  bg="rgb(228, 37, 41)"
                  mt={4}
                  onClick={handleSubmit}
                >
                  <Link href="/" textDecoration="none">
                    PROCEED
                  </Link>
                </Button>
              </Center>
            </FormControl>

            {/* <Box>
              Don't have account?{" "}
              <Link
                href="/signup"
                textDecoration="underline"
                color="blue"
                fontSize="16px"
                fontWeight="semibold"
              >
                Register
              </Link>{" "}
            </Box> */}
          </VStack>
        </Box>
      </Box>

      {}
    </div>
  );
}

export default Login;
