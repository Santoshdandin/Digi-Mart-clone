import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Heading, Image ,Link} from "@chakra-ui/react";
import Carousel from "better-react-carousel";

const smartWatches = [
    {
      title:
        "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68",
      imageUrl:
        "https://www.reliancedigital.in/medias/pTron-PULSEFIT-P261-Smart-Watch-493177972-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDQ1NHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaGY1Lzk4OTQ2NzA4OTMwODYuanBnfGVhMWI3MzU3NTMxNmI4MzdiNDZmOTY2MTVmZWQxNzdhOTMwZjJiMjI2YzUxNTllYWU0YTkwYzIyZGIzNmJmYzM",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      offerPrice: 999,
      mrp: 5999,
      reviewCount: 34,
      save: " 83%(₹5000)",
      rating: 4,
    },
    {
      title:
        "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
      imageUrl:
        "https://www.reliancedigital.in/medias/Fire-Boltt-BSW007-Smart-Watch-492850759-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTkwMnxpbWFnZS9qcGVnfGltYWdlcy9oMmIvaDBlLzk4NTk3ODYyNzY4OTQuanBnfDdiMTBhZThkYWQ1ZDc5N2Q0NTk5MDJmYjhiYTFmNGU3MTRiMzYwN2M2YzVlMzNhNTI0N2UzMGNkZGZiY2QyMmI",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      offerPrice: 999,
      mrp: 5999,
      reviewCount: 34,
      save: " 83%(₹5000)",
      rating: 4,
    },
    {
      title:
        "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
      imageUrl:
        "https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNjcyMXxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaGU1Lzk4MTQ3MTk5MjIyMDYuanBnfDU4NmIxM2U0OWY3NGRmYjI3ZTA0NDQwN2EzN2ZmMDgwYjllYTQ4ZjU5OGU4MmUwYzVlNDhmN2I0OGNiZTgzYWU",
      imageAlt: "Rear view of modern home with pool",
      
      offerPrice: 999,
      mrp: 5999,
      reviewCount: 34,
      save: " 83%(₹5000)",
      rating: 4,
    },
    {
      title:
        "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
      imageUrl:
        "https://www.reliancedigital.in/medias/boAt-Watch-Flash-RTL-Smart-Watches-492574195-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2MDAwN3xpbWFnZS9qcGVnfGltYWdlcy9oNDMvaDA3Lzk3NTU3Nzg1NDc3NDIuanBnfDQxZGE4MzYwMzI2NjZiZjJkYWQyM2VmOGNiZTc5OWE0YmU0NTM3ODk3ZjgwMGZlYmNjMThhMTRjZmM5NDMyN2Y",
      imageAlt: "Rear view of modern home with pool",
      offerPrice: 999,
      mrp: 5999,
      reviewCount: 34,
      save: " 83%(₹5000)",
      rating: 4,
    },
    {
      title:
        "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
      imageUrl:
        "https://www.reliancedigital.in/medias/Noise-Colorfit-Icon-Plus-Smart-Watch-492850516-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxNTk5M3xpbWFnZS9qcGVnfGltYWdlcy9oMzEvaGYyLzk4Nzc2Mzc3NTkwMDYuanBnfDNiMDIzZWUxNjVkZTFkYWQzOTFiYmEyYmRmM2UxMjg1MGY1MWRmNTA1OGE2NTllNzgyMzg1MTVjM2E5NWFmZTU",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      offerPrice: 999,
      mrp: 5999,
      reviewCount: 34,
      save: " 83%(₹5000)",
      rating: 4,
    },
    {
      title:
        "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
      imageUrl:
        "https://www.reliancedigital.in/medias/pTron-140318176-Smart-Watch-492850976-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzOTM4MHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaGJiLzk4OTU1OTAyOTc2MzAuanBnfDFkODRmMGE2ZWMyNTEzY2I5OTI2YzhiZTJkM2I0M2E0Y2NhMWNiNjRmNjA4MGNmMzE4YTZiOTg1NjZlNmRhMzM",
      imageAlt: "Rear view of modern home with pool",
      
      offerPrice: 999,
      mrp: 5999,
      reviewCount: 34,
      save: " 83%(₹5000)",
      rating: 4,
    },
    {
      title:
        "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
      imageUrl:
        "https://www.reliancedigital.in/medias/pTron-PULSEFIT-P261-Smart-Watch-493177969-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDUzNnxpbWFnZS9qcGVnfGltYWdlcy9oMGEvaGIzLzk4OTQ2NzAyMzc3MjYuanBnfDJjMTc3ODdhNzNiMTU2YWU2MDM4ZTRlYTQwYTljMDk1MWRmMjgwMWFkNzI4MmM5NTU2MzA3NjUzNjhkYmZkYWI",
      imageAlt: "Rear view of modern home with pool",
      offerPrice: 999,
      mrp: 5999,
      reviewCount: 34,
      save: " 83%(₹5000)",
      rating: 4,
    },
    {
      title:
        "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
      imageUrl:
        "https://www.reliancedigital.in/medias/pTron-PULSEFIT-P261-Smart-Watch-493177971-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTY5MHxpbWFnZS9qcGVnfGltYWdlcy9oNWUvaGVjLzk4OTQ2NzEyMjA3NjYuanBnfGU4Zjk4YzFiMWE0MTZhYTk4MTEzYWIzYjJmNDViMGM5ZDY0MmY1ZWM1OWE0NWIyNzc1OGFmMjUwN2EyZjc3YjU",
      imageAlt: "Rear view of modern home with pool",
      offerPrice: 999,
      mrp: 5999,
      reviewCount: 34,
      save: " 83%(₹5000)",
      rating: 4,
    },
    {
      title:
        "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
      imageUrl:
        "https://www.reliancedigital.in/medias/pTron-PULSEFIT-P261-Smart-Watch-493177970-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMTIyMnxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaGZkLzk4OTQ2NzA1NjU0MDYuanBnfDk4NDQ3YjQ2MmIxMjRhYjMzMmIxYzBkMjFmZjgzODY2ZmIwZjkzNzRmMTRkYTg2NDViOWQxZTRjM2JjNDFjNWU",
      imageAlt: "Rear view of modern home with pool",
      offerPrice: 999,
      mrp: 5999,
      reviewCount: 34,
      save: " 83%(₹5000)",
      rating: 4,
    },
    {
      title:
        "pTron Pulsefit P261 Bluetooth Calling Smartwatch with IP68 Waterproof, Pink",
      imageUrl:
        "https://www.reliancedigital.in/medias/Fire-Boltt-BSW007-Smart-Watch-492850760-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzEwMXxpbWFnZS9qcGVnfGltYWdlcy9oMjMvaDY2Lzk4NTk3OTkwNTY0MTQuanBnfDEzNzY0MGE3MzkzYjUwMmE4OWNlZThmMjRmMDg3NWI3OWUzZjk3ODAzYzBhOTgzNTBlNjc1M2E2MDFlNjU0ZWI",
      imageAlt: "Rear view of modern home with pool",
      offerPrice: 999,
      mrp: 5999,
      reviewCount: 34,
      save: " 83%(₹5000)",
      rating: 4,
    },
  ];


  function Smartwatch(){
    return(
        <div>
<Box pb="32px">

<Box mb="32px" pt="32px" px="28px"><Heading  as="span" fontSize="24px" fontWeight="0.7em" mb="20px" pr="10px" >SMARTWATCHES AT RS.999</Heading> <Link Link as="span" borderLeft="1px" color="blue" px="12px"> View All</Link></Box>

  <Carousel cols={5} rows={1} gap={6} loop={true} showDots={false} responsiveLayout={[
{
breakpoint: 800,
cols: 3,
rows: 1,
gap: 10,
loop: true
}
]}>
    {smartWatches.map((watch) => (
      <Carousel.Item>

        <Box textAlign="left">
          <Box w="220px" h="185px">
          <Image cursor="pointer" w="180px" _hover={{
              w: "190px",
            }} src={watch.imageUrl} alt={watch.imageAlt} />

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
           {watch.title}
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={
                    i < watch.rating ? "rgb(255, 164, 28)" : "gray.300"
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
              ( {watch.reviewCount} reviews)
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
                ₹{watch.offerPrice}.00
              </Box>
            </Box>

            <Box>
              M.R.P:
              <Box as="span" >
                ₹{watch.mrp}
              </Box>
            </Box>

            <Box>
              You Save:
              <Box as="span" >
                {watch.save}
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

  export default Smartwatch;