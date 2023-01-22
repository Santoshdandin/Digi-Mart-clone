import { Badge, Box, Heading, Image ,Link} from "@chakra-ui/react";
import Carousel from "better-react-carousel";



let homeapp=[
    {
      "name": "LG 32 litres Convection Microwave Oven, MC3286BRUM",
      "img": "https://www.reliancedigital.in/medias/581108139-Package-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NDI0OHxpbWFnZS9qcGVnfGltYWdlcy9oZjQvaDJmLzg5NjM4NDQ4OTg4NDYuanBnfDljZDk0MDcwYmFhNzQ1NjhlOTFiNzk3NjUyYmI3MzExZTU4NzA0MzYxMGRiMzg2ZmExN2RjMGZmMWJiMGIwM2Q",
      "mrp": "23,999.00",
      "price": "17,140.00",
      "discount": "29%(₹6,859)",
      "id": 1
    },
    {
      "name": "LG 28 litres Convection Microwave Oven, MC2846BV",
      "img": "https://www.reliancedigital.in/medias/LG-MC2846BV-Microwave-Ovens-581107300-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODIzM3xpbWFnZS9qcGVnfGltYWdlcy9oOTkvaDFiLzk4MDU4NTQxNDY1OTAuanBnfDVlYWMxYTY5Nzk2OTkyYTcxZGEwOTVmY2FiYmQ0YmFmYTYwOGFmZTM0OGRjYjdjZTJlMGMxY2Q3MWY2ZGVjODc",
      "mrp": "16,999.00",
      "price": "15,990.00",
      "discount": "6%(₹1,009)",
      "id": 2
    },
    {
      "name": "IFB 30 litres Rotisserie Convection Microwave Oven, 30BRC2",
      "img": "https://www.reliancedigital.in/medias/IFB-30BRC2-Microwave-Ovens-491391947-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaGU4LzkwMTg4Nzk0NzU3NDIuanBnfDgxZGIxNGNlNGNkMDJkZDljMmU0ZTE5NGYxYmMzMDU1NzU0OTdlODg0Njc0NzdjMmY5YWJhNDZiNzQ5ZDAxMjQ",
      "mrp": "20,390.00",
      "price": "15,990.00",
      "discount": "22%(₹4,400)",
      "id": 3
    },
    {
      "name": "LG 20 litres Solo Microwave Oven, MS2043DB",
      "img": "https://www.reliancedigital.in/medias/LG-MS2043DB-Microwave-Oven-491166959-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzg4N3xpbWFnZS9qcGVnfGltYWdlcy9oMGIvaGYxLzkxOTY2NjQ5Nzk0ODYuanBnfDQyODU2MDc2MTZlODBjZjYyY2VlMjFlOTZlNjVjN2IyMzJmOTkxY2VhZTcwZTIxZDBhODU0YmNlNzIyZTQ5ZjM",
      "mrp": "7,899.00",
      "price": "6,499.00",
      "discount": "18%(₹1,400)",
      "id": 4
    },
    {
      "name": "Samsung 23 Litre Solo Microwave Oven with Indian Auto cook Menu, (MS23A3513AK/TL, Black)",
      "img": "https://www.reliancedigital.in/medias/Samsung-MS23A3513AK-TL-Solo-Grill-492573240-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzAyOXxpbWFnZS9qcGVnfGltYWdlcy9oZjIvaDY3Lzk4NDU0NjcxNTI0MTQuanBnfGUyMDczNjE2MTMzZDFlNWMyMmVjNzgxZmMzMTRhZmYzNDc1YmJmMzVmZDk0ZGYxMzI1ZTlhMTBmNTkxYzFkMzQ",
      "mrp": "7,500.00",
      "price": "6,600.00",
      "discount": "12%(₹900)",
      "id": 5
    },
    {
      "name": "LG 28 litres Convection Microwave Oven, MJ2886BWUM",
      "img": "https://www.reliancedigital.in/medias/LG-MJ2886BWUM-Microwave-Ovens-491392151-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODQ0N3xpbWFnZS9qcGVnfGltYWdlcy9oODUvaDRkLzg5Nzk4MTkzMzE2MTQuanBnfDQ5NjNkNTc2ODRjN2M0MzZhZTUzYTAyZjQ5MzljYjczNjEwNTQ4ODI2NjllMzQ4MTVjM2FkOWRhN2QxMmYwOWQ",
      "mrp": "24,299.00",
      "price": "19,490.00",
      "discount": "20%(₹4,809)",
      "id": 6
    },
    {
      "name": "LG 21 litres Convection Microwave Oven, MC2146BG",
      "img": "https://www.reliancedigital.in/medias/LG-MC2146BG-Microwave-Ovens-491604223-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODc4fGltYWdlL2pwZWd8aW1hZ2VzL2hlOS9oZDYvOTIyMDg4ODAwMjU5MC5qcGd8ZGI2OWEwYmFjNTM3MjQ2ZGI5ZmM5MTNiNDAxM2FlZWUzMzQ1NGQ3YmY4MzY3MWI1YTYyYmM5ZmM1ZmFkZmQyZA",
      "mrp": "13,999.00",
      "price": "11,590.00",
      "discount": "17%(₹2,409)",
      "id": 7
    },
    {
      "name": "Samsung 23 Litre Grill Microwave Oven with Grill Fry, Browning Plus (MG23A3515AK/TL, Black)",
      "img": "https://www.reliancedigital.in/medias/Samsung-MG23A3515AK-TL-Solo-Grill-492573239-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNzA0NHxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaDQwLzk4NDU0NjYxNjkzNzQuanBnfDgwZTgyN2Y2YTEwNjAzZDE2NmUwM2ZkNmIxNGQyMzlhNWRmYzk2NTk1MzU1ZTE1NzZiYmNmMjA4ZDg2OWNmYTQ",
      "mrp": "11,600.00",
      "price": "8,500.00",
      "discount": "27%(₹3,100)",
      "id": 8
    },
    {
      "name": "LG 32 litres Convection Microwave Oven, MJEN326UH",
      "img": "https://www.reliancedigital.in/medias/LG-MJEN326UH-Microwave-Ovens-491604502-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2Mjg3fGltYWdlL2pwZWd8aW1hZ2VzL2hjNS9oYTkvOTIyOTk4ODU2MDkyNi5qcGd8NzhmMjZiYWEzOGE3MDhhOTM2OWUyYWUwMzhlNjUzN2M5OTYzZTg0ZDhlOWU2MWUxMGQ4MDJiNjljNDg5MGM1Mg",
      "mrp": "31,499.00",
      "price": "24,490.00",
      "discount": "22%(₹7,009)",
      "id": 9
    },
    {
      "name": "Samsung 28 litres SlimFry Convection Microwave Oven, MC28A5033CK Black",
      "img": "https://www.reliancedigital.in/medias/Samsung-MC28A5033CK-TL-Convection-MicrowaveOvens-492911130-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDIzOXxpbWFnZS9qcGVnfGltYWdlcy9oYTMvaDRiLzk4ODc3MDc4MjQxNTguanBnfDhlMTVjNTVkZTYyZTgyYjY4N2E5NWE4NTMzNTMwZmJlYjNlMTJjMTI1Zjk0ODg0NDk2MmExODYzZWU1NmVhZGU",
      "mrp": "17,990.00",
      "price": "14,990.00",
      "discount": "17%(₹3,000)",
      "id": 10
    },
]

function Homeappliance(){
    return(
<div>
<Box pb="32px">

<Box mb="32px" pt="32px" px="28px"><Heading  as="span" fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px" >Small Appliances | Upto 60% off</Heading> <Link Link as="span" borderLeft="1px" color="white" px="12px" border="2px" bg="blue" p="5px"> View All</Link></Box>

  <Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
{
breakpoint: 800,
cols: 3,
rows: 1,
gap: 10,
loop: true
}
]}>
    {homeapp.map((homeapp) => (
      <Carousel.Item>

        <Box textAlign="left">
          <Box w="220px" h="185px">
          <Image cursor="pointer" w="180px" _hover={{
              w: "190px",
            }} src={homeapp.img}  />

          </Box>
          
          <Box
          color="#003380"
            mt="1"
            fontWeight="400"
            as="p"
            fontSize="15px"
            lineHeight="tight"
            noOfLines={2}
            _hover={{
              color: "red",
            }}
            cursor="pointer"
            mb="15px"
          >
           {homeapp.name}
          </Box>

       
          <Box color="#666" fontSize="14px" >
            <Box>
              Offer Price:
              <Box
                as="span"
                color="black"
                fontSize="15px"
                fontWeight="bold"
              >
                ₹{homeapp.price}.00
              </Box>
            </Box>

            <Box>
              M.R.P:
              <Box as="span">
                ₹{homeapp.mrp}
              </Box>
            </Box>

            <Box>
              You Save:
              <Box as="span" >
                {homeapp.discount}
              </Box>
            </Box>

            <Badge
              borderRadius="full"
              px="2"
              colorScheme="green"
              border="1px"
              fontSize="10px"
            >
              OFFERS AVAILABLE
            </Badge>
          </Box>
        </Box>
      </Carousel.Item>
    ))}
  </Carousel>
</Box>
</div>
    )
}

export default Homeappliance;