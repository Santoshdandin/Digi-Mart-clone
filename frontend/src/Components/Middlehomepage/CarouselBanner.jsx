
import { Img, Link } from "@chakra-ui/react";
import "./Middlepage.css"
import Carousel from "better-react-carousel";

const bestDealsSlider = [
    {
      image:
        "https://www.reliancedigital.in/medias/intranet-Carousal-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3wxMDI1MTN8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hlMC85OTQxNTE2MTU2OTU4LmpwZ3wxMDJmNjQ2YzdjYTIyMzk2NTM5NTMyYjZhNTgyN2M2MjlhMTM3Y2FmNWNhZjAwNzUxY2ExMjg0ZmNhNGMxZjRl",
    },
    {
      image:
        "https://www.reliancedigital.in/medias/Teaser-Banner-20-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMTc2NjF8aW1hZ2UvanBlZ3xpbWFnZXMvaDA4L2gxNC85OTUwNDc4MDA4MzUwLmpwZ3xiYTBhN2I3NGEwYWI3NGE4NTQxMmFlZmEwN2QyYzFjZmIzOWJlNWI4ODE4OGJiMzljMWRkYmU0M2IyNzEyOGVl",
    },
    {
      image:
        "https://www.reliancedigital.in/medias/FOE-Carousel-Banner-Gif.gif?context=bWFzdGVyfGltYWdlc3wxNjA5MzZ8aW1hZ2UvZ2lmfGltYWdlcy9oMGQvaGNiLzk4OTU0MDA4OTg1OTAuZ2lmfDc5MmMxMWQzOTVlZDBkNTRjNTY3ZWZhN2EyZDA1OGZlMGE4YjZhZGFjYmU4NmU2MjIzZjhlOWNjMmRjNTMwMTY",
    },
    {
      image:"https://www.reliancedigital.in/medias/Static-Banner-Carousel-02.jpg?context=bWFzdGVyfGltYWdlc3wxNTM3MjUzfGltYWdlL2pwZWd8aW1hZ2VzL2gyNy9oZTkvOTk1MDk2OTIwMDY3MC5qcGd8NGViNjk1NTM4ZmI4NDhlYzdmZjVlNjRiYjZmMjA3YmUxOWUwYzJhNTJlNzI4OWI0NTVmMzUzODc3ZmM5ZmI4Yg",
    }
  ];

function CarouselBanner(){
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
export default CarouselBanner;