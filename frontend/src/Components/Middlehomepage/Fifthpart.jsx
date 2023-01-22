import { Box, Heading, Img, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const homeDeals = [
    {
      image:
        "https://www.reliancedigital.in/medias/Motorola-Moto-G42-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wyOTU2OXxpbWFnZS9qcGVnfGltYWdlcy9oYzgvaGQwLzk5NDk5NjI1Njc3MTAuanBnfGUxODU5NmI3YjYyZDQ4Zjc1ZDMzYWNjNTdiNmU0OTA1ODY1ODlhZjYyMzk0ZGE1NTU0NWYyMmE2NGZjYTc1YzE",
    },
  
    {
      image:
        "https://www.reliancedigital.in/medias/Hisense-HD-Ready-Smart-LED-TV-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w0OTgyNXxpbWFnZS9qcGVnfGltYWdlcy9oOWEvaDY1Lzk5Mzc4OTUxNjE4ODYuanBnfDZkM2I0YzZmM2UxZWNmZWE4M2FiYjEwYzM2NzdmMmM3NzQwYTE0ODFiMzA0ZDFkMzQ2ODQ4OGQ5MWRmZGI0MzM",
    },
  
    {
      image:
        "https://www.reliancedigital.in/medias/Smartwatches-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMTY3M3xpbWFnZS9qcGVnfGltYWdlcy9oNTEvaGY3Lzk5Mzc4OTUyOTI5NTguanBnfDQ2NzM2YjAxZTkzYmJiMTNlMjk4ODkxNTNlMTczMDcxYzU4NjMzZDZmNWQ3N2I5MGViNmMzZDAwNjExMmUxNTE",
    },
  
    {
      image:
        "https://www.reliancedigital.in/medias/Neckband-True-Wireless-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMjg5OHxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaDE2Lzk5Mzc4OTUwOTYzNTAuanBnfGE1OTcxMTM4NGUyMjU3MmM4NTc4YTI1NThkMmQwOTc1ZDU2N2YwNjRjMWNiZTU2YjZiMzcwOTVkYjc0MzQ4MDc",
    },
    {
        image:
          "https://www.reliancedigital.in/medias/Appliances-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wyODYwNHxpbWFnZS9qcGVnfGltYWdlcy9oNzkvaGU3Lzk5Mzc4OTUzNTg0OTQuanBnfGZmNzY2ZDcwZWJiMzFjMjU1Y2I2NGFhYWY2ZWFlODc1ZGUwYTAxMjEyN2NiZDI4MzRkNzlmMzNkNDU2MzQ3MGU",
      },
    
      {
        image:
          "https://www.reliancedigital.in/medias/Printers-Monitors-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzNDkxNHxpbWFnZS9qcGVnfGltYWdlcy9oYTkvaDFhLzk5MzkyMDYwNDU3MjYuanBnfDYwMDA0MjljYTU2YWZkOWE3MjY4YjA4ZDE1ZDVkZjkyZGVkZTdhNDU0Y2FkMWZlMzEyMjhhZWZkYTliMjZmZWM",
      },
    
      {
        image:
          "https://www.reliancedigital.in/medias/Microwave-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMDcwMnxpbWFnZS9qcGVnfGltYWdlcy9oYzEvaDU1Lzk5Mzc4OTU0ODk1NjYuanBnfDUxODE0YzQyYzRkMzUwN2ZhMTk4MDgxMjUwMTQyYTg3ZjMzMzhiMmVjMGNmMzcyZTRlNmVlNWVjZjk2ZDY3MTY",
      },
    
      {
        image:
          "https://www.reliancedigital.in/medias/Apple-MNEH3HNA-MacBook-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMzM3MHxpbWFnZS9qcGVnfGltYWdlcy9oZWYvaGUxLzk5Mzc4OTU1NTUxMDIuanBnfDYwYWNmOTM3MDhjYjBhYzVhZTlkMWY0MTMyZTUwMDg4NmY4NGRjOWQ3YjIyMjNlNzllMjE1MTNlZjNjZGQ2OTA",
      },
    
  ];

function Fifthpart(){
    return(
        <div>
<Box mb="12px">
        <Box mb="32px" pt="32px" px="28px">
          <Heading fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px">
          Great Deals on Electronics
          </Heading>
        </Box>
        <Box px="28px">
          <SimpleGrid columns={[1, 2, 4]}>
            {homeDeals.map((img) => (
              <Box mr="20px" mb="1px" p="10px" _hover={{w:"300px"}}>
                <Link>
                  <Img w="100%" src={img.image}
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

export default Fifthpart;
