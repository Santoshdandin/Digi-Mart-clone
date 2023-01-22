import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Divider, HStack, Heading, Image, Link, Tag, Text, VStack } from "@chakra-ui/react";
import Carousel from "better-react-carousel";
let smartphone=[ {"id": "1-mobile",
"title":"Samsung Galaxy S21 FE 5G 128 GB, 8 GB, Graphite, Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Samsung-SM-G990EZAIINU-Smartphone-492575018-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4ODU2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmIvaDA5Lzk4NzkxNzc3NTY3MDIuanBnfDY3NTcyYWI1ZjU2NGE5NTVmMDFmNDNhOTRkNWMyNDkyNzc3NjQ4ZTE0N2FhZjg3ODIxZjQxNTVkNzc3ZmJjNzM",
"offerPrice":1299,
"mrp":2099,
"review":"77",
"save":"80%(₹1001)",
"rating":3
},

{"id": "2-mobile",
"title":"OnePlus 9 128 GB, 8 GB RAM,Arctic Sky,Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Motorola-G62-Mobile-Phone-493177199-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODQ4MXxpbWFnZS9qcGVnfGltYWdlcy9oZTcvaDI2Lzk4NzMyNjcwNjQ4NjIuanBnfGNiMDM4OTg1MzJhOGUzZjcyOWYxNGI3ZTdlODFmOTM5MmU5NWM1Yzk5YzJjNzgwMTcwMjYxNDc5ZDIzYWU4ZGU",
"offerPrice":37999,
"mrp":49999,
"review":"57",
"save":"24%(₹12000)",
"rating":"4"
},
                                                                                                           
{"id":"3-mobile",
"title":"Motorola G31 128 GB, 6GB RAM, Meteorite Gray,Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Moto-G31-Smartphone-492849085-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzA5NHxpbWFnZS9qcGVnfGltYWdlcy9oY2UvaDFjLzk4MTM2NDc1NTY2MzguanBnfDc1ZDRlMzhkNGU5YTk5Nzc1MDY3NTQyOTY5MTA0ZDI1N2E1MjY1YjcyNDUyODA0M2RkNzc1NWUyZTlkNDhlOGM",
"offerPrice":13999,
"mrp":16999,
"review":"60",
"save":"18%(₹3000)",
"rating":"5"
}, 
  
{"id":"4-mobile",
"title":"Oppo K10 128 GB,8 GB RAM,Black Carbon, Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Oppo-K10-Smartphone-492849761-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2NTYxNHxpbWFnZS9qcGVnfGltYWdlcy9oYTQvaDI5Lzk4NzAzMjgzMzIzMTguanBnfGEyOWM2ZjE1YTZhNzVlODgyM2E1OGQyZmQ1NTQyZDgwNTYxMzgwZDZiOWIyZjczYzBjMzVlOTM0ZDIxYzM5ODM",
"offerPrice":16990,
"mrp":22999,
"review":"70",
"save":"26%(₹6009)",
"rating":"4"
},
 
{"id":"5-mobile",
"title":"Vivo T1x 128 GB, 6 GB RAM, Space Blue,Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Vivo-T1x-Smart-Phones-493177044-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NzQyMHxpbWFnZS9qcGVnfGltYWdlcy9oYWMvaDY3Lzk4NjUzNjM0MjMyNjIuanBnfDAyMGE4YTg5OGUyYjBjZDYwZWFkMzBmMjQ5YWM0Mzg2NjYzMDIyMDlhYWVlZmFjNmY0YmYwNWM5YmU3YjkwMGM",
"offerPrice":14999,
"mrp":18990,
"review":"80",
"save":"21%(₹3991)",
"rating":"3"
},

{"id":"6-mobile",
"title":"Oppo A57 64GB, 4GB RAM,Glowing Green, Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Oppo-A57-Smart-Phones-492850647-i-492850647-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NjU1M3xpbWFnZS9qcGVnfGltYWdlcy9oOTcvaGIyLzk4NDcyMjg0NjUxODIuanBnfDAyYzY4OTY5ZmJkMzU1NjlmNGUwNjQ4YzE4ZjJlZDk3ZDBjMWEwOTU5ZmI0ZGEzNzRjMzU1NmFmNjlmYTA3Njk",
"offerPrice":13999,
"mrp":16990,
"review":"60",
"save":"18%(₹2991)",
"rating":"4"
},

{"id":"7-mobile",
"title":"Motorola G62 5G 128 GB, 6 GB RAM, Frosted Blue, Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Motorola-G62-Mobile-Phone-493177199-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyODQ4MXxpbWFnZS9qcGVnfGltYWdlcy9oZTcvaDI2Lzk4NzMyNjcwNjQ4NjIuanBnfGNiMDM4OTg1MzJhOGUzZjcyOWYxNGI3ZTdlODFmOTM5MmU5NWM1Yzk5YzJjNzgwMTcwMjYxNDc5ZDIzYWU4ZGU",
"offerPrice":17999,
"mrp":21999,
"review":"80",
"save":"18%(₹4000)",
"rating":"3"
},

{"id":"8-mobile",
"title":"Motorola G51 5G 64 GB, 4 GB RAM, Indigo Blue, Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Motorola-G51-PAS80007IN-SMART-PHONE-492849093-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjMzNHxpbWFnZS9qcGVnfGltYWdlcy9oOWYvaGFmLzk3ODYyMzk2MTUwMDYuanBnfGUwYWQ4MjI2MDc0OTI1ZDYyMmYxNjk0ZjllZGYyYTUyNjQ3MmZjNmMzNGY1ZjM4NDUxMGFjYzNhMWYwZDZjOWM",
"offerPrice":14999,
"mrp":17999,
"review":"60",
"save":"17%(₹3000)",
"rating":"2"
},

{"id":"9-mobile",
"title":"One Plus 10R 5G 128 GB,8 GB RAM, Forest Green, Mobile Phone",
"image":"https://www.reliancedigital.in/medias/One-Plus-10R-Mobile-Phone-492850198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaDk5Lzk4NzM5Nzg1MjM2NzguanBnfDM3N2IxOGQ0MmQ2YTZjMmUyZDcwYWRlNmI2MThjMDM5OTYwNDE2NzUyZDQ2M2E5OTYwODczNzU1OTIxYjBlYTM",
"offerPrice":32999,
"mrp":38999,
"review":"1",
"save":"15%(₹6000)",
"rating":"5"
},

{"id":"10-mobile",
"title":"Motorola Moto Edge 30 5G 128GB, 6GB RAM,Meteor Grey",
"image":"https://www.reliancedigital.in/medias/Motorola-EDGE-30-Mobile-Phone-492912756-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTU3NXxpbWFnZS9qcGVnfGltYWdlcy9oN2YvaGE2Lzk4MzE2ODY0MDYxNzQuanBnfGM4NWUwNjRiMTgzYTMyM2ZmYWZkN2I0MTNkY2M0ZjdmMTNlZTc3MmZmODI2ZmZmNGFkOWQxMjc2MzRlZDVmZDg",
"offerPrice":27999,
"mrp":30999,
"review":"40",
"save":"10%(₹3000)",
"rating":"3"
},

{"id":"11-mobile",
"title":"Vivo X80 5G 128 GB,8 GB RAM, Cosmic Black, Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Vivo-X80-Smartphone-492850419-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MDk4OHxpbWFnZS9qcGVnfGltYWdlcy9oNzAvaGQ2Lzk4MzI1ODYyODA5OTAuanBnfDk5ZDNiMTY0MjU0MGViNDc1ZDg0ZDIyZmY4NmEwNWE0MTkxNmI1MWJlNmZiYWZkNjA0N2QxYTU0NmU1MmY3OWM",
"offerPrice":54999,
"mrp":56990,
"review":"20",
"save":"3%(₹1991)",
"rating":"2"
},

{"id":"12-mobile",
"title":"Redmi Note 11T 5G 128GB, 8GB RAM , Aquamarine Blue, Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Redmi-Note-11T-Smartphone-492574112-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNDkwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGMvaDQ4Lzk3NzQ0NzczNzc1NjYuanBnfDA0MTBmZTgzNTM2YmIwYTA3YTk1YTNjMWEwYjUwZTMzYTAyOTQ2OTM5Yzk1MGIzMTQ1ZGZiODg2OTI0ZjdhMjA",
"offerPrice":16999,
"mrp":22999,
"review":"50",
"save":"26%(₹6000)",
"rating":"3"
},

{"id":"13-mobile",
"title":"itel A23 Pro 8 GB RAM, Lake Blue, Mobile Phone",
"image":"https://www.reliancedigital.in/medias/itel-A23Pro-8GB-1GB-RAM-491996691-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNDY1M3xpbWFnZS9qcGVnfGltYWdlcy9oOWEvaGU1Lzk1NDU0MzE4NzU2MTQuanBnfGU3OTIxZGZiMGU0MTBmMTZiMzliYzQzNzhkMTE1Y2UyYmQyNWIwMDYyZThiYjU0NGRhODk3ZDI5Mjk1M2M1ZmI",
"offerPrice":4040,
"mrp":4999,
"review":"20",
"save":"19%(₹959)",
"rating":"4"
},

{"id":"14-mobile",
"title":"realme C25Y 64 GB, 4 GB RAM, Glacier Blue,Mobile Phone",
"image":"https://www.reliancedigital.in/medias/realme-C25Y-Smartphones-491998358-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3OTAzNHxpbWFnZS9qcGVnfGltYWdlcy9oY2IvaDFlLzk2NzM1NTUxODE1OTguanBnfDBkZDVhOGU3NDZjNmQ4ZDU0ZjdkNTU3ZGNjYzEwNjllM2E2ZmY1ZmU1Y2UzZjIwNWI1Y2Q0Yzg5MjczOGM0ZWM",
"offerPrice":10999,
"mrp":12999,
"review":"40",
"save":"15%(₹2000)",
"rating":"3"
},

{"id":"15-mobile",
"title":"Itel Vision 2S 32 GB,2 GB RAM, Deep Blue, Mobile Phone",
"image":"https://www.reliancedigital.in/medias/Itel-Vision-2S-Smartphones-491997913-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3ODExNHxpbWFnZS9qcGVnfGltYWdlcy9oOWIvaDhlLzk2NTc0MTI0ODUxNTAuanBnfDAzMDdkNjNiZjhiMzg5MjMxMWY1OWZjNTE4ZDcyMDY3Yjc5YjRlNjk5ZmEwMDhlZGZhZGRhMzIzZjliMzA0YTk",
"offerPrice":7349,
"mrp":8499,
"review":"20",
"save":"14%(₹1150)",
"rating":"4"
}
]


function SmartPhone(){
return(
    <div>
     <Divider border="0.5px"/>

<Box pb="32px">

<Box mb="32px" pt="32px" px="28px"><Heading  as="span" fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px" >Best Selling 5G Smartphones | upto 25% off</Heading> <Link Link as="span" borderLeft="1px"  color="white" px="12px" border="2px" bg="blue" p="5px" > View All</Link></Box>

  <Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
{
breakpoint: 800,
cols: 3,
rows: 1,
gap: 10,
loop: true
}
]}>
    {smartphone.map((smartphone) => (
      <Carousel.Item>

        <Box textAlign="left">
          <Box w="220px" h="185px">
          <Image cursor="pointer" w="180px" _hover={{
              w: "190px",
            }} src={smartphone.image} alt={smartphone.imageAlt} />

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
           {smartphone.title}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={
                    i < smartphone.rating ? "rgb(255, 164, 28)" : "gray.300"
                  }
                />
              ))}
            <Box
              as="span"
              ml="2"
              color="rgb(0, 51, 128)"
              fontSize="sm"
              fontWeight="500"
            >
              ( {smartphone.reviewCount} reviews)
            </Box>
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
                ₹{smartphone.offerPrice}.00
              </Box>
            </Box>

            <Box>
              M.R.P:
              <Box as="span" >
                ₹{smartphone.mrp}
              </Box>
            </Box>

            <Box>
              You Save:
              <Box as="span" >
                {smartphone.save}
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

export default SmartPhone;






