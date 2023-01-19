import React from "react";
import {Link} from "react-router-dom"

import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Img,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
  Center,
  Square,
  Portal,
  HStack,
  List,
  ListItem
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";

import {
  FaAngleDown,
  FaShoppingCart,
  FaUser,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdOutlineMyLocation } from "react-icons/md";
import Logo_21 from "../photo/Logo_21.png"

function Navbar() {
  return (
    <div>
      <Box>
        <Flex
          gap="2"
          bg="#e42529"
          p="8px"
          pl="48px"
          pr="16px"
          justifyContent="flex-end"
          w="full"
          fontSize="14px"
          fontWeight="500"
         
        >
          <Box display="flex" color="white">
            <Box
              Box
              display="flex"
              gap="2"
              alignItems="baseline"
              borderRight="1px"
              px="8px"
            >
              <FaMapMarkerAlt />
              <Link color="white">Find a Store</Link>
            </Box>

            <Box
              Box
              display="flex"
              gap="2"
              alignItems="baseline"
              borderRight="1px"
              px="8px"
            >
              <Link color="white">Buying Guides</Link>
            </Box>

            <Box
              display="flex"
              gap="2"
              alignItems="baseline"
              
              px="6px"
            >
              <Link color="white">Contact us</Link>
            </Box>
          </Box>
        </Flex>
<Box>

<Flex
          alignItems="center"
          gap="2"
          bg="#e42529"
          p="8px"
        //   pl="48px"
          pr="16px"
          justifyContent="space-between"
          fontSize="14px"
          fontWeight="500"
          
        >
          <Box  >
            <Link to="/">
              <Img
                // src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
                src={Logo_21}
                w="200px"
                h="60px"
                // maxW="100%"
                // verticalAlign="baseline"
              />
            </Link>
          </Box>

          <Stack spacing={4}>
            <InputGroup w="500px">
              <Input
                bg="white"
                placeholder="Find your favorite products"
                borderRadius="80px"
              />
              <InputRightElement children={<SearchIcon color="gray.500" />} />
            </InputGroup>
          </Stack>

          <Box display="flex" color="white">
            <Box
              Box
              display="flex"
              gap="2"
              alignItems="baseline"
              borderRight="1px"
              px="8px"
            >
              <FaMapMarkerAlt />

              <Popover>
                <PopoverTrigger>
                  <Link color="white">Enter Your PIN</Link>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent w="400px">
                    <PopoverArrow />
                    <PopoverHeader bg="#2d73ed" color="white">
                      Choose your delivery location
                    </PopoverHeader>
                    <PopoverCloseButton color="white" fontWeight="bold" />
                    <PopoverBody>
                      <Box display="flex" alignItems="baseline" gap="8px">
                        <Input
                          w="full"
                          placeholder="Enter Your Delivery PIN Code"
                          type="number"
                        />
                        <Button colorScheme="blue">Apply</Button>
                      </Box>
                    </PopoverBody>
                    <PopoverFooter color="#2d73ed">
                      <Icon as={MdOutlineMyLocation} />
                      Detect My Location
                    </PopoverFooter>
                  </PopoverContent>
                </Portal>
              </Popover>
            </Box>

            <Box
              Box
              display="flex"
              gap="2"
              alignItems="baseline"
              borderRight="1px"
              px="8px"
            >
              <FaShoppingCart />
              <Link to="/cart" color="white">Cart</Link>
            </Box>

            <Box
              display="flex"
              gap="2"
              alignItems="baseline"
              
              px="6px"
            >
              <FaUser />
              <Link to="/login" color="white">Log in</Link>
            </Box>
          </Box>
        </Flex>

        </Box>
       

        
       </Box>
     </div>
   );
 }
 
 export default Navbar;