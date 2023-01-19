import { useState, useEffect } from 'react'
import { FaHome } from 'react-icons/fa';
import { Box, Text, Grid, GridItem, Input,   RangeSlider,
    RangeSliderTrack,
    RangeSliderFilledTrack,
    RangeSliderThumb, Button, Checkbox, SimpleGrid } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsWindows } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import ProductsCard from './ProductsCard';


const Products = () => {
const nums = [1,2,3,4,5,6,7,8,9];
    const [ min, setMin ] = useState("");
    const [ max, setMax ] = useState("");
    const [ page, setPage ] = useState(1);
    const [ items, setItems ] = useState([]);


    useEffect(() => {
         fetch(`https://ruby-antelope-veil.cyclic.app/products?_page=${page}&_limit=16`)
         .then(res => res.json())
         .then(res => setItems(res.data))
         .catch(err => console.log(err));
    },[page])
  return (
    <div >
        <Box w='100%' pb='2' color='white' borderBottom='1px' borderColor='gray.300' display='flex'>
        <FaHome style={{marginTop:"8px", marginLeft:"10px", color:"grey", fontSize:"18px"}}/>
        <ChevronRightIcon style={{color:"grey", fontSize:"20px", marginTop:"8px"}}/>
        <Text color='grey' mt='1'>Search</Text>
        </Box>
        <Grid templateColumns='21% 78.5%' gap={1} bg='gray.100'>
          <GridItem w='100%' h='auto' p='2' >
            <Box h='16' p='3' pl='4' border='1px' borderColor='gray.300' bg='white'>
                <Text align='left' fontSize='2xl' fontWeight='medium' color='blackAlpha.800'>FILTERS</Text>
            </Box>
            <Box h='auto' p='3' pl='4' border='1px' borderColor='gray.300' mt='2' bg='white'>
                <Text align='left' fontSize='md' fontWeight='bold' color='blackAlpha.800'>Price</Text>
                <RangeSlider  defaultValue={[10, 30]}  colorScheme='blue'>
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Box display='flex'>
                <Text display='flex' fontWeight='bold'>₹ <span>{min}</span></Text>
                <Text display='flex' fontWeight='bold' ml='40' align='right'>₹ <span>{max}</span>  </Text>
            </Box>
            <Box display='flex' color='blue' mt='1' bg='white'>
                <Text fontSize='sm' ml='6'>Min</Text>
                <Text fontSize='sm' ml='24'>Max</Text>
            </Box>
             <Box display='flex'>
                <Input w='35%' borderRadius='none' borderColor='blue' value={min} onChange={(e) => setMin(e.target.value)}></Input>
                <Text p='2'>to</Text>
                <Input w='35%' borderRadius='none' borderColor='blue' value={max} onChange={(e) => setMax(e.target.value)}></Input>
                <Button bg='blue' borderRadius='none' borderColor='black' ml='2' color='white'>Go</Button>
             </Box>
            </Box>
            <Box h='auto' p='3' pl='4' border='1px' borderColor='gray.300' mt='2' align='left' bg='white'>
                <Text align='left' fontSize='md' fontWeight='medium' color='blackAlpha.800'>Availability</Text>
                <Checkbox mt='2' colorScheme='blue' defaultChecked >Exclude out of Stock</Checkbox>
            </Box>
            <Box h='auto' p='3' pl='4' border='1px' borderColor='gray.300' mt='2' align='left' bg='white'>
                <Text align='left' fontSize='md' fontWeight='medium' color='blackAlpha.800'>Category</Text>
                <Checkbox mt='2' colorScheme='blue' >Smartphones</Checkbox>
            </Box>
            <Box h='auto' p='3' pl='4' border='1px' borderColor='gray.300' mt='2' align='left' display='grid' bg='white'>
                <Text align='left' fontSize='md' fontWeight='medium' color='blackAlpha.800'>Brand</Text>
                <Checkbox mt='2' colorScheme='blue' >Samsung</Checkbox>
                <Checkbox mt='2' colorScheme='blue' >Xiaomi</Checkbox>
                <Checkbox mt='2' colorScheme='blue' >OPPO</Checkbox>
                <Checkbox mt='2' colorScheme='blue' >Tecno</Checkbox>
                <Checkbox mt='2' colorScheme='blue' >VIVO</Checkbox>
                <Checkbox mt='2' colorScheme='blue' >Realme</Checkbox>
            </Box>
          </GridItem>










          <GridItem w='100%' h='auto' >
          <Grid templateColumns='57% 45%' gap='auto' bg='white' mt='2' border='1px' borderColor='gray.300' >
           <GridItem w='100%' h='auto'>
            <Box p='2' align='left' bg='white'> 
             <Text fontSize='2xl' fontWeight='bold'>LATEST MOBILE PHONES</Text>
            <Text>(Showing 1- 24 products of 26 products)</Text>    
            </Box>
           </GridItem>
           <GridItem w='100%' h='auto' mt='4' >
            <Box display='flex' mt='2' h='auto' align='right'>
                <Text fontSize='md' fontWeight='medium'>Sort By:</Text>
                <Button h='auto' ml='2' fontSize='xs'>Relevance</Button>
                <Button h='auto' bg='none' border='1px' borderColor='green' ml='2' fontSize='xs'>Price(Low-High)</Button>
                <Button h='auto' ml='2' fontSize='xs'>Price(High-Low)</Button>
                <Box border='1px' ml='2' p='1' fontSize='lg' color='grey'><GiHamburgerMenu /></Box>
                <Box border='1px' ml='2' p='1' fontSize='lg' color='blue' bg='gray.100'><BsWindows /></Box>
            </Box>
           </GridItem>
         </Grid>
         <Box display='flex' bg='white' mt='2' p='4'>
            <Text>Filters:</Text>
            <Box border='1px' borderColor='gray.400' ml='2' p='1' pl='3' pr='3' display='flex'>latest-mobiles-jan-23  <RxCross2 style={{marginTop:"2px", marginLeft:"4px", fontSize:"20px"}} /> </Box>
            <Box border='1px' borderColor='gray.400' ml='2' p='1' pl='3' pr='3' display='flex'>Exclude out of Stock   <RxCross2 style={{marginTop:"2px", marginLeft:"4px", fontSize:"20px"}} />  </Box>
            <Box border='1px' borderColor='blue.400' ml='2' p='1' pl='3' pr='3' bg='blue.300' display='flex' color='white' >Clear All    <RxCross2 style={{marginTop:"2px", marginLeft:"4px", fontSize:"20px"}} /> </Box>
         </Box>

         <SimpleGrid columns={[1,2,2,4,4,4]} spacing={2} mt='2'>
         { items.map((el) => (
            <ProductsCard key={el._id} img={el.img} title={el.name} price={el.price} mrp={el.mrp} discount={el.discount} />
         ))}
        </SimpleGrid>
         
         <Box mt='2' bg='white' p='6'>
            { nums.map((el) => (
                <Button value={el} key={el} border='1px' ml='2' bg='blue' color='white' borderRadius="50%" onClick={(e) => setPage(e.target.value)}>{el}</Button>
            ))}
         </Box>
        
        
          </GridItem>
        </Grid>
        
    </div>
  )
}

export default Products
