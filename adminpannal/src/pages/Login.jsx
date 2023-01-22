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

function Login() {
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const payload = {
    email,
    password,
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
      axios
      .post(`https://wandering-plum-parka.cyclic.app/users/login`, payload)
      .then(function (response) {
        // console.log(response.data.token);
        if(response.data.token){
          localStorage.setItem("token",JSON.stringify(response.data.token))
        }else{
          localStorage.setItem("token",JSON.stringify("wrong credentials"))
        }
      })
      .catch(function (error) {
        console.log(error);
      });
   
  };

  return (
    <div>
      
      <Box display="flex" justifyContent="flex-end" mr="20px">
        <Box width={{ base: "xs", sm: "xs", md: "xl", lg: "lg" }}>
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

            <Box>
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
            </Box>
          </VStack>
        </Box>
      </Box>

      {}
    </div>
  );
}

export default Login;
