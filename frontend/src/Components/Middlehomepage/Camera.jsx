import { Badge, Box, Heading, Image ,Link} from "@chakra-ui/react";
import Carousel from "better-react-carousel";



let camera=[

    {
        "name": "Nikon D3500 DSLR Camera with AF-P 18-55 mm + AF-P 70-300 mm VR Kit",
        "img": "https://www.reliancedigital.in/medias/Nikon-D3500-DSLR-Camera-491431009-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MjUzfGltYWdlL2pwZWd8aW1hZ2VzL2gxNS9oMDEvOTA3MDM1NjI2NzAzOC5qcGd8NGFmZDk5NDM1MjA0NDFkY2Q0M2FmYzY0ZTlmYmUxZTU1MjJiZWE4ZDNkNTI5Mzg4M2NkOWNjZjdhY2MwZDFkZA",
        "price": "48,990.00",
        "mrp": "53,950.00",
        "discount": "9%(₹4,960)",
        "id": 1
      },
      {
        "name": "Nikon COOLPIX P1000 Prosumer Camera 16 MP, Black",
        "img": "https://www.reliancedigital.in/medias/Nikon-P1000-Prosumer-Camera-491430998-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNTE5OHxpbWFnZS9qcGVnfGltYWdlcy9oYmMvaDVkLzkwNTM4NDQ1MzczNzQuanBnfGE0ZThhNWI3YzE1ZGEzNzcwNjlkZWQzNjYxMmZhMjEwMjhlYjkzYWU0Njg4YjhmYzU4NGI3N2ZkODRiNGQwMjA",
        "price": "64,990.00",
        "mrp": "69,950.00",
        "discount": "7%(₹4,960)",
        "id": 2
      },
      {
        "name": "Nikon Z 50 mm Prime Lens",
        "img": "https://www.reliancedigital.in/medias/Nikon-Z7-Camera-Lenses-491431045-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTg0M3xpbWFnZS9qcGVnfGltYWdlcy9oY2YvaGEyLzkwNjk4NjgyODU5ODIuanBnfGM0ZGQ3OGZmZTE4NDdjODI0NTYyN2Q3MzNmMTc2ZDI3MGYzMDllYzIwZGUwMjA2YzFjNjU5ODY1OWY3NDRiMGU",
        "price": "47,990.00",
        "mrp": "50,950.00",
        "discount": "6%(₹2,960)",
        "id": 3
      },
      {
        "name": "Nikon Z 35 mm Prime Lens",
        "img": "https://www.reliancedigital.in/medias/Nikon-Z7-Camera-Lenses-491431044-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTc1OHxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDc2LzkwNjk4NzAyNTIwNjIuanBnfDNjOGI2YzNiM2JkMTIyNmU4MDIxZTc2MzAyNzQ1NmFjYWFmMjhkMTlkMmFiNDQ1MjBiZGJlNzhhN2I4OWZjYTA",
        "price": "62,990.00",
        "mrp": "66,950.00",
        "discount": "6%(₹3,960)",
        "id": 4
      },
      {
        "name": "Nikon Z7 Mirrorless Camera with Mount Adapter",
        "img": "https://www.reliancedigital.in/medias/Nikon-Z7-DSLR-Cameras-491431042-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNTgyMXxpbWFnZS9qcGVnfGltYWdlcy9oNjEvaDA4LzkwNzIxMDUwMjk2NjIuanBnfGY2M2NlOWEyODdmYTU4ZjM2N2Q1YWJhYzgyZWM2NGJlNWU1MjJjMjU3ZDE0NmVhZmJhZWM1ZDkyNTY3YmIxYjQ",
        "price": "2,81,950.00",
        "id": 5
      },
      {
        "name": "Nikon Z7 Mount Adapter for Nikon Mirrorless Cameras",
        "img": "https://www.reliancedigital.in/medias/Nikon-Z7-Camera-Lenses-491431046-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjI5MXxpbWFnZS9qcGVnfGltYWdlcy9oZjAvaDYyLzkwODI4OTU2MzAzNjYuanBnfGQwNzhiMzg1MzU2NTU5MTkxMzgzODhiYjRmMzRmZmE1NmFiZDJhNDU5NjMyN2ZlMTdlN2ViM2E0NGQwMjZmOTM",
        "price": "19,950.00",
        "id": 6
      },
      {
        "name": "Nikon JAA830DA 70-200 mm Camera Lens",
        "img": "https://www.reliancedigital.in/medias/Nikon-LENS-70-200mm-f2.8E-FL-ED-VR-491336345-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDEwN3xpbWFnZS9qcGVnfGltYWdlcy9oYzUvaDAwLzkwNjA1MzE5OTQ2NTQuanBnfGZkMmYzNTM0N2Q2NmNmZGIzNjI3NDliZmE3YmU2MDMzZGI1MTc4Y2MxYjQ1NjFkNjBlODY3YmUzM2YwYmMyNzQ",
        "price": "1,62,990.00",
        "mrp": "1,69,950.00",
        "discount": "4%(₹6,960)",
        "id": 7
      },
      {
        "name": "Nikon Z7 Mirrorless Camera with 24-70 mm Lens Kit and Mount Adapter",
        "img": "https://www.reliancedigital.in/medias/Nikon-Z7-DSLR-Cameras-491431043-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDQzN3xpbWFnZS9qcGVnfGltYWdlcy9oZmYvaDlhLzkwNzIxMDMzOTEyNjIuanBnfDcxNDg4MjYwOTdmOTAyZGYwMTQwNGFlY2RjMmY5NjVmZjVmZDExOWNkMjJlMjMzN2Q1ZTBiMDJiMGVjNjRiZTI",
        "price": "2,59,990.00",
        "mrp": "2,82,950.00",
        "discount": "8%(₹22,960)",
        "id": 8
      },
      {
        "name": "Nikon Z7 Mirrorless Camera with 24-70 mm Lens Kit",
        "img": "https://www.reliancedigital.in/medias/Nikon-Z7-DSLR-Cameras-491431041-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDUxMnxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDYwLzkwNzIxMDY5OTU3NDIuanBnfDUxMzY4NzI5NGY3MTc4NzEzNjg2NDMwYmFjZTA3MDBkNjA2MGQxNjEwYmE4MzAyYTE4MzQ2ZTZjYzhhYzQwZTc",
        "price": "2,52,499.00",
        "mrp": "2,71,450.00",
        "discount": "7%(₹18,951)",
        "id": 9
      },
      {
        "name": "GoPro Hero 7 Action Camera with 12MP Photos + 4K60 Video and Rugged, Waterproof Design, Black",
        "img": "https://www.reliancedigital.in/medias/Gopro-Action-Camera-Hero7-Black-491430990-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTQxNnxpbWFnZS9qcGVnfGltYWdlcy9oYjEvaDgwLzkwMzI3ODg2NzI1NDIuanBnfGY5NzE1N2FiOGZmZjVlY2VmNDI5N2VlYjk3OTM2ODEwMjgxNjg5Y2E5ZDM2NmViOGU2NGIxYmMxZDY2ZTQ0NWY",
        "price": "29,999.00",
        "mrp": "30,500.00",
        "discount": "2%(₹501)",
        "id": 10
      },
      {
        "name": "Olympus Mirrorless OM-D E-M1X Camera Body, Black",
        "img": "https://www.reliancedigital.in/medias/Olympus-EM1XINBLK-CAMERA-492571618-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDUxNXxpbWFnZS9qcGVnfGltYWdlcy9oMTIvaDRiLzk3Mjc4MjY3ODgzODIuanBnfDViMGQ3NjMzZGRmMzFlZjljNmRhN2YwYzliZTExNmU1ZTgxNzMwM2RkZTkyN2Q4NDM4MjA3Mzk2MWM4MjNlNTY",
        "price": "1,34,990.00",
        "id": 11
      },
      {
        "name": "Insta 360 One R 2.54 cm (1 Inch) Edition Action Camera with Night Shot, Voice Control",
        "img": "https://www.reliancedigital.in/medias/Insta-360-One-R-1-Inch-Edition-Action-Cameras-491934729-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1OTIyMXxpbWFnZS9qcGVnfGltYWdlcy9oMjgvaDhkLzk3NDIyMzM2OTgzMzQuanBnfDNhOWI3MTI3NGJjZTE1YmNjNDRjYjg3YTgyZTQzOGVhNjk0YzVmNGIyODgzYzNhY2FkOTEzYTg3NGY0ZmJkZmY",
        "price": "45,500.00",
        "mrp": "54,990.00",
        "discount": "17%(₹9,490)",
        "id": 12
      },
      {
        "name": "Insta 360 One R Twin Edition Action Camera",
        "img": "https://www.reliancedigital.in/medias/Insta-360-One-R-Twin-Edition-Action-Cameras-491934730-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjgyOXxpbWFnZS9qcGVnfGltYWdlcy9oMWMvaDcyLzk3MzY0NDI5MzczNzQuanBnfDIwOGE0OTNjYThjOTg0NjA5MThiOGI2ZGZiM2NmMDYyNTUwYmE5YjlmYmU0MjA5ZWRiMzdhNGZkNDkxNGVmN2M",
        "price": "41,500.00",
        "mrp": "54,990.00",
        "discount": "25%(₹13,490)",
        "id": 13
      },
      {
        "name": "Nikon PBGPAC18 DSLR Shoulder Camera Bag for Nikon Z50 Camera",
        "img": "https://www.reliancedigital.in/medias/Nikon-PBGPAC18-DSLR-Shoulder-Camera-Bag-492579102-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODM2NnxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaGYzLzk3ODY5NzE0ODgyODYuanBnfGE2Yjc3NTA3YTlmZDFkNzNlNTk4M2FjZmNiZjI3NDE5NjcyYmFjNzIzYzNjODgzZGNmMjA4YWViNjEzMmE4MDU",
        "price": "2,990.00",
        "id": 14
      },
      {
        "name": "Mi 360 Degree Home Security Camera with 2K Video Resolution, Dual-band Wi-Fi and AI Human Detection",
        "img": "https://www.reliancedigital.in/medias/Mi-MJSXJ06CM-CAMERA-492796740-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNjg4M3xpbWFnZS9qcGVnfGltYWdlcy9oYzkvaDAyLzk4MTkzNTMzMTc0MDYuanBnfDc3MjU5YmE1ZDQ2NTlhODhiZDRlNTdiYzMxYmI5OWE5MDZhOGU5ZTViYmIwM2M2YjQ4NDBjZTAwMjhmYWEyMGE",
        "price": "4,499.00",
        "mrp": "5,999.00",
        "discount": "25%(₹1,500)",
        "id": 15
      },
]


function Camera(){
    return(
        <div>
<Box pb="32px">

<Box mb="32px" pt="32px" px="28px"><Heading  as="span" fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px" >Camera | Upto 50% off</Heading> <Link Link as="span" borderLeft="1px" color="white" px="12px" border="2px" bg="blue" p="5px"> View All</Link></Box>

  <Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
{
breakpoint: 800,
cols: 3,
rows: 1,
gap: 10,
loop: true
}
]}>
    {camera.map((camera) => (
      <Carousel.Item>

        <Box textAlign="left">
          <Box w="220px" h="185px">
          <Image cursor="pointer" w="180px" _hover={{
              w: "190px",
            }} src={camera.img}  />

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
           {camera.name}
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
                ₹{camera.price}.00
              </Box>
            </Box>

            <Box>
              M.R.P:
              <Box as="span">
                ₹{camera.mrp}
              </Box>
            </Box>

            <Box>
              You Save:
              <Box as="span" >
                {camera.discount}
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

export default Camera;