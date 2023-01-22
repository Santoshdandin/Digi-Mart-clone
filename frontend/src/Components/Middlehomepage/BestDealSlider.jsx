
import { Img, Link } from "@chakra-ui/react";

import Carousel from "better-react-carousel";

const bestDealsSlider = [
    {
      image:
        "https://www.reliancedigital.in/medias/Redmi-Note-12-5G-Series-NPI-Banner-11-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2MTM2M3xpbWFnZS9qcGVnfGltYWdlcy9oNGMvaDZmLzk5NDQ5MDc0NDgzNTAuanBnfDY3MGJlYzc4OTFkYzE4Y2NlYTFhMTRjOTY0MjNkZGJlNzNmYzQ4MTkxYTkxODcyZjczZTllMTlmMjc2OGZkZDk",
    },
    {
      image:
        "https://www.reliancedigital.in/medias/airpods-pro-2nd-gen-Buy-now-NPI-Banner-01-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDM4NjB8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ2L2g2Ny85OTIyNDU2MTkxMDA2LmpwZ3w0MGQxZjFhYjQ0ZjU1NTQzZjJiOGJmYzZhMDg5NTY5M2Y3NzIxZDkzOTQ2Yjg4YmNmOWZlMzc4OWM0YjlkMjA2",
    },
    {
      image:
        "https://www.reliancedigital.in/medias/Bose-Earbuds-NPI-Banner-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w1NjI4OHxpbWFnZS9qcGVnfGltYWdlcy9oNWUvaDIzLzk5NDk5NjEzODgwNjIuanBnfDU5OTYxYmIzNjI3NDRkOGI0YzMwMGM4NmM2OGU0OTZmODRhMWRjYmMzM2ExMjRiMzRkOTM4M2Y4OGJlNmY4ZTc",
    },
    {
        image:
          "https://www.reliancedigital.in/medias/Oppo-A78-5G-NPI-Banner-20-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2OTUzNnxpbWFnZS9qcGVnfGltYWdlcy9oMjUvaDNjLzk5NTA0Nzc3MTM0MzguanBnfDI4OTBjMzFmNzA4OWQ4OWY1MDcxZTY2MjNlZWJjZWRlZWQ3YTFhNjMzZjM1MDM5ZmQ2Zjc5NDA1MGJkNWYyYzQ",
      },
  ];

function Sixthpart(){
    return (
        <div>
            <Carousel
        cols={1}
        rows={1}
        gap={10}
        loop={true}
        showDots={true}
        autoplay={2000}
      >
        {bestDealsSlider.map((img) => (
          <Carousel.Item>
            <Link>
              <Img w="100%" src={img.image} />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
            </div>
    )
}
export default  Sixthpart;