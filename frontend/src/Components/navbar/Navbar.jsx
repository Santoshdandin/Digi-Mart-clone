
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
import Bestphn from "../photo/Bestphn.jpg"
import tcl from "../photo/tcl.jpg"
import earphn from "../photo/earphn.jpg"
import homeapp from "../photo/homeapp.jpg"
import com from "../photo/com.jpg"
import camera from "../photo/camera.jpg"
import pc from "../photo/pc.jpg"
import kitchen from "../photo/kitchen.jpg"
import rd from "../photo/rd.jpg"

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

        
        <Flex display="flex"  bg="#003380 " px="27px" justifyContent="space-between">
          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
               MOBILES & TABLETS 
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'  _hover={{ color: 'red' }}><Link to="/products">Smartphones</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h5' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>SMARTWATCHES</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Accessories</Link></Heading>
                      <List spacing="8px"  >
                      <ListItem  _hover={{ color: 'black' }}> <Link>Tablet Accessories</Link></ListItem>
                      <ListItem  _hover={{ color: 'black' }}> <Link>Mobile Accessories</Link></ListItem>
                      <ListItem   _hover={{ color: 'black' }}><Link>Mobile Grips & Stands</Link></ListItem>
                      <ListItem  _hover={{ color: 'black' }}><Link>Car Mobile Holders</Link></ListItem>
                      <ListItem  _hover={{ color: 'black' }}> <Link>Memory Cards</Link></ListItem>
                      <ListItem  _hover={{ color: 'black' }}><Link>Cables & Cords</Link></ListItem>
                      <ListItem  _hover={{ color: 'black' }}> <Link>Chargers & Adapters</Link></ListItem>
                      </List>

                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Headphones & Headsets</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Tablets & eReaders</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Every day use Tablets below 15000</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Premium Tablets, Above 15001</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Power Banks</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>eSlates</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>All Learning Robots</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img 
                    src={Bestphn}
                    w="300px"
                    h="300px"
                    alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                TELEVISIONS
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                     
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Televisions</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Smart TVs</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>32 Inch TVs</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>43 Inch TVs TVs</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>55 Inch TVs TVs</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Android TVs</Link></ListItem>

                      </List>

                      </Box>

                    </List>

                    <List spacing="18px">
                      
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Gaming</Link></Heading>
                      <List spacing="8px" >
                        <ListItem  _hover={{ color: 'black' }}><Link>Gaming Consoles</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Gaming Accessories</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Gaming Titles</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Projectorss</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Steaming Devices</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Reconnect Disney | Marvel Audio Collection </Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>TV & Audio Accessories</Link></Heading>
                      <List spacing="8px">
                        <ListItem  _hover={{ color: 'black' }}><Link>Virtual Reality Headsets</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Stabilizers & Surge Protectors</Link></ListItem> 
                        
                      </List>

                      </Box>
                      
                      
                    </List>

                  <img src={tcl} w="300px" alt="tv"/>  

                  
                  </Flex>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                AUDIO
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Headphones & Headsets</Link></Heading>
                      <List spacing="8px" >
                        <ListItem  _hover={{ color: 'black' }}><Link>True Wireless</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Bluetooth Neckbands</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}> <Link>Wired Earphones</Link> </ListItem>
                        <ListItem  _hover={{ color: 'black' }}> <Link>On Ear Headphones</Link> </ListItem>
                        <ListItem  _hover={{ color: 'black' }}> <Link>Noise Cancelling Headphones</Link> </ListItem>
                      </List>

                      </Box>

                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' pb='8px' _hover={{ color: 'red' }}><Link>Bluetooth & WiFi Speakers</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Bluetooth Speakers</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Smart Speakers</Link></ListItem> 
                      </List>
                      </Box>
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>TV Speakers & Soundbars</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Soundbars</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Home Theatre Systems</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Party Speakers</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Multimedia</Link></ListItem> 
                      </List>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Musical Instruments</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Guitars and Ukuleles</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Microphones</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Musical Keyboards</Link></ListItem>
                      
                      </List>
                      </Box>
                      
                      
                    </List>

                    <img src={earphn} alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                HOME APPLIANCES
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                     
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Air Conditioners</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Split Air Conditioners</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Window Air Conditioners</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}> <Link>Smart Air Conditioners</Link> </ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Energy Efficient Air Conditioners</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>1 ton Air Conditioners</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}> <Link>1.5 ton Air Conditioners</Link> </ListItem>
                        <ListItem  _hover={{ color: 'black' }}> <Link>5 star Air Conditioners</Link> </ListItem>

                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Air Coolers</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Air Purifiers</Link></Heading>
                      </Box> 
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Washing Machines</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Fully Automatic Front Load</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Fully Automatic Top Load</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Semi-Automatic Top Load</Link></ListItem>
                      </List>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Refrigerators</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Single Door</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Double Door</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Side by Side Refrigerators</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Convertible</Link></ListItem> 
                      </List>

                      </Box>

                    
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Vacuum Cleaners</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Robotic Vacuum Cleaners</Link></ListItem>
                        
                      </List>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Dishwashers</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Fans</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Cloth Dryers</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Geysers</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Room Heaters</Link></Heading>
                      </Box>

                      
                      
                    </List>

                    <img 
                    src={homeapp}
                    alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>


          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                COMPUTERS
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                     
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Laptops</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Basic Use Laptops</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Student Laptops</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}> <Link>Thin and Light Laptops</Link> </ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Multi-Tasking Laptops</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Gaming Laptops</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}> <Link>Content Creator Laptops</Link> </ListItem>


                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Computers Monitors</Link></Heading>
                    </Box>
                      
                    <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Desktops & All-in-Ones</Link></Heading>
                    </Box>
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Blutooth & WiFi Speakers</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Internet Connectivity Devices</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Routers</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>WiFi Range Extenders</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Wireless USB Adapters</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Printers & Inks</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>printers</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Toners & Ink Cartridges</Link></ListItem> 
                        
                      </List>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Data Stroage Devices</Link></Heading>
                      <List spacing="8px" >
                        <ListItem  _hover={{ color: 'black' }}><Link>Memory Cards</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Pen Drives & OTG Drives</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Hard Disks & SSD</Link></ListItem> 
                      </List>
                      </Box>  
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Computer Acessories</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Upto 72% Off,Only on RelianceDigital.in</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Computer Networking Cables</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Laptop Chargers & Adaptor</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Laptop Batteries</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Hubs & Docks</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Laptop Bags & Sleeves</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Laptop Cooling Pad</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Laptop Screen Protectors</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Laptop Tables & Stands</Link></ListItem> 
                      </List>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Input Devices</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Keyboards</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Computer Mouse</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Stylus Pens</Link></ListItem>
                      </List>
                    </Box>

                    </List>

                    <img 
                    src={com} 
                    alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                CAMERAS
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>DSLR Cameras</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Wearable Cameras</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Mirrorless Cameras</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Point & Shoot Cameras</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Action Cameras</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Photo Stroage Devices</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Memory Cards</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Pen Drives</Link></ListItem> 
                      
                      </List>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Binoculars</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Camera Lens</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Digital Camera Accessories</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Camera Batteries & Chargrs</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Camera Bags & Cases</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Tripods & Monopods</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Action Camera Accessories</Link></ListItem> 
                      </List>

                      </Box>

                    
                    </List>

                   

                    <img src={camera}  alt="cam" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                KITCHEN APPLIANCES
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Microwave Ovens</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Water Purifiers</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Friuts and Vegetable Cleaner</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Oven Toasters Grillers(OTG)</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Cookwares</Link></Heading>
                      </Box>

                    
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Juice Mixer Grinders</Link></Heading>
                      <List spacing="8px"  >
                      <ListItem  _hover={{ color: 'black' }}> <Link>Juicers</Link></ListItem>
                      <ListItem  _hover={{ color: 'black' }}> <Link>Hand Mixers</Link></ListItem>
                      <ListItem  _hover={{ color: 'black' }}><Link>Mixer Grinders</Link></ListItem>
                      <ListItem  _hover={{ color: 'black' }}><Link>Choppers & Slicers</Link></ListItem>
                      </List>

                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Induction Cookers</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Food Processors</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Blenders</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Kitchen Hobs & Gas Stoves</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Kitchen Chimneys</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Rice Cookers</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Sandwitch Makers</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Popup Toasters</Link></Heading>
                      </Box>
                      
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Coffee Makers & Grinders</Link></Heading>
                      </Box>
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Reconnect Disney|Marvel Kitchen Collection</Link></Heading>
                      </Box>

                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Air Fryers</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Specially Appliances</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Electric Kettles</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Water Dispensers</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Wet Grinders</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Flour Mills</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img src={kitchen} alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                PERSONAL CARE
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Shavers & Trimmers</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Epilators</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Hair Dryers & Styles</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Weighing Scales</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Irons</Link></Heading>
                      </Box>

                     
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Reconnect Disney|Marvel Grooming Collection</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Hygiene & Personal Care</Link></Heading>
                      <List spacing="8px" >
                        <ListItem  _hover={{ color: 'black' }}> <Link>Digital Thermometers</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Massagers</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Garment Steamers</Link></Heading>
                      </Box>
                    </List>

                  
                    <img src={pc}   alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                ACCESSORIES
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Bags, Cases & Sleeves</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Smart Device</Link></Heading>
                      <List spacing="8px" >
                        <ListItem  _hover={{ color: 'black' }}><Link>Smart Plugs</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Smart Cameras</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}> <Link>Smart Sensors</Link> </ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Smart Lights</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Smart Speakers</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}> <Link>Smart Tracking Devices</Link> </ListItem>
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Batteries</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Power Banks</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Cables & Cords</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Chargers & Adapters</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Biuetooth & WiFi Speakers</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs' _hover={{ color: 'red' }}><Link>Reconnect Disney|Marvel Accessories</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Data Storage Devices</Link></Heading>
                      <List spacing="8px">
                        <ListItem  _hover={{ color: 'black' }}><Link>Memory Cards</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Pen Drives & OTG Drives</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Hard Disks & SSD</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Mounts & Stands</Link></Heading>
                      <List spacing="8px"  >
                        <ListItem  _hover={{ color: 'black' }}><Link>Air Conditioner Stands</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Tripods & Monopods</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Selfie Sticks</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Car Mobile Holders</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Laptop Stands</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link>Mobile Grips & Stands</Link></ListItem> 
                        <ListItem  _hover={{ color: 'black' }}><Link></Link></ListItem> 
                      </List>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Surge Protectors</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>WebCams</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Headphones & Headsets</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Cleaners & Protectors</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Computer Mouse</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Keyboards</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Indoor Lighting</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Office Electronics</Link></Heading>
                      <List spacing="8px" >
                        <ListItem  _hover={{ color: 'black' }}><Link>Laminators</Link></ListItem>
                        <ListItem  _hover={{ color: 'black' }}><Link>Paper Shredders</Link></ListItem> 
                        
                      </List>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Tyre Inflators</Link></Heading>
                      
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Routers</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Screen Guards & Protectors</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Power Stripes & Extension Cords</Link></Heading>
                      </Box>
                      <Box>
                      <Heading as='h6' size='xs' pb="8px" _hover={{ color: 'red' }}><Link>Stabilizers</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img src={rd} alt="access" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>
        </Flex>

        </Box>
       

        
       </Box>
     </div>
   );
 }
 
 export default Navbar;