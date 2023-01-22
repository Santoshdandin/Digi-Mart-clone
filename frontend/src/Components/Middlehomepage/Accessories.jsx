import { Badge, Box, Heading, Image ,Link} from "@chakra-ui/react";
import Carousel from "better-react-carousel";




let assessories=[
    {
        "name": "Neopack Silicon Mobile Case for iPhone XS Max, Sand Pink 42PNXMAX",
        "img": "https://www.reliancedigital.in/medias/Neopack-42PNXMAX-Bags-Cases-491488112-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODQ1N3xpbWFnZS9qcGVnfGltYWdlcy9oYTQvaGVlLzkwNjcxMTg1NTkyNjIuanBnfGYzMjg5OTFhMmQ3MDE5MmI0ZmI4Y2MyMDIxYjE4NjIyNmE2MDMwMTczYzhhNmI3NTNlOWMyMmYxZjYyMDU3MmY",
        "price": "999.00",
        "mrp": "1,699.00",
        "discount": "41%(₹700)",
        "id": 1
      },
      {
        "name": "Neopack Tablet Flip Case for 24.63 cm (9.7 inch) iPad, iPad Pro, Black FCBK97",
        "img": "https://www.reliancedigital.in/medias/Neopack-FCBK97-Bags-Cases-491488276-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODMxN3xpbWFnZS9qcGVnfGltYWdlcy9oOTIvaDE4LzkwNjcxMTQyOTk0MjIuanBnfGE0Njg1ZjYxOTM4YzdlMDk3ZjM1ZTczZjJmMzA2OWY4NTI3NzI0ZjUzMTBhM2U3MmNlNzgyMDViZjFmMTAzNzE",
        "price": "2,499.00",
        "id": 2
      },
      {
        "name": "Inbase Carbon Mobile Case for iPhone XS, Gold 555",
        "img": "https://www.reliancedigital.in/medias/In-Base-IB-555-Bags-and-Cases-491488071-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5OTA3fGltYWdlL2pwZWd8aW1hZ2VzL2hkNi9oYWQvOTA3MjEyMjg1NTQ1NC5qcGd8NzBjMDdhY2NiOWY4YjhlMmU2YTc0YjM2NDc2OGVjMzhhNWQxM2NmMTQwMGMxNTRlMjRkNzkwMWY5NjQwYzhmOA",
        "price": "344.00",
        "mrp": "1,499.00",
        "discount": "77%(₹1,155)",
        "id": 3
      },
      {
        "name": "Inbase Carbon Mobile Case for iPhone XS, Black",
        "img": "https://www.reliancedigital.in/medias/In-Base-IB-553-Bags-and-Cases-491488069-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0OTgzfGltYWdlL2pwZWd8aW1hZ2VzL2gwNC9oOGEvOTA3MjEyMDEwMjk0Mi5qcGd8NDNkMTlkMTI3NDVhMzYwYTMzNTkzY2U2MjUzZDkyNThjZDIzZDJjOGRkZDU0NzJiMjUwZTdiZThhMGYwZDQyYw",
        "price": "344.00",
        "mrp": "1,499.00",
        "discount": "77%(₹1,155)",
        "id": 4
      },
      {
        "name": "Neopack 8BK15 Laptop Bag for 35.81 cm (14.1 inch) & 39.11 cm (15.4 inch) Laptop, Black",
        "img": "https://www.reliancedigital.in/medias/Neopack-8BK15-Bags-Cases-491211454-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NDc2fGltYWdlL2pwZWd8aW1hZ2VzL2g0Yi9oOGEvOTA0OTY1NTA4MzAzOC5qcGd8NmQwMDQxNDMwZGVlYzcwN2U3MWRkZTEyODQ4ZTgwMDY0NWFjMDc0YWM5ODg2ZmQyMmVjNjQ2YTQ0MTRmMWE5OQ",
        "price": "2,499.00",
        "id": 5
      },
      {
        "name": "VIVA MADRID AirArmor Mobile Case for iPhone 7, Clarity",
        "img": "https://www.reliancedigital.in/medias/VIVA-MADRID-AirArmor-Mobile-Case-for-iPhone-7-Clarity-491315453-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNzUwOXxpbWFnZS9qcGVnfGltYWdlcy9oZGMvaDU1Lzg5NjQyNTQwNDAwOTQuanBnfDY4NDRjNDhlODZjMmVmZGViNzEwMjI2MmM5NzIyNTkxYmRlYzA3MGYwMzBlMWUwOGNhNGZmZGUxMGIzNDZlNTk",
        "price": "999.00",
        "mrp": "1,599.00",
        "discount": "38%(₹600)",
        "id": 6
      },
      {
        "name": "Neopack Urban Messenger Bag, Brown",
        "img": "https://www.reliancedigital.in/medias/1aee9b40-3daf-4445-814c-fe67848891df-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MDYyNXxpbWFnZS9wbmd8aW1hZ2VzL2gyNi9oNzEvODgwMjM5MzI5MjgzMC5wbmd8MTYwYTU4Y2M5ZTFiOGViNjZiOWQ3YmE0OTYzYjE5MzUxNWYwOTIzYWI1ZDAxOGNmZWYxMjFhNDM3YzQ0YjUwNg",
        "price": "3,799.00",
        "mrp": "3,999.00",
        "discount": "5%(₹200)",
        "id": 7
      },
      {
        "name": "Neopack Urban Messenger Bag, Black",
        "img": "https://www.reliancedigital.in/medias/Neopack-Urban-Messenger-Bag-Black-490917292-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDM5OHxpbWFnZS9qcGVnfGltYWdlcy9oODgvaGRhLzg5MzI3NDE0MTQ5NDIuanBnfGYwNmY0NWQwNjYwMTdiMzQ2M2NmZTY0YjYyODFlZGFhZTcwYTU4MDFlNmMyZDZhYTFjOWY5OTRjMjAwMjYxZjg",
        "price": "3,799.00",
        "mrp": "3,999.00",
        "discount": "5%(₹200)",
        "id": 8
      },
      {
        "name": "Neopack Hard Drive Case, Black",
        "img": "https://www.reliancedigital.in/medias/a938e44b-5bb1-4849-981f-c148ce3c949f-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjI3M3xpbWFnZS9wbmd8aW1hZ2VzL2gxOC9oNzEvODgwMjMzMTg4NTU5OC5wbmd8ZmZlYTE5Y2Y4MjU5MjVjOWM5MmQ4YTE5ZmE3Mjg5ZTgxM2JiYjgzZTkxNTliZTVjNTQyMGJlZDQyYmIyOTgzMA",
        "price": "399.00",
        "mrp": "2,499.00",
        "discount": "84%(₹2,100)",
        "id": 9
      },
      {
        "name": "Reconnect PC Mobile Case for LYF Water 1",
        "img": "https://www.reliancedigital.in/medias/Reconnect-PC-Mobile-Case-for-LYF-Water-1-491228968-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDkyM3xpbWFnZS9qcGVnfGltYWdlcy9oNDQvaDI2LzkzOTgxMzUxMjgwOTQuanBnfGRiNGQyOWRhOTk0ZWI5NGUyYzRkZDRhYzA5ZWRjODcyZGZjNDk3Yjg5N2JkY2E2ZjZhM2U4ZWY2Njc0Y2ZmNTE",
        "price": "99.00",
        "mrp": "899.00",
        "discount": "89%(₹800)",
        "id": 10
      },
      {
        "name": "Neopack Laptop Sleeve for 30.48 cm (12 inch) Laptops, Black",
        "img": "https://www.reliancedigital.in/medias/Neopack-Bags-and-Cases-490917256-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaDRlLzg5Mzk2MTQyNDA3OTguanBnfDY4MGY1ZGFkZmVlZjY0OGJlZjhhNmVkZTJiNzU2ZTc1Njc2YTc2ZmRjNzY5Y2I3OTlmMmNjZmE2OWU0M2UxN2M",
        "price": "999.00",
        "id": 11
      },
      {
        "name": "Inbase Luxury IB-559 Mobile Case for iPhone XR, Black",
        "img": "https://www.reliancedigital.in/medias/Inbase-IB-559-Bags-and-Cases-491488491-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTE1fGltYWdlL2pwZWd8aW1hZ2VzL2g5Zi9oMTcvOTA3NzQzNDc0NDg2Mi5qcGd8M2JkYjg0MmQ3OWMwZjNjNDU3NDA1OTJmMmFjNDg4YTZhZWRjODZiNGZjOGE1MDU5ZDNkZDQ1M2Y2Mzc3YmEzNg",
        "price": "699.00",
        "mrp": "1,299.00",
        "discount": "46%(₹600)",
        "id": 12
      },
      {
        "name": "Inbase Luxury IB-561 Mobile Case for iPhone XR, Gold",
        "img": "https://www.reliancedigital.in/medias/Inbase-IB-561-Bags-and-Cases-491488493-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MDEwfGltYWdlL2pwZWd8aW1hZ2VzL2hiNy9oMTkvOTA3NzQzNjcxMDk0Mi5qcGd8Y2YwMDZiYTQwZDhkODkxYjQzZmI2MzgwYjgwNDVkMWJlNWRjYTViMmZjMDJmYTdlZjQ2ZTlhNmIwZGJjNmRjMg",
        "price": "999.00",
        "mrp": "1,299.00",
        "discount": "23%(₹300)",
        "id": 13
      },
      {
        "name": "Inbase Luxury IB-560 Mobile Case for iPhone XR, Blue",
        "img": "https://www.reliancedigital.in/medias/Inbase-IB-560-Bags-and-Cases-491488492-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDI3NXxpbWFnZS9qcGVnfGltYWdlcy9oYmIvaDkyLzkwNzc0MzM3NjE4MjIuanBnfDE4ZDZmYTM0NjQ3ODQ0OGM5NjhjMmNmYTZlNzlmOWNkMWIwYjZiM2RiZGQ4OWQ5NmRiODc5ODBjZmQ0OGZlMWM",
        "price": "999.00",
        "mrp": "1,299.00",
        "discount": "23%(₹300)",
        "id": 14
      },
      {
        "name": "ItSkins HybridMKII Mobile Case for iPhone XS Max, Black/Transparent",
        "img": "https://www.reliancedigital.in/medias/ITSkins-APXP-HYBMK-BKTR-Bags-and-Cases-491420229-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4ODMwfGltYWdlL2pwZWd8aW1hZ2VzL2gyZS9oYWEvOTA3OTc1Mjc4NTk1MC5qcGd8NTFjZDNhNzdmODU4NzAxNjFiYjUzOWNiZGFhYjJlOWZlYjRjYTFhNDMxZDM4MjNhMGQ2NzRlODdiMmU2Yzk0YQ",
        "price": "899.00",
        "mrp": "1,499.00",
        "discount": "40%(₹600)",
        "id": 15
      },
      {
        "name": "Neopack Laptop Sleeve for 39.62 cm (15.6 inch) Laptop, Black 3BK17",
        "img": "https://www.reliancedigital.in/medias/Neopack-3BK17-Bags-and-Cases-491538845-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MTA5fGltYWdlL2pwZWd8aW1hZ2VzL2g5Mi9oZDAvOTA5NTkzNDM3ODAxNC5qcGd8YzA5YmM2YTAzZjM2NjVmODJhYmU2ZjJiMjYxOWYxZTk0OWI3OWJhZGVjYjgyMjZlYzJiZTk4ZjIyZmU2NTlmZg",
        "price": "1,699.00",
        "id": 16
      },
      {
        "name": "Neopack Tablet Flip Case for Apple iPad 24.63 cm (9.7 inch), Tan 50TN97",
        "img": "https://www.reliancedigital.in/medias/Neopack-50TN97-Bags-and-Cases-491503482-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0OTU4fGltYWdlL2pwZWd8aW1hZ2VzL2hiZi9oYzQvOTA4NzY3MDU1MDU1OC5qcGd8YWE1ZTdjNzRmZTA0OWJlMTQ2YzdhNTFhMjgyOTUzNjEzYWY5ZDAxNmQ1ZDFlNGU4YzE5ZDAwODI5YjQ1M2U4ZQ",
        "price": "1,999.00",
        "id": 17
      },
      {
        "name": "Sony Camera Pouch for Sony Camcorder, Black MII-HD2",
        "img": "https://www.reliancedigital.in/medias/SONY-CAMERA-POUCH-MII-HD2-FOR-HX400-H400-491163561-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5NDk0fGltYWdlL2pwZWd8aW1hZ2VzL2hkOC9oZDAvOTEwMzM3MzEzOTk5OC5qcGd8ODY1YzFkMTFhODk0OWYxZjY4ODYyZTEwYzM0YTkxZWVjODQ0NDdhNTdmM2U5ZjQ3OGMwYzE4OTYzY2IzZWRmMg",
        "price": "499.00",
        "mrp": "690.00",
        "discount": "28%(₹191)",
        "id": 18
      },
      {
        "name": "Neopack Trifold Smart Delta Tablet Flip Case For Ipad Pro 11, Black",
        "img": "https://www.reliancedigital.in/medias/Neopack-Delta-Case-For-Ipad-Pro-11-Black-491570605-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDkyfGltYWdlL2pwZWd8aW1hZ2VzL2hkYS9oZjYvOTE0NTYyNjA2Njk3NC5qcGd8ZWQ4Njk3NmQ5N2MzNzhlZjQzYTAyM2NiMTMyOWZjYWNkYTIxNzdiNGMwMzAyZTVjZjQwNjRmYTViZjlkNTMwMQ",
        "price": "1,499.00",
        "mrp": "2,499.00",
        "discount": "40%(₹1,000)",
        "id": 19
      },
      {
        "name": "Neopack Clear Hybrid Mobile Case for Apple iPhone 13 Mini",
        "img": "https://www.reliancedigital.in/medias/Neopack-iPhone-13-Mini-Cases-and-Pouches-491997787-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODM1MXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDA0Lzk2Mzk5NTg4MzkzMjYuanBnfDU3OGYwMWNjMzZiZTBlNzY5NTBmNWFmNjY3MjdlMmVmOGU4YmNkNjUwMWU3YWIzZTdhMmQ3ZmRiMTNhYzg4NWU",
        "price": "999.00",
        "mrp": "1,999.00",
        "discount": "50%(₹1,000)",
        "id": 20
      },
      {
        "name": "ITSkins SpectrumClear Mobile Case for Samsung Galaxy Note 10, Clear",
        "img": "https://www.reliancedigital.in/medias/ITSkins-SAMSUNG-NOTE-10-Mobile-Cases-491584271-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3ODAwfGltYWdlL2pwZWd8aW1hZ2VzL2g5NC9oYjQvOTE5ODc1Njk4NjkxMC5qcGd8YmY1MjQ2YTBkZDRlZjY1N2UwYmNlYjhmYTU4YzNjNDJlM2JkMjdlYmUzM2NiZDBiZDY1M2VjNWQ1NDVmODljZg",
        "price": "599.00",
        "mrp": "1,999.00",
        "discount": "70%(₹1,400)",
        "id": 21
      },
      {
        "name": "ITSkins SpectrumClear Mobile Case for Samsung Galaxy Note 10+, Clear",
        "img": "https://www.reliancedigital.in/medias/ITSkins-SAMSUNG-NOTE-10plus-Mobile-Cases-491584272-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NjE2fGltYWdlL2pwZWd8aW1hZ2VzL2g2NS9oNTYvOTE5ODc1NjY1OTIzMC5qcGd8M2VhMDFlMWJjODE5NTRlMTUxMjM4NTBjNzZjMmI1N2ViYzgxOWYxMzMwZDQ3ODZiN2ExYTU5MWZiY2E0YmQwYg",
        "price": "599.00",
        "mrp": "1,999.00",
        "discount": "70%(₹1,400)",
        "id": 22
      },
      {
        "name": "Apple Silicone Mobile Case for Apple iPhone 11 Pro, Midnight Blue",
        "img": "https://www.reliancedigital.in/medias/Apple-MWYJ2ZM-A-Mobile-Cases-491584647-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzODQ3fGltYWdlL2pwZWd8aW1hZ2VzL2hiMS9oMGUvOTIwNzQxNDU4NzQyMi5qcGd8MjVkOGVjY2ZkOTAxOTVmMGMzOTM1ZjBkNjNiZTk3MDNlMmIzNGM2MGVlMjNkODQyNTM4YmEzZmJhMzAwMDcyMg",
        "price": "3,500.00",
        "id": 23
      },
      {
        "name": "Apple Silicone Mobile Case for Apple iPhone 11 Pro, Black",
        "img": "https://www.reliancedigital.in/medias/Apple-MWYN2ZM-A-Mobile-Cases-491584646-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTQ2fGltYWdlL2pwZWd8aW1hZ2VzL2g1Zi9oNjAvOTIwNzQxNjIyNTgyMi5qcGd8NDgyYmUwMThmYzhiNjk2NzgzMzNiNDVhMzY5MzYzYmExOTRmMTk4NzM0NmM3MmY3M2U4Y2EyMzM4ZDE0ZTcyMQ",
        "price": "3,500.00",
        "id": 24
      }
]

function Accessories(){
    return(
        <div>
<Box pb="32px">

<Box mb="32px" pt="32px" px="28px"><Heading  as="span" fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px" >Accessories | Upto 50% off</Heading> <Link Link as="span" borderLeft="1px" color="white" px="12px" border="2px" bg="blue" p="5px"> View All</Link></Box>

  <Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
{
breakpoint: 800,
cols: 3,
rows: 1,
gap: 10,
loop: true
}
]}>
    {assessories.map((assessories) => (
      <Carousel.Item>

        <Box textAlign="left">
          <Box w="220px" h="185px">
          <Image cursor="pointer" w="180px" _hover={{
              w: "190px",
            }} src={assessories.img}  />

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
           {assessories.name}
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
                ₹{assessories.price}.00
              </Box>
            </Box>

            <Box>
              M.R.P:
              <Box as="span">
                ₹{assessories.mrp}
              </Box>
            </Box>

            <Box>
              You Save:
              <Box as="span" >
                {assessories.discount}
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

export default Accessories;