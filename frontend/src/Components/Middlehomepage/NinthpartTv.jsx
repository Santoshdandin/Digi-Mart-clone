import { Badge, Box, Heading, Image ,Link} from "@chakra-ui/react";
import Carousel from "better-react-carousel";


let tvdata=
[
  {
    "name": "MI 32 HD Ready Smart LED TV, 4A Horizon, ELA4546IN",
    "img": "https://www.reliancedigital.in/medias/Mi-4A-Horizon-Edition-Television-492166368-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNjcxM3xpbWFnZS9qcGVnfGltYWdlcy9oNDcvaDk4Lzk3OTA4NzQ3MTQxNDIuanBnfDhjNDk4M2M1MTM1YTViZmFkMTY1NGM1ZmU4ZjFiODNiOGQ2NTMyYzUxYjg0NWJmYWE4MjIzODg4YmEzMWM5ZDY",
    "price": "16,499.00",
    "mrp": "19,999.00",
    "discount": "18%(₹3,500)",
    "id": 1
  },
  {
    "name": "IFFALCON 139.7 cm (55 Inch) Ultra HD (4K) Smart LED TV, 55U71",
    "img": "https://www.reliancedigital.in/medias/Iffalcon-55U71-Television-493179244-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjUyMXxpbWFnZS9qcGVnfGltYWdlcy9oZDMvaGM0Lzk4OTU3NzUwMTA4NDYuanBnfDhlMGU4MDEzNjUzZGNmYzM4ZTkzNTA2OGUwNDkyY2Y2ZTZkMzI5NzIyZjQzMzgzYzI1OTU0MTY5MGZjYTk5M2Y",
    "price": "25,990.00",
    "mrp": "70,990.00",
    "discount": "63%(₹45,000)",
    "id": 2
  },
  {
    "name": "Samsung Wondertainment 80 cm (32 Inch) Smart HD Ready TV, UA32T4340BKXXL",
    "img": "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDk1NnxpbWFnZS9qcGVnfGltYWdlcy9oNDcvaDE3Lzk4NDIyMDUxMzA3ODIuanBnfDljNDA4NjY5ZmYwYjNmMTBlMmYwZGEwODNkMTk5M2ZkMDc5MTgzZTAyY2VmNWYwMjJmYWNlZmEwNzBkNmYyZjI",
    "price": "13,490.00",
    "mrp": "22,900.00",
    "discount": "41%(₹9,410)",
    "id": 3
  },
  {
    "name": "Kodak 139 cm (55 inch) Ultra HD (4K) LED Smart TV, 7XPRO Series 55UHDX7XPRO, Quad Core Processor, Built-In Chromecast",
    "img": "https://www.reliancedigital.in/medias/Kodak-55UHDX7XPRO-Television-492166145-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NDEyN3xpbWFnZS9qcGVnfGltYWdlcy9oYzIvaDNmLzk1MTE0Nzk2MDczMjYuanBnfGNkZjZkNTdlYWU4YmQ3YWM0MjU2MWY4OGNlNTBkZTM0YWIzOTQ1NTAwODFkYjkzODJjNGIxNzgwOWI4NzIyZmU",
    "price": "24,999.00",
    "mrp": "46,999.00",
    "discount": "47%(₹22,000)",
    "id": 4
  },
  {
    "name": "Sansui 80 cm (32 Inch) HD Ready Smart TV, Neo Series JSW32CSHD",
    "img": "https://www.reliancedigital.in/medias/Sansui-JSW32CSHD-Television-493179126-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNzMxMnxpbWFnZS9qcGVnfGltYWdlcy9oYmMvaGRhLzk4OTI2OTQ1NTY3MDIuanBnfDNiNGIzMzY5MzI1NjE2YzA0MTlhMjNmY2JkNGE1MjBhMDFjZWI0ODBlMGRmZjU3NjIwMzI0YTJlNzlmMWI4MTQ",
    "price": "8,999.00",
    "mrp": "19,990.00",
    "discount": "55%(₹10,991)",
    "id": 5
  },
  {
    "name": "Kodak 80 cm (32 inch) HD Ready LED Smart TV, 7XPRO Series 32HDX7XPRO, Quad Core Processor, Built-in Chromecast",
    "img": "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Televisions-492166141-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjIzNHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaDgwLzk4OTQ2ODczNDI2MjIuanBnfDAxNzdkZTU5YWY0ZjdkMWFhN2NhM2E3ZDY4MjkwZjIzMGNkYjIzYzNkMDkyMTZlNWU3N2ViZTA2YTE4YzcxMzc",
    "price": "9,999.00",
    "mrp": "18,499.00",
    "discount": "46%(₹8,500)",
    "id": 6
  },
  {
    "name": "Hisense 108 cm (43 inch) 2Yr Warranty 4K Ultra HD Smart Certified Android LED TV 43A6GE (Black) with Dolby Vision and ATMOS",
    "img": "https://www.reliancedigital.in/medias/HISENSE-43A6GE-Smart-LED-492338735-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NjY5OXxpbWFnZS9qcGVnfGltYWdlcy9oMTEvaDcwLzk3Nzg4NDI1OTk0NTQuanBnfGFiNzdlZmMxODczMmUyNzdlMDRkZGJjMzEyNTA4YTNhMGVhYjlhYmU0MzYwNDBmNmY4NjBlOGJjNDQwZjEzMjg",
    "price": "19,990.00",
    "mrp": "44,990.00",
    "discount": "56%(₹25,000)",
    "id": 7
  },
  {
    "name": "Hisense Vivid 80 cm(32 inch) HD Ready Smart LED TV, E4G, 32E4G",
    "img": "https://www.reliancedigital.in/medias/Hisense-32E4G-Television-492912681-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDM0NXxpbWFnZS9qcGVnfGltYWdlcy9oMTIvaGVlLzk4Mjk4NTgzNDQ5OTAuanBnfDIzYjlkNDkwNjgwYWViZWY0ZjgxZGI5Njk2MGJiYWNmNGU0MmExOGZlNjFhM2E3YTIyNGYxM2FmMzJmZWI5NmU",
    "price": "10,990.00",
    "mrp": "24,990.00",
    "discount": "56%(₹14,000)",
    "id": 8
  },
  {
    "name": "ONEPLUS 108 cm (43 inch) Full HD Smart LED TV, 43Y1",
    "img": "https://www.reliancedigital.in/medias/ONEPLUS-43Y1-TV-491895011-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9qcGVnfGltYWdlcy9oOGQvaDZmLzk4MTAwNTg1NzU5MDIuanBnfDRlNjk2MTc0MjNiODNmYmZkNmVjNWQwMjM1N2QxMzExOWFkNzcyOTNiY2M3ODU0ZmUyN2Y5OWEyNjExNzFkYTY",
    "price": "21,999.00",
    "mrp": "29,999.00",
    "discount": "27%(₹8,000)",
    "id": 9
  },
  {
    "name": "Hisense 80 cm (32 inch) 2Yr Warranty HD Smart LED TV with One Touch Access, Built-in Google Assistant (32A4G)",
    "img": "https://www.reliancedigital.in/medias/Hisense-32A4G-Smart-Television-492338740-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NTUzMHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGVkLzk3Nzk2NjE5NjMyOTQuanBnfGVkNTA5YWE2NmZlMjNhZTRmNzY1NzE4YjU0NGRhMzc4MjZhYjM0ZmFkMGEyMmE4YTBhZGM2ZWUzMzJiZGZmOTk",
    "price": "13,490.00",
    "mrp": "24,990.00",
    "discount": "46%(₹11,500)",
    "id": 10
  },
  {
    "name": "TCL 81.28 cm (32 inch) HD Ready LED Smart TV, 32S5205",
    "img": "https://www.reliancedigital.in/medias/Tcl-32S5205-Television-493285675-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjM4OHxpbWFnZS9qcGVnfGltYWdlcy9oNDMvaGUzLzk4NzcwNTI0ODk3NTguanBnfDM1ZmZlN2JjMzFiMWViNDM4ZDk5N2ZiZGIzMTJkMDE4YjljNDg2YmM4YTRmOTIzMWE0MWM0OGU5NDhlMWViZjQ",
    "price": "10,990.00",
    "mrp": "29,990.00",
    "discount": "63%(₹19,000)",
    "id": 11
  },
  {
    "name": "TCL 139.7 cm (55 inch) 3Yrs Warranty QLED Ultra HD (4K) Smart TV, C725 55C725",
    "img": "https://www.reliancedigital.in/medias/TCL-55C725-LED-TV-493179298-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4ODM0OHxpbWFnZS9qcGVnfGltYWdlcy9oZmIvaGM5Lzk5MDc3NjczNzc5NTAuanBnfGRjNTA4YzUwYTllZWU2MzZlNjExMzMwNDIxOWFkMTk0ZGU3OWE1Njc3ZGNlZDM1MDczZGMzYWUwM2I0NDc0MzE",
    "price": "40,990.00",
    "mrp": "1,16,990.00",
    "discount": "65%(₹76,000)",
    "id": 12
  },
  {
    "name": "ONEPLUS 81.28 cm (32 inch) HD Smart LED TV, 32Y1",
    "img": "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjIzMXxpbWFnZS9qcGVnfGltYWdlcy9oNjkvaDE0Lzk4MTAwNTg5MDM1ODIuanBnfGFiZjk3NDA1MzY1ODQwYjc2OTZkMzY4OTI1Y2RmOWM3OTI4NTE1MTlkMDFlOTUwYmZkM2U5MTVlYmIyZGFlYzg",
    "price": "12,999.00",
    "mrp": "19,990.00",
    "discount": "35%(₹6,991)",
    "id": 13
  },
  {
    "name": "BPL 80 cm (32 inch) HD Ready LED Android Smart TV, Black, 32H-B4000",
    "img": "https://www.reliancedigital.in/medias/BPL-32H-B4000-TV-492338719-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MDg4N3xpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDRkLzk4MzI4NTg5NDM1MTguanBnfGIyM2UwZmQ5NzQ3OGEzMzQ0YzY1ZTRkZTZkNjc1NzY3Yzg4MDkxOGFkMDFlMjMzYTFjYjNkM2ZhMWQwM2YyNjA",
    "price": "9,999.00",
    "mrp": "25,000.00",
    "discount": "60%(₹15,001)",
    "id": 14
  },
  {
    "name": "IFFALCON 109.22 cm (43 inch) Full HD LED Smart TV, 43F2A (Android 8.0, Dolby Decoder Technology for Enhance Audio-Quality)",
    "img": "https://www.reliancedigital.in/medias/IFFALCON-43F2A-Television-492338468-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MTMwNXxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDg5Lzk1ODA4NzU2Nzc3MjYuanBnfDk3ZmIwN2RjZTUxNTA1YTBmMzk5MWY4YjA3OGJmYjJkNGQ3MDFjNmJhNjU1Yjk5MWRhZTNmNTI3ZTE0ZmExNTc",
    "price": "15,990.00",
    "mrp": "45,990.00",
    "discount": "65%(₹30,000)",
    "id": 15
  },
  {
    "name": "Itel 108 cm (43 inch) Full HD Android Smart LED TV, G4330IE",
    "img": "https://www.reliancedigital.in/medias/Itel-G4330IE-Television-493072590-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDM2NXxpbWFnZS9qcGVnfGltYWdlcy9oNmIvaDQyLzk4OTU1NjY1MDgwNjIuanBnfDc4NDUxNjU3MGMyYmQ2ZjIwNjIxOThlZTI0ZTRlYmIzZmI1YWUwMzc4NzZkYjhhNTcwMzI3OGMwNjk2ZGZiMjM",
    "price": "14,990.00",
    "mrp": "40,990.00",
    "discount": "63%(₹26,000)",
    "id": 16
  },
  {
    "name": "OnePlus 100 cm (40 inch) Full HD LED Smart TV, Y Series 40Y1",
    "img": "https://www.reliancedigital.in/medias/OnePlus-40Y1-Television-492338486-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3NjEzOHxpbWFnZS9qcGVnfGltYWdlcy9oMDYvaGE1Lzk1NTc0NDMwODQzMTguanBnfDRhYTQ4MWM4MjNkODNiYmY4YThlZGQ2YjBkMTc3NGY1OTE4MTAzODE5MGZhMzI4NzM2Mzc2MTkzYzQwMzY4OGI",
    "price": "19,999.00",
    "mrp": "27,990.00",
    "discount": "29%(₹7,991)",
    "id": 17
  },
  {
    "name": "LG 81.28 cm (32 inch) HD LED Smart TV, 32LM562BPTA",
    "img": "https://www.reliancedigital.in/medias/LG-32LM562BPTA-Televisions-492338698-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w5NDEyMnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDY3Lzk2MDU1NDcwMzI2MDYuanBnfDM1MWQzMTEzYmEyYWY2MGI0OTViYjJjZmNmNGMxZTUzZTViNTJiOTQ0MmY2ODg1ZDgwOWZhYjdmZmNiNGNkZmU",
    "price": "14,990.00",
    "mrp": "20,990.00",
    "discount": "29%(₹6,000)",
    "id": 18
  },
  {
    "name": "SAMSUNG Crystal 4K Pro 125 cm (50 inch) Ultra HD (4K) LED Smart TV with Voice Search (UA50AUE70AKLXL)",
    "img": "https://www.reliancedigital.in/medias/Samsung-UA50AUE70AKLXL-LED-TV-492796780-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NDUzN3xpbWFnZS9qcGVnfGltYWdlcy9oZmMvaGY1Lzk4MDcxMTIxNzU2NDYuanBnfDg3ZTgxOWE2YjcxZWRmNzZlZmFmOWY2MmE5ODY1ZGM1OTE5OTQ4MTE2MzViYzY2ZDJhYjVmM2FmZWE2ZTFmNDE",
    "price": "43,990.00",
    "mrp": "71,400.00",
    "discount": "38%(₹27,410)",
    "id": 19
  },
  {
    "name": "IFFALCON 109.22 cm (43 Inch) Ultra HD (4K) Smart LED TV, 43U71",
    "img": "https://www.reliancedigital.in/medias/Iffalcon-43U71-Television-493179242-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjU3NHxpbWFnZS9qcGVnfGltYWdlcy9oNzcvaDA5Lzk4OTU3NzUzMzg1MjYuanBnfDM3YWI1NTdmNTRhZDljMjY0MWI3MzFlZDZlNGFkY2Q3MmQyY2RkYzhlNDg5ZTJkOTk3MjNlNWUwNTM3NzU0N2I",
    "price": "18,990.00",
    "mrp": "47,990.00",
    "discount": "60%(₹29,000)",
    "id": 20
  },
  {
    "name": "Kodak 126 cm (50 inch) Ultra HD (4K) Smart LED TV, CAPRO Series 50CAPRO5066",
    "img": "https://www.reliancedigital.in/medias/Kodak-50CAPRO5066-Televisions-492579288-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTc1M3xpbWFnZS9qcGVnfGltYWdlcy9oYjYvaDhmLzk4OTQ3MjA3NjU5ODIuanBnfGYxYzA1M2Y2MmZiZjIxZGM3MmU0YTQ2NTBjNTg1ZGE0M2Y2NGM3NGZjYjNhZTUzZGMxYjhiMzY1MjVlZGUxMmE",
    "price": "26,999.00",
    "mrp": "46,999.00",
    "discount": "43%(₹20,000)",
    "id": 21
  },
  {
    "name": "TCL 127 cm (50 inch) 3Yrs Warranty Ultra HD (4K) Smart QLED TV, 50C725",
    "img": "https://www.reliancedigital.in/medias/TCL-50C725-LED-Televisions-493179502-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTY5M3xpbWFnZS9qcGVnfGltYWdlcy9oMGUvaDk5Lzk5MjE3MjQwNTU1ODIuanBnfGIxNmFhZDU2ODg2ZjM0OGI1ZTY5ODA5ZDY0YzNiMTZkODRhNWI3YjA3M2IwMzZiMWJiNjU5NzM3MDYxNjFhZDg",
    "price": "34,990.00",
    "mrp": "1,10,990.00",
    "discount": "68%(₹76,000)",
    "id": 22
  },
  {
    "name": "Xiaomi 81.28 cm (32 Inch) HD Ready Smart TV, 5A Series ELA4819IN",
    "img": "https://www.reliancedigital.in/medias/Xiaomi-ELA4819IN-Televisions-493285619-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4NDAzNXxpbWFnZS9qcGVnfGltYWdlcy9oNDcvaDg5Lzk4NzAwMjYxNzg1OTAuanBnfGFhMTU4MGJlN2Y4ZTkxZTFjNzQzODAyY2JkOGY0NTA1YzNjOWZiYzI3M2EyN2UzMTZlZDg4ODFjYzZlYTNkOGM",
    "price": "13,499.00",
    "mrp": "24,999.00",
    "discount": "46%(₹11,500)",
    "id": 23
  },
  {
    "name": "OnePlus 81.28 cm (32 inch) HD Ready Android Smart LED TV with Dolby Audio Surround Sound Technology, 32Y1S Edge",
    "img": "https://www.reliancedigital.in/medias/ONEPLUS-32Y1S-EDGE-SMART-LED-TV-492796556-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MzIyMHxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaGRmLzk3Nzg1NjI5OTAxMTAuanBnfGViZTM4YWU1NzgyNDZmZTg1NmZhY2U5MWU1MTMxMjVhZmFmMzJmYjg1YzhkNzY2MTg3Y2E5MDMzZmM3M2U0NmE",
    "price": "16,499.00",
    "mrp": "23,999.00",
    "discount": "31%(₹7,500)",
    "id": 24
  }
]

function NinthpartTv(){
    return(
        <div>

<Box pb="32px">

<Box mb="32px" pt="32px" px="28px"><Heading  as="span" fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px" >Top Deals on TV | upto 70% off</Heading> <Link Link as="span" borderLeft="1px" color="white" px="12px" border="2px" bg="blue" p="5px"> View All</Link></Box>

  <Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
{
breakpoint: 800,
cols: 3,
rows: 1,
gap: 10,
loop: true
}
]}>
    {tvdata.map((tvdata) => (
      <Carousel.Item>

        <Box textAlign="left">
          <Box w="220px" h="185px">
          <Image cursor="pointer" w="180px" _hover={{
              w: "190px",
            }} src={tvdata.img}  />

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
           {tvdata.name}
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
                ₹{tvdata.price}.00
              </Box>
            </Box>

            <Box>
              M.R.P:
              <Box as="span">
                ₹{tvdata.mrp}
              </Box>
            </Box>

            <Box>
              You Save:
              <Box as="span" >
                {tvdata.discount}
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

export default NinthpartTv;