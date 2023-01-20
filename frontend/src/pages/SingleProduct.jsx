import { useState, useEffect } from 'react'
import { SimpleGrid, Box, Text, Image, Checkbox, Input, Button  } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { FaHome, FaShareAlt, FaPrint } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BiStore } from "react-icons/bi";
import { MdDeliveryDining } from "react-icons/md";
import { SiPluscodes } from "react-icons/si";
import { useParams } from 'react-router-dom';



const SingleProduct = () => {
  const [ product, setProduct ] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://lime-confused-shrimp.cyclic.app/products/${id}`)
    .then(res => res.json())
    .then(res => setProduct(res.data[0]))
    .catch(err => console.log(err));
},[id])


console.log(product);


  console.log(id);
  return (
    <div>
      <Box w='100%' pb='2' color='white' borderBottom='1px' borderColor='gray.300' display='flex' h='auto'>
        <FaHome style={{marginTop:"8px", marginLeft:"10px", color:"grey", fontSize:"16px"}}/>
        <ChevronRightIcon style={{color:"grey", fontSize:"16px", marginTop:"8px"}}/>
        <Text color='grey' mt='1'>{product.category}</Text>
        <ChevronRightIcon style={{color:"grey", fontSize:"16px", marginTop:"8px"}}/>
        <Text color='grey' mt='1'>{product.brand}</Text>
        <ChevronRightIcon style={{color:"grey", fontSize:"16px", marginTop:"8px"}}/>
        <Text color='grey' mt='1'>{product.name}</Text>
        </Box>
        <SimpleGrid columns={[1,1,1,3,3,3]} spacing={1}>
          <Box  height='auto' border='1px' borderColor="gray.300">
            <Image w='80%' src={product.img} m='auto' mt='20'></Image>
          </Box>


          <Box height='auto' border='1px' borderColor="gray.300" p='2'>
              <Text align='left' ml='2' fontSize='lg' fontWeight='medium'>{product.name}</Text>
              <Box display='flex'>
              <Checkbox mt='2' ml='2'>Add to compare |</Checkbox>
              <FaShareAlt style={{marginLeft:"10px", marginTop:"14px", color:"blue"}}/>
              <Text mt='2' ml='2'>|</Text>
               <FaPrint style={{marginLeft:"10px", marginTop:"14px", color:"blue"}}/>
               <Text mt='2' ml='2' color='blue'>Print</Text>
              </Box>
              <Box display='flex' mt='4'>
                <Text fontWeight='bold' fontSize='md' mt='2' ml='2'>Save more with EMI/Cashback (1)</Text>
                <Text fontSize='xs' fontWeight='medium' mt='3' ml='2' color='blue'>Read-T&C</Text>
              </Box>
              <Box display='flex' align='left'>
                <ul style={{marginLeft:"24px"}}>
                    <li><Text fontSize='md' mt='2' ml='2' opacity='90%' align='left'>EMIs (Credit Cards) from ₹432.07/month |  <span style={{color:"blue",}}>View all Standard Credit Cards EMI options</span> </Text></li>
                </ul>
              </Box>
              <Box display='flex' mt='4'>
                <Text fontWeight='bold' fontSize='md' mt='2' ml='2'>Warranty</Text>
                <Text fontSize='xs' mt='3' ml='2' color='blue'>Read-T&C</Text>
              </Box>
              <Box display='flex' align='left'>
                <ul style={{marginLeft:"24px"}}>
                    <li><Text fontSize='md' fontWeight='medium' mt='2' ml='2' opacity='90%' align='left'>Warranty:  <span style={{ fontWeight:"400"}}>1 year manufacturer warranty</span> </Text></li>
                </ul>
              </Box>
              <Box display='flex' mt='4'>
                <Text fontWeight='bold' fontSize='md' mt='2' ml='2'>Additional Services & Warranties (5)</Text>
                <Text fontSize='sm' fontWeight='bold' mt='3' ml='2' color='blue'>View All</Text>
              </Box>
              <Text fontWeight='bold' fontSize='md' mt='2' ml='2' align='left'>Key Features</Text>
              <ul style={{marginLeft:"24px"}}>
                    <li><Text fontSize='sm' mt='2' ml='2' opacity='90%' align='left'>Display: 16.53 cm (6.51 Inch) HD+ LCD (IPS) </Text></li>
                    <li><Text fontSize='sm' mt='2' ml='2' opacity='90%' align='left'>Back Camera: 8 MP Main </Text></li>
                    <li><Text fontSize='sm' mt='2' ml='2' opacity='90%' align='left'>Front Camera: 5 MP </Text></li>
                    <li><Text fontSize='sm' mt='2' ml='2' opacity='90%' align='left'>Battery Capacity: 5000 mAh</Text></li>
                    <li><Text fontSize='sm' mt='2' ml='2' opacity='90%' align='left'>Internal Storage: 32 GB, RAM: 3 GB</Text></li>
                </ul>
                <Text fontWeight='bold' fontSize='md' mt='2' ml='2' align='left'>Return Policy</Text>
              <ul style={{marginLeft:"24px"}}>
                    <li><Text fontSize='sm' mt='2' ml='2' opacity='90%' align='left'>Items are eligible for return within 7 Days of Delivery.<span style={{color:"blue", fontSize:"small"}}>Read T&C</span> </Text></li>
                    <li><Text fontSize='sm' mt='2' ml='2' opacity='90%' align='left'>All accessories, product & packaging need to be returned in original condition. </Text></li>
                </ul>
                <Box display='flex' mt='4'>
                <Text fontWeight='bold' fontSize='md' mt='2' ml='2'>Got Feedback to share on this page?</Text>
                <Text fontSize='sm' fontWeight='bold' mt='3' ml='2' color='blue'>report here.</Text>
              </Box>
          </Box>



          <Box height='auto' border='1px' borderColor="gray.300" p='2' align='left'>
          <Text fontWeight='medium' fontSize='3xl' mt='2' ml='4' align='left' color='blue'>₹ <span>{product.price}</span></Text>
          <Box display='flex' fontSize='sm' mt='2' ml='2'>  
        <Text fontSize='lg' ml='2'>MRP:</Text>
        <Text ml='2' fontWeight='medium' fontSize='lg'>  <del>₹<span>{product.mrp}</span></del>  </Text>
        <Text ml='2' fontSize='xs' mt='1' opacity='95%'>(Inclusive of all taxes)</Text>    
         </Box>
         <Text ml='4' fontWeight='medium' fontSize='lg' align='left' color='green'>  You Save: <span>{product.discount}</span>  </Text>
         <Box display='flex' mt='4'  ml='2'>
                <Text fontWeight='medium' fontSize='md' mt='2' ml='2'>EMIs (Credit Cards) from ₹432.07/month |</Text>
                <Text fontSize='sm' fontWeight='medium' mt='3' ml='2' color='blue'>View-Plans</Text>
              </Box>
              <Text ml='4' align='left' fontSize='lg' fontWeight='bold' mt='2'> FREE Shipping!</Text>
              <Text ml='8' align='left' fontSize='xs' mt='4' color='blue'> Enter / Detect PIN Code</Text>
              <Input border='1px' borderColor='blue' borderRadius='none' w='60%' align='left' ml='4'></Input>
              <Box display='flex' mt='4' ml='2'>
                <TbTruckDelivery style={{marginTop:"10px", marginLeft:"10px", color:"red"}} />
                <Text fontSize='sm' mt='2' ml='2'>INSTA Delivery </Text>
                <Text fontSize='sm' mt='2' color='blue'> (within 3 hours)</Text>
              </Box>
              <Box display='flex' ml='2'>
                <BiStore style={{marginTop:"10px", marginLeft:"10px", color:"blue"}} />
                <Text  fontSize='sm' mt='2' ml='2'>Pick at Store: </Text>
                <Text fontSize='sm' fontWeight='medium' mt='2' color='blue'>At your convinience |</Text>
                <Text fontWeight='medium' fontSize='sm' mt='2' ml='2' color='red'>Search Nearby Store</Text>
              </Box>
              <Box display='flex' ml='2'>
                <MdDeliveryDining style={{marginTop:"10px", marginLeft:"10px", color:"blue.500"}} />
                <Text fontSize='sm' mt='2' ml='2'>Standard Delivery:</Text>
                <Text fontSize='sm' fontWeight='bold' mt='2' color='blue'>21 Jan (Sat)-22 Jan (Sun)</Text>
              </Box>
              <Box display='flex' ml='2'>
                <SiPluscodes style={{marginTop:"10px", marginLeft:"10px", color:"green"}} />
                <Text fontSize='sm' mt='2' ml='2' color='green'>COD not available</Text>
              </Box>
              <Box display='flex' align='left' ml='2'>
                <Text fontSize='xs' mt='2' ml='2' color='blue'>*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</Text>
              </Box>
              <Box display='flex' ml='2' gap='2' mt='4'>
                <Button w='48%' bg='red.600' color='white' h='12'>ADD TO CART</Button>
                <Button w='48%' bg='orange.500' color='white' h='12'>BUY NOW</Button>
              </Box>
          </Box>
        </SimpleGrid>
    </div>
  )
}

export default SingleProduct
