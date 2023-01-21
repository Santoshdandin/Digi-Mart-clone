import { Badge, Box, Heading, Image ,Link} from "@chakra-ui/react";
import Carousel from "better-react-carousel";


let personal=[

    {
        "name": "BPL Men's 10-in-1 Grooming Kit with Digital Battery Indicator, 70mins Cordless Usage, Fast Charging, 5-Heads & 5-Comb Length Adjustment, Detachable Heads for easy cleaning, 2 Years Warranty, Black and Light Gold",
        "img": "https://www.reliancedigital.in/medias/BPL-BBTD001GK-Shaver-and-Trimmers-491903184-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0Mjc2M3xpbWFnZS9qcGVnfGltYWdlcy9oZGEvaDUwLzk2MjExMzQwMTY1NDIuanBnfDU4YWM2ZDBiZDQwNjM5ZjEwMzQ0ZjEyMTU0OWZmM2MzOWUzZDVlZmI0NDUwYTU1YTdlYzIxMzRjYmRmMmQwOGE",
        "price": "999.00",
        "mrp": "2,799.00",
        "discount": "64%(₹1,800)",
        "id": 1
      },
      {
        "name": "Lifelong LLPCM13 Men's Beard Trimmer, Black",
        "img": "https://www.reliancedigital.in/medias/Lifelong-LLPCM13-Shavers-and-Trimmers-491903024-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODc3NHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaDRjLzk0NzA5MjU4NjQ5OTAuanBnfDIyNzNmNDU2ZmQwYTE0MTBlM2I4ZTk3MjdkNWFkZWQ1YmFiMmMxNzMyMzlhMjFmY2Y3OWY3YTFkNWIyMjg1ZjA",
        "price": "559.00",
        "mrp": "1,200.00",
        "discount": "53%(₹641)",
        "id": 2
      },
      {
        "name": "Philips BT3102/15 cordless rechargeable Beard Trimmer - 10 length settings, 60 min run time",
        "img": "https://www.reliancedigital.in/medias/Philips-BT3102-15-Shaver-and-Trimmers-491891822-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTE5NHxpbWFnZS9qcGVnfGltYWdlcy9oMjAvaDJmLzkzMzI2NjMxMjM5OTguanBnfDcwNDg1ZTA4OTg0MzllNzFjMDU3MDk2N2Q3NWJmMTUzZGE1MzZlOGNhY2VjZjllOTU3OTM2YjFkZDYzOGJkZWQ",
        "price": "1,249.00",
        "mrp": "1,495.00",
        "discount": "16%(₹246)",
        "id": 3
      },
      {
        "name": "Misfit by boAt T30 RTL Men's Trimmer, Active Black",
        "img": "https://www.reliancedigital.in/medias/MISFIT-T30-Trimmer-492910929-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjIxfGltYWdlL2pwZWd8aW1hZ2VzL2g4OS9oNDMvOTgxNzQwMTEzMTAzOC5qcGd8MzQ4ZjBiZmQwNzA0YTUxOTQ0OWZlYWQ5ZmFiZWMwZTI4YzYwMTEwMDRmY2FlNmY1ZTc0NTE4MjFjZjRkMzNkNg",
        "price": "449.00",
        "mrp": "1,499.00",
        "discount": "70%(₹1,050)",
        "id": 4
      },
      {
        "name": "Wahl Cordless Trimmer Mini Groomsman 3 in 1 Grooming Kit, 05608-524 Black",
        "img": "https://www.reliancedigital.in/medias/WAHL-05608-524-Trimmers-491891812-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDQ4OXxpbWFnZS9qcGVnfGltYWdlcy9oNmYvaDZiLzkzNzQ2NTAyMzY5NTguanBnfDI0NDY2NDIwZGRhYWNhYTBiZTU2YjVkOWUzYzk3NzYxODUxNzc4MTgyNGYxYzU2YTM2MTdiYzZiZjhhYWQ1ZGU",
        "price": "199.00",
        "mrp": "1,000.00",
        "discount": "80%(₹801)",
        "id": 5
      },
      {
        "name": "Philips Beard Trimmer BT1230/15 with USB Charging",
        "img": "https://www.reliancedigital.in/medias/Philips-BT1230-15-TRIMMER-492664323-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MzcyfGltYWdlL2pwZWd8aW1hZ2VzL2g1OS9oYjkvOTc0OTU4NTc4ODk1OC5qcGd8M2JlNGNiNjc3MDUxODY2ZjAwMGQyODE2NTdiOTZkZmM2ODY5Yjg4NDMyMDc0ZDQ1MTE3MWIzMDg0NjgxNTM2NQ",
        "price": "699.00",
        "mrp": "945.00",
        "discount": "26%(₹246)",
        "id": 6
      },
      {
        "name": "Wahl Grooming Kit Mini T Pro, White and Black",
        "img": "https://www.reliancedigital.in/medias/WAHL-Mini-T-Pro-Trimmers-492910963-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1Mjg3OHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGNhLzk4MjkwMjQxMDQ0NzguanBnfDIwM2FlYWE3YjVjMjY1YTE4MmI1MTlmMGI1NWZmYmU3NzAzZjRkMTE5MThmMjI3YjNjMGQyMzBjZGQ1MDk1NWM",
        "price": "799.00",
        "mrp": "1,649.00",
        "discount": "52%(₹850)",
        "id": 7
      },
      {
        "name": "Phillips 7000 13-in-1 Multigroom Trimmer with Self-sharpening Blades, MG7715/65",
        "img": "https://www.reliancedigital.in/medias/Philips-MG7715-65-Trimmer-492864867-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTE0OXxpbWFnZS9qcGVnfGltYWdlcy9oZWIvaDdiLzk4MzE3NzM5Mjk1MDIuanBnfGRiNGVlMmNlMjdhYzdlNjQ2Mzg1MjY2ZTBkODU5OGZiZWVjZDRiZDkwMDk1MzdlMTRiOTNlMjk1OTFiYjA1NWQ",
        "price": "3,492.00",
        "mrp": "4,595.00",
        "discount": "24%(₹1,103)",
        "id": 8
      },
      {
        "name": "Philips MG5740/15 Grooming Kit with Self-sharpening blades & 12 tools",
        "img": "https://www.reliancedigital.in/medias/Philips-MG5740-15-TRIMMER-492391977-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjE5M3xpbWFnZS9qcGVnfGltYWdlcy9oOWYvaDMzLzk3NzU4NzYyNzYyNTQuanBnfDFmZTc4NzYyODQ5ODcwNGI0MmZiNDk3YTIyYTY0OTNjYjQ4NzA4NmE3ODgwMzAwYTU0NTk3Mzg5ZDVlYzg4N2Y",
        "price": "2,399.00",
        "mrp": "2,995.00",
        "discount": "20%(₹596)",
        "id": 9
      },
      {
        "name": "Wahl Quickstyle Men's Trimmer, Grey",
        "img": "https://www.reliancedigital.in/medias/WAHL-Quickstyle-Trimmers-491189131-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTI2NHxpbWFnZS9qcGVnfGltYWdlcy9oYmMvaGUzLzk4NjU1Nzc0NjM4MzguanBnfGFlZWJiNzg0YmM2M2E5ZTVmMTY0YTRiYjcyMzI0MzE5ZDIxYjJhODQwNmJlN2VjMmUzZjY2ZjQzYTQ5MDg5NzQ",
        "price": "449.00",
        "mrp": "1,095.00",
        "discount": "59%(₹646)",
        "id": 10
      },
      {
        "name": "Reconnect Iron Man Beard Trimmer with Easy to Clean Detachable Head, Laser Guided for Sharp Precision, 2 Precision Combs 0.5-20mm, 90mins Usage Time, Battery Charging Indicator, 2 Years Warranty",
        "img": "https://www.reliancedigital.in/medias/Reconnect-DBT301-Shaver-and-Trimmers-491604302-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4NDc5NHxpbWFnZS9qcGVnfGltYWdlcy9oMDAvaDRkLzk0MjUzOTA0MDM2MTQuanBnfDUzM2Q4NTY0YmFlM2RiMDVlZmZhMDNjZTY3YjM4MzA5NWZkYzM4MmQ5NmQzZDZhOGY1ZGQyNTUzZTJhY2M3Nzc",
        "price": "349.00",
        "mrp": "2,799.00",
        "discount": "88%(₹2,450)",
        "id": 11
      },
      {
        "name": "Reconnect Black Panther 7-in-1 Multi Grooming Kit with 45-degree Precision Blade, Washable Heads, 1hr Usage Time, Battery Charging Indicator, 2 Years Warranty",
        "img": "https://www.reliancedigital.in/medias/Reconnect-DMGK101-Shaver-and-Trimmers-491604304-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MDQzM3xpbWFnZS9qcGVnfGltYWdlcy9oZDAvaGVmLzk0MjUzOTAwNzU5MzQuanBnfDMwZjhlNzFjOWY4YTRkYzhkN2MzMzczNzcxZWE3NzFjMjIwZTY0YTBjODkxZDdlMWRlNTZkOWU2MmM5ZGM5MDY",
        "price": "349.00",
        "mrp": "3,299.00",
        "discount": "89%(₹2,950)",
        "id": 12
      },
      {
        "name": "MI 1C Men's Beard Trimmer",
        "img": "https://www.reliancedigital.in/medias/MI-BHR4005IN-Shavers-and-Trimmers-491902816-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjE4MXxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaGQ5LzkzNzMwNzU4MDAwOTQuanBnfDcwZjI3ODhjNjk1OGJmYWQ4ZGFlZGUwYTFiMjBiMTNjNjdkZmVlOGM1MDZhYzQ4MjFjY2NkOGY5NjA2NTVlMDc",
        "price": "1,099.00",
        "mrp": "1,199.00",
        "discount": "8%(₹100)",
        "id": 13
      },
      {
        "name": "Philips 1000 BT1235/15 Men's Trimmer with Travel Lock",
        "img": "https://www.reliancedigital.in/medias/Philips-BT1235-15-Trimmers-492391976-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MDU1N3xpbWFnZS9qcGVnfGltYWdlcy9oYzEvaGMyLzk3ODk3Njc4MTExMDIuanBnfGI4ZDNiNzVmOTNhMzgzNDkyNjE3YWU5MGM2MjM3ZjcxZjE0MmE4YTkzMDg2MTIyZTEwOTkwNTE0MzBiMzFlNDk",
        "price": "1,020.00",
        "mrp": "1,195.00",
        "discount": "15%(₹175)",
        "id": 14
      },
      {
        "name": "Reconnect cordless rechargeable Beard Trimmer RHTRG0001 - 20 length settings/ 35 mins runtime",
        "img": "https://www.reliancedigital.in/medias/Reconnect-RHTRG0001-Trimmer-491332808-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1Mjk5NnxpbWFnZS9qcGVnfGltYWdlcy9oMGQvaGM2LzkzMjY5NDgwNTcxMTguanBnfDZkZDkyNjA0YmJiY2FkZWFmYzg5ODcwOTkzYTlmNWIwMjRhODg3MDhiNWE4YjJjM2E5ZjQxMzk3NDA3ZmJiNTQ",
        "price": "870.00",
        "mrp": "1,499.00",
        "discount": "42%(₹629)",
        "id": 15
      },
]

function Personalcare(){
    return(
        <div>
<Box pb="32px">

<Box mb="32px" pt="32px" px="28px"><Heading  as="span" fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px" >Personal Care Accessories | Upto 60% off</Heading> <Link Link as="span" borderLeft="1px" color="white" px="12px" border="2px" bg="blue" p="5px"> View All</Link></Box>

  <Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
{
breakpoint: 800,
cols: 3,
rows: 1,
gap: 10,
loop: true
}
]}>
    {personal.map((personal) => (
      <Carousel.Item>

        <Box textAlign="left">
          <Box w="220px" h="185px">
          <Image cursor="pointer" w="180px" _hover={{
              w: "190px",
            }} src={personal.img}  />

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
           {personal.name}
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
                ₹{personal.price}.00
              </Box>
            </Box>

            <Box>
              M.R.P:
              <Box as="span">
                ₹{personal.mrp}
              </Box>
            </Box>

            <Box>
              You Save:
              <Box as="span" >
                {personal.discount}
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

export default Personalcare;