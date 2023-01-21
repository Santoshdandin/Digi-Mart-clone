import { Badge, Box, Button, HStack, Heading, Image ,Link, Spacer} from "@chakra-ui/react";
import Carousel from "better-react-carousel"

let bottomicon=[
    {
        image:
          "https://www.reliancedigital.in/medias/Watch-180x180-27-02-2020.png?context=bWFzdGVyfGltYWdlc3w2Njk2fGltYWdlL3BuZ3xpbWFnZXMvaGQ1L2g2My85MjUzNTA3NTk2MzE4LnBuZ3w4NmEwODU5NDI5YzVlMzJjNzRlNzNlYmJkMmJmYTZjMTI2OWY0YTUxYWU3YzMzM2E3YTc5YjljZmU4ZGMyNGQ2",
          title:"Smart Wearables"
      },
      {
        image:
          "https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-Ref.png?context=bWFzdGVyfGltYWdlc3wxNDQwMXxpbWFnZS9wbmd8aW1hZ2VzL2hlZC9oMjQvOTg5MjQwNzUwOTAyMi5wbmd8NTc5ZWE5ZGEzYTYzODYwNDNlNTRhNjExZjcyZGI4NzQ1YmE0NDVjYmUwY2M3MzRiZjFkMWZmNDY3NTMxYjNkMA",
          title:"Refrigerator"
      },
      {
        image:
          "https://www.reliancedigital.in/medias/Speaker-Headset-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyNzUzN3xpbWFnZS9wbmd8aW1hZ2VzL2g1YS9oODAvOTI1MTA1MDY4NDQ0Ni5wbmd8YmMyYWJiNzRhMzk4NjMxMDRmOWRlZGI1MzVjZDk2Y2IxYTkxOGNlNjlmZjA2YTgwMGIwMjhmYTJlYmNhYjIwOA",
          title:"Speaker & Headsets"
      },
      {
        image:
          "https://www.reliancedigital.in/medias/Camera-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0MzE0OHxpbWFnZS9wbmd8aW1hZ2VzL2gzNi9oMGMvOTI1MTA1MDc0OTk4Mi5wbmd8NDMxMGMyNjg2M2I3ZDFhOTc4YjkzMTNhYWM1ZmU5YzRlMjc3Mzg4MDcxOTU1OGE0NzZjODczZWU3NTdhMTM0MA",
          title:"Cameras"
      },
      {
        image:
          "https://www.reliancedigital.in/medias/Explore-Our-Range-of-Products-AC.png?context=bWFzdGVyfGltYWdlc3wxNzI3NnxpbWFnZS9wbmd8aW1hZ2VzL2hmMy9oNDMvOTg5MjQwNzQ0MzQ4Ni5wbmd8ODkxZDlkYTUxODhkM2RiOWUzMTU4ZDZhYmVkYTM3MzE2MDEyNDEzODMzNWZlZWQ5ZDQwMzNmMWM1OTliZGYwZA",
          title:"Air Conditioners"
      },
      {
        image:
          "https://www.reliancedigital.in/medias/iphone-pro-11-01.png?context=bWFzdGVyfGltYWdlc3wyOTc3NnxpbWFnZS9wbmd8aW1hZ2VzL2gxNi9oNWUvOTI3NjA1OTkxMDE3NC5wbmd8MzdkYzljODgzMDcyM2ZjMjJmZDI2ZjMwNjhkZmU5YjFmOTJmMGRmOTFiYzc4ZjcyMDRhMjQ5MWMyNjYwOTgxYg",
          title:"Smartphone"
      },
      {
        image:
          "https://www.reliancedigital.in/medias/Laptop-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3wyOTAwOXxpbWFnZS9wbmd8aW1hZ2VzL2g0Mi9oNTYvOTI1MTA1MDYxODkxMC5wbmd8N2ZjYTg0ZDAyOTZmMmQ5OTZhZDNiM2M4NDg0ZDgxY2UyNzNjMmJiYzMwZTZiOGQwOWE5N2JlZDI4M2ViMGZjNw",
          title:"Washing Machines"
      },
      {
        image:
          "https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
          title:"Laptops"
      },
      {
        image:
          "https://www.reliancedigital.in/medias/TV-180x180-15-01-2019.png?context=bWFzdGVyfGltYWdlc3w0OTM4M3xpbWFnZS9wbmd8aW1hZ2VzL2g1ZC9oMTEvOTI1MTA1MDU1MzM3NC5wbmd8MThiNmU4NTZiNWI5MTE1ZGVjYjA4ZjIwM2QwZjUyMzFlOGExZTY0YmQ0MTRkYTkyN2M2MDZiYzUzZDY1ZjM4Ng",
          title:"Televisions"
      }, 
    
]

function Bottomicon(){
    return(
        <div>
             <Heading mt="10px" marginBottom="10px"  fontSize="22px" textAlign="center">EXPLORE OUR RANGE OF PRODUCTS</Heading>
<Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
{
breakpoint: 800,
cols: 3,
rows: 1,
gap: 10,
loop: true
}
]}>
    { bottomicon.map(( bottomicon) => (
      <Carousel.Item>

        <Box textAlign="left">
          <Box w="220px" h="185px">
          <Image cursor="pointer" w="180px" _hover={{
              w: "190px",
            }} src={ bottomicon.image} mr="auto" />

          </Box>
          
          <Box
          color="#003380"
            mt="1"
            fontWeight="400"
            as="p"
            fontSize="20px"
            lineHeight="tight"
            noOfLines={2}
            _hover={{
              color: "red",
            }}
            cursor="pointer"
            mb="15px"
            textAlign={'center'}
          >
           { bottomicon.title}
          </Box>

       
     
          
        </Box>
      </Carousel.Item>
    ))}
  </Carousel>

    
  <HStack>
            <Spacer/>
            <Box>
        <Button _hover={{bgColor:"#fff", color:"blue"}} color="white" bg="#003380" margin="auto" mb="20px">View All</Button>
        </Box>
        <Spacer />
        </HStack>
        </div>
    )
}

export default Bottomicon;