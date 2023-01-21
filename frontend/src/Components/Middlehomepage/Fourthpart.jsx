import { Box, Heading, Img, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const homeDeals = [
    {
      image:
        "https://www.reliancedigital.in/medias/Washing-Machines-Home-Appliances-Fest-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w1MjQ4NnxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDU0Lzk5NDk5NjIzMDU1NjYuanBnfGU3NTgwNmJjMmU0OTc3Y2E0YzIzMzRhNGVlOGQ3NzBhOTM1NTQ2MjZmYzljOWZlNjAzMzM0OGRmZjY5ZmNlNzU",
    },
  
    {
      image:
        "https://www.reliancedigital.in/medias/ONEPLUS-HD-Smart-LED-TV-1-1-.jpg?context=bWFzdGVyfGltYWdlc3w5OTM5MXxpbWFnZS9qcGVnfGltYWdlcy9oMzcvaDYzLzk4OTU0MDE2ODUwMjIuanBnfDQyNDYxMmU0YmEzMjkzMWZhYjZjM2E3OGRmOGE4MjdkZjc1Y2M3NWM1ZTNhMzYyMWIzNDAwYjVlZGMwNTU4NjM",
    },
  
    {
      image:
        "https://www.reliancedigital.in/medias/Home-Appliances-Fes-Great-deals-on-Refrigeratorst-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0Mzg4OXxpbWFnZS9qcGVnfGltYWdlcy9oZmMvaDEyLzk5NDg3MDc4ODA5OTAuanBnfGE1YTE4ZTk3OGRmNTk4N2QxOGNlYmVkZWY0MGI1OTA1NzlkMTBiM2Y1ZDEzNTU5NjliNzAyMzFhNWZiYmM1ZTY",
    },
  
    {
      image:
        "https://www.reliancedigital.in/medias/Air-Conditioners-Appliances-Fest-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w1MDg5OXxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaDM5Lzk5NDk5NjIyNDAwMzAuanBnfDdhOTYxMjgxYWJiYzM1NGQ0ZDM3ZWU3NmZlNDA4MmNjOWM3ZTllNDBhNzQxOWI2YTI5YmVkNmU4MjU0NmYwY2U",
    },
  
  ];

function Fourthpart(){
    return(
        <div>
<Box mb="12px">
        <Box mb="32px" pt="32px" px="28px">
          <Heading fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px">
          Home Appliances Fest
          </Heading>
        </Box>
        <Box px="28px">
          <SimpleGrid columns={[1, 2, 4]}>
            {homeDeals.map((img) => (
              <Box mr="20px" mb="1px">
                <Link>
                  <Img w="100%" src={img.image} _hover={{w:"300px"}}
                   />
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
        </div>
    )
}

export default Fourthpart;
