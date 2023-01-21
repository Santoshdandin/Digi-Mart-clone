
import { Badge, Box, Heading, Image ,Link} from "@chakra-ui/react";
import Carousel from "better-react-carousel";



let laptopdata=[
    {
      "name": "HP 14s-dr3001TU Laptop (Intel Pentium Silver N6000/8 GB/256 GB SSD/UHD Graphics/Windows 11 Home/MSO/HD), 35.6 cm (14 inch)",
      "img": "https://www.reliancedigital.in/medias/Hp-681Y7PA-ACJ-Laptop-493178767-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjAxOXxpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDU2Lzk5MjM5NDA2MTQxNzQuanBnfGEzZDE5OGQxNmY4M2FkMGUxODU2OTg4MDdkOTFkMmZlYmJmZjdiMDAzZTVhYzBiZmVmNThiMmYwYzhmMTkyNGI",
      "price": "32,999.00",
      "mrp": "37,000.00",
      "discount": "11%(₹4,001)",
      "id": 1
    },
    {
      "name": "HP 15s-er1501AU Standard Laptop (AMD Ryzen 3 3250U/8 GB/256 GB SSD/Radeon Graphics/Windows 11 Home/MSO/HD), 39.62 cm (15.6 Inch)",
      "img": "https://www.reliancedigital.in/medias/HP-ER1501AU-Laptop-493178397-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1ODU4NnxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDIyLzk5MDE1NTA5Mjc5MDIuanBnfDlkOGRhZGEyOWMyZWQzNTI2YTc4ZTY5ODJhYjBlNTRlZDg5YmQ5YTczM2Q2MTg0ZGRkYTE3Y2IyMmI1NTQzMDY",
      "price": "28,990.00",
      "mrp": "41,204.00",
      "discount": "30%(₹12,214)",
      "id": 2
    },
    {
      "name": "Lenovo L2IN IdeaPad 3 Laptop (11th Gen Intel Core i3-1115G4 /8GB/256GB SSD/Intel UHD Graphics/Windows 11/MSO/Full HD), 39.62 cm (15.6 inch)",
      "img": "https://www.reliancedigital.in/medias/Lenovo-L2IN-Laptops-492574725-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MTQ2NnxpbWFnZS9qcGVnfGltYWdlcy9oZmIvaGQyLzk3NDczMjk5NzQzMDIuanBnfDMxMDY2NDQ1MjE3ZDFjOTZiNjRmYTE0NTlhNmYzMWZmNGNjNjY3NzhkZjE2MTdlZTZmMzE2Yjc3NDBmNjYwMGU",
      "price": "35,499.00",
      "mrp": "59,390.00",
      "discount": "40%(₹23,891)",
      "id": 3
    },
    {
      "name": "HP 15s-fq2670TU Laptop (11th Gen Intel Core i3-1115G4/8 GB RAM/256 GB SSD/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 inch)",
      "img": "https://www.reliancedigital.in/medias/Hp-6N043PA-ACJ-Laptop-493177597-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTkyOHxpbWFnZS9qcGVnfGltYWdlcy9oNjIvaDZhLzk4ODIyODk1MzcwNTQuanBnfDAzZjY0ZjBmY2RmNWY0YzBiMWU5MGQ1YTkxYWIxMmVhZGJmYTdkNDFkYWRiMGMwNzNhOTlhNzFmM2EzNWQxZGE",
      "price": "41,400.00",
      "mrp": "45,409.00",
      "discount": "9%(₹4,009)",
      "id": 4
    },
    {
      "name": "Lenovo LJIN IdeaPad 3 Laptop (11th Gen Intel Core i3-1115G4/8GB/512GB SSD/Intel UHD Graphics/Windows 11/MSO/Full HD), 39.62 cm (15.6 inch)",
      "img": "https://www.reliancedigital.in/medias/Lenovo-LJIN-Laptops-492574616-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2ODcxN3xpbWFnZS9qcGVnfGltYWdlcy9oYjAvaGJiLzk3NDE1NjMzOTYxMjYuanBnfDk3NmMzMWI4MDZjYzU0YzJmZGUxNTJiYzI0MGRjOTQ5Nzg5ZjI1YmM3NzNmNmE3NjQ3ZTQ0NzlhMzI2ZDNlYzU",
      "price": "40,499.00",
      "mrp": "65,690.00",
      "discount": "38%(₹25,191)",
      "id": 5
    },
    {
      "name": "Lenovo IdeaPad 3 Thin and Light Laptop (11th Gen Intel Core i3-1115G4/8 GB/512 GB SSD/Windows 11 Home/MSO/FHD), 39.62 cm (15.6 Inch)",
      "img": "https://www.reliancedigital.in/medias/Lenovo-82H802L3IN-Laptop-493177740-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTg4M3xpbWFnZS9qcGVnfGltYWdlcy9oZjcvaDk4Lzk4OTQ2NDQyNTI3MDIuanBnfDUwOTkxZTdiMWYxZjVmY2M3YWI3NDRhZDVjYjViYzMwNzZjZDE4OTk4NGM2YjM2YjkxZmE5OGU5NTgxYzI3NDg",
      "price": "38,990.00",
      "mrp": "67,090.00",
      "discount": "42%(₹28,100)",
      "id": 6
    },
    {
      "name": "HP 15s-fq2672TU Laptop (11th Gen Intel Core i3-1115G4/8GB RAM/512GB SSD/UHD Graphics/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 Inch), Natural Silver",
      "img": "https://www.reliancedigital.in/medias/HP-6N045PA-ACJ-Laptop-492850808-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDMwM3xpbWFnZS9qcGVnfGltYWdlcy9oMzEvaGZjLzk4NjQyNzcyMjk1OTguanBnfGE5ZjgwMzdjYzY2MTAyMzhiZWRmNzM3OWI0NTNiMWI2MjcyNTRjMjIwNmY5ZmVlMmQwMDE3MjEyNzVmMDRmMTg",
      "price": "43,749.00",
      "mrp": "49,977.00",
      "discount": "12%(₹6,228)",
      "id": 7
    },
    {
      "name": "HP 15s-fq2671TU Laptop (11th Gen Intel Core i3-1115G4/8 GB RAM/512 GB SSD/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 inch)",
      "img": "https://www.reliancedigital.in/medias/Hp-6N044PA-ACJ-Laptop-493177596-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTYwMHxpbWFnZS9qcGVnfGltYWdlcy9oYTIvaDMwLzk4ODIyOTA4NDc3NzQuanBnfDgzNzE4ZTExMDNkZmY1YmM2MzQyMWUwY2Y2NGRjMTA1MDJjNDVkNjQ5MTk0ZWIyMTA2NWQwY2I2MWNjOGQzZWI",
      "price": "39,999.00",
      "mrp": "47,833.00",
      "discount": "16%(₹7,834)",
      "id": 8
    },
    {
      "name": "Asus EK522WS Laptop (11th Gen Intel Core i5-1135G7/8 GB/512 GB SSD/Iris Xe Graphics/Windows 11 Home/MSO/FHD), 35.56 cm (14 Inch)",
      "img": "https://www.reliancedigital.in/medias/Asus-X415EA-EK522WS-Laptop-493178259-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTUyNHxpbWFnZS9qcGVnfGltYWdlcy9oZWQvaDM5Lzk5MDQ3MzE1MjEwNTQuanBnfDk2NmRmZTZjNzNiMTlkMjgwMWJiM2E0NjdmOTM4NzJjM2Y5ZTAyZmJmMjZhYmIxYmJjZTVjYzNkMDlmMDE1YWQ",
      "price": "49,999.00",
      "mrp": "70,990.00",
      "discount": "30%(₹20,991)",
      "id": 9
    },
    {
      "name": "HP 15s-fq5111TU Laptop (12th Gen Intel Core i5-1235U/8 GB RAM/512 GB SSD/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 inch)",
      "img": "https://www.reliancedigital.in/medias/Hp-6P129PA-ACJ-Laptop-493177598-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTYxMnxpbWFnZS9qcGVnfGltYWdlcy9oMzIvaDBjLzk4ODIyODk4NjQ3MzQuanBnfDc4ZGI4NTAzOGE1MWFhMTkyZTUxNGEzNjhlYTExMTA5YjEwNDFkNjVjNWVhNTAzZTkxNDE0YTNhZWFiZTIwZGQ",
      "price": "57,928.00",
      "mrp": "67,831.00",
      "discount": "15%(₹9,903)",
      "id": 10
    },
    {
      "name": "HP 15s-fr5007TU Laptop (12th Gen Intel Core i5-1235U/8GB RAM/512GB SSD/Iris Xe Graphics/Windows 11 Home/MSO/FHD), 39.6 cm (15.6 Inch), Natural Silver",
      "img": "https://www.reliancedigital.in/medias/HP-6P130PA-ACJ-Laptop-493177048-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDMwM3xpbWFnZS9qcGVnfGltYWdlcy9oMzYvaDBkLzk4NjQyNzY5MDE5MTguanBnfGMxNGRkOTVkMjdmOGJjODBhZGIzYTFkNmQ1OTJmYjE5MjdhMmQ1Y2FmMzIyNGY2ODAwMGNiYTRjZDMyMDY4MmE",
      "price": "60,499.00",
      "mrp": "68,000.00",
      "discount": "11%(₹7,501)",
      "id": 11
    },
    {
      "name": "Asus EK562WS Laptop (11th Gen Intel Core i5-1135G7/8GB+32GB Intel Optane/512GB SSD/Intel Iris Xe Graphics/Windows 11/MSO/Full HD), 35.56 cm (14 inch)",
      "img": "https://www.reliancedigital.in/medias/Asus-EK562WS-Laptop-492574733-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NDQwM3xpbWFnZS9qcGVnfGltYWdlcy9oYjYvaGE4Lzk3NTEzNTk1ODYzMzQuanBnfDI2ZGEyZjEyZTUyMWQxMGM5ODMyMjQwMzI4YTVmNjE1ZTZjNWNkMjkzYTMyODk0YmNiNzYzNWE0MmVmMzUxNDA",
      "price": "48,990.00",
      "mrp": "69,990.00",
      "discount": "30%(₹21,000)",
      "id": 12
    },
    {
      "name": "Apple MGN63HNA MacBook Air (Apple M1 Chip/8GB/256GB SSD/macOS Big Sur/Retina), 33.78 cm (13.3 inch)",
      "img": "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjM5M3xpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDE0Lzk0NDMwODM3ODAxMjYuanBnfGUwMGRjNjBhZDVlM2NlMmUyYmFhMTk1MjNmMDM5NTEzMWUzODRhODE0ZjdmOWM2OGEyODBjYjhjMGNlOWExZWY",
      "price": "86,990.00",
      "mrp": "99,900.00",
      "discount": "13%(₹12,910)",
      "id": 13
    },
    {
      "name": "Apple MGND3HNA MacBook Air (Apple M1 Chip/8GB/256GB SSD/macOS Big Sur/Retina), 33.78 cm (13.3 inch)",
      "img": "https://www.reliancedigital.in/medias/Apple-MGND3HNA-Laptops-491946465-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0ODM0OXxpbWFnZS9qcGVnfGltYWdlcy9oMDAvaGIwLzk0NDMwOTEzMTY3NjYuanBnfDE1MTdiNjJmZTFlZTgxY2I1MDhkZDI1ZmU1ZjExMmQyYWQzODUxYmY3M2M4ZDhiNGUwYWFiOGY0NTNlODVmMmU",
      "price": "88,990.00",
      "mrp": "99,900.00",
      "discount": "11%(₹10,910)",
      "id": 14
    },
    {
        "name": "Apple MNEH3HNA MacBook Pro (Apple M2 chip/8GB/256GB/macOS Monterey/Retina), 33.74 cm (13.3 inch)",
        "img": "https://www.reliancedigital.in/medias/Apple-MNEH3HNA-MacBook-Pro-492850658-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNzE1MnxpbWFnZS9qcGVnfGltYWdlcy9oNjQvaDlkLzk4NDU1NDQ3NDcwMzguanBnfDNhMGM5NGJmOWI4YTRmZjBiZmU4YzlkZGQwMGVlOTg0ODdmN2U1ZGQ0ZjkzODQyYWFkMjMwNjM3NTNiMTQ1NzE",
        "price": "1,13,013.00",
        "mrp": "1,29,900.00",
        "discount": "13%(₹16,887)",
        "id": 15
      },
]

function Eightpart(){
    return(
        <div>

<Box pb="32px">

<Box mb="32px" pt="32px" px="28px"><Heading  as="span" fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px" >Trending Laptops</Heading> <Link Link as="span" borderLeft="1px" color="blue" px="12px"> View All</Link></Box>

  <Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
{
breakpoint: 800,
cols: 3,
rows: 1,
gap: 10,
loop: true
}
]}>
    {laptopdata.map((laptop) => (
      <Carousel.Item>

        <Box textAlign="left">
          <Box w="220px" h="185px">
          <Image cursor="pointer" w="180px" _hover={{
              w: "190px",
            }} src={laptop.img}  />

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
           {laptop.name}
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
                ₹{laptop.price}.00
              </Box>
            </Box>

            <Box>
              M.R.P:
              <Box as="span">
                ₹{laptop.mrp}
              </Box>
            </Box>

            <Box>
              You Save:
              <Box as="span" >
                {laptop.discount}
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

export default Eightpart;