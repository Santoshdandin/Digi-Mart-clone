import { Box, Heading, Img, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const specialdaydeals = [
    {
      image:
        "https://www.reliancedigital.in/medias/Neckband-True-Wireless-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w0MjQ1OXxpbWFnZS9qcGVnfGltYWdlcy9oN2EvaDEyLzk5NTA0NTA0MTc2OTQuanBnfDAxOWRiN2Q5NWE2YmRjY2RhYWUyZjkwOGU2M2NlYzA5MzFlMzI4YjJlOGQ4OTc5NTQ2M2VkYjlmMTU5NmMwNzM",
    },
  
    {
      image:
        "https://www.reliancedigital.in/medias/Smartphones-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wzNDYxMHxpbWFnZS9qcGVnfGltYWdlcy9oZTIvaGYxLzk5NTA0NTA0ODMyMzAuanBnfDMzMTQ0YjgwMjkwOWQxYWYxZTg3NGUxMDkxM2M0MjhkMjE5MTRkMmUyYjg3OThiMzkwYTU2ZGUwNDJhOTlmOGU",
    },
  
    {
      image:
        "https://www.reliancedigital.in/medias/Small-Appliances-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wzOTMzMHxpbWFnZS9qcGVnfGltYWdlcy9oM2MvaDdmLzk5NTA0NTA1NDg3NjYuanBnfDdmYzkzOTMwNDU1NGZiMjU3ZGJmNWFmMTVmZDAzOGUxYjZhMmEyNmJlMjNmMWI1MmI2MzNkNzc1MjdjOWEyODM",
    },
  
    {
      image:
        "https://www.reliancedigital.in/medias/Keyboard-Mouse-More-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wzOTQ1MHxpbWFnZS9qcGVnfGltYWdlcy9oZjEvaDBjLzk5NTA0NTA2MTQzMDIuanBnfDRlYzkwNDljNmYwYjZkY2E1NmE5MGQwZWU2MDZhNWNjZDhiN2IwYzE2ZjM4NWE0Njg2MGVmNDA3MDk0Y2NjNTA",
    },
    {
        image:
          "https://www.reliancedigital.in/medias/Samsung-Smart-TV-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w0OTMyOXxpbWFnZS9qcGVnfGltYWdlcy9oMGIvaGVmLzk5NTA0NTA2Nzk4MzguanBnfGM4OTFhYzA3ZjlhZDQ0OTZkMjRiYzM4OWQwYzk1NmNiNDYwZWZhNWI4YjBkMWQyMmRhZGVmYTA3M2NkNGFhZGU",
      },
    
      {
        image:
          "https://www.reliancedigital.in/medias/Smartwatches-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wzNDQ2NnxpbWFnZS9qcGVnfGltYWdlcy9oMWEvaDNkLzk5NTA0NTA3NDUzNzQuanBnfDg2Y2Q3YTg4Nzc5ODYzNWU5YWYwNzRjODViZmRhMTUyNjBlZDEwM2Q4N2Y1M2EwZjQyMTNiMGVlZTdkYTE3MTQ",
      },
    
      {
        image:
          "https://www.reliancedigital.in/medias/Large-Appliances-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wzNjM3MXxpbWFnZS9qcGVnfGltYWdlcy9oZDgvaGZjLzk5NTA0NTA4MTA5MTAuanBnfDY2MzZkNGM2ZDdiYzg4MTMyOWUxNzBjZDNmNzA0ODY5M2FjNGI2ZDYwNzg4ZmU2M2MyOTRkZDg2M2FmNzlhN2Q",
      },
    
      {
        image:
          "https://www.reliancedigital.in/medias/MacBook-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wzNTY2OXxpbWFnZS9qcGVnfGltYWdlcy9oZDIvaGNlLzk5NTA0NTA4NzY0NDYuanBnfDc5ZWQ4YWM1NGNiODNjZWFkYjI5YTVkYWZlMjRlZGU1MmM0MGIzMTFkYWQ3ZWNiZjM3NjgzYzMwNjU4NjY3OTU",
      },
    
  ];

function SpecialDay(){
    return(
        <div>
<Box mb="12px">
        <Box mb="32px" pt="32px" px="28px">
          <Heading fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px">
          SPECIAL DAY, SPECIAL OFFERS
          </Heading>
        </Box>
        <Box px="28px">
          <SimpleGrid columns={[1, 2, 4]}>
            {specialdaydeals.map((img) => (
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

export default  SpecialDay;
