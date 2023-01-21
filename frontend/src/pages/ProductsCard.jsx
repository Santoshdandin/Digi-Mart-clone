import { useState } from 'react'
import { Box, Image, Text, Grid, GridItem, Checkbox } from '@chakra-ui/react'
import { BiHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';



const ProductsCard = ({img, title,price, mrp, discount, id}) => {
    const [ wish, setWish ] = useState(false);
    console.log(id);
  return (
    <div>
      <Box border='1px' borderColor='gray.300' align='left' p='4' bg='white' cursor='pointer'>
      <Link to={`/products/${id}`}> <Image src={img} w='70%' m='auto'></Image></Link>
        <Text noOfLines={2} color='blue' mt='2'>{title}</Text>
        <Box display='flex' fontSize='sm' mt='2'>  
        <Text fontWeight='medium'>{price}</Text>
        <Text ml='2' color='grey' fontWeight='medium'> <del>{mrp}</del> </Text>
        <Text ml='2' color='green'>{discount}</Text>    
         </Box>
         <Grid templateColumns='repeat(2, 1fr)' gap={0} m='auto' mt='4' borderColor='gray.300' >
  <GridItem w='100%' h='auto' border='1px' borderColor='gray.300' p='4' pl='4' display='flex' color='grey' gap='2' >
  <Checkbox opacity='80%' size='lg'></Checkbox>
  Compare
  </GridItem >
  <GridItem w='100%' h='auto' border='1px' borderColor='gray.300' p='4' pl='4' display='flex' color='grey' gap='2' onClick={() => setWish(!wish)} >
    {   wish ? <BiHeart style={{fontSize:"24px", opacity:"80%", color:"red"}} /> : <BiHeart style={{fontSize:"24px", opacity:"80%", color:"grey"}} /> }   Wishlist
  </GridItem >
  
</Grid>
      </Box>
      
    </div>
  )
}

export default ProductsCard
