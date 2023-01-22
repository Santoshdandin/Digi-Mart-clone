import { Img, Link } from "@chakra-ui/react";

import Carousel from "better-react-carousel";

const bestDealsSlider = [
  {
    image:
      "https://www.reliancedigital.in/medias/HP-Laptop-IT-Accessories-Carousel-Banner-Desktop.png?context=bWFzdGVyfGltYWdlc3w3MjExNXxpbWFnZS9wbmd8aW1hZ2VzL2hmOS9oYTQvOTk0OTk2MTY1MDIwNi5wbmd8M2U0NzRhNmU0NWEwZjE1OWJkMjJkMzEwNzViZmUwMmMzYjIxOTk5ZjAzYjRlMDUzNTZhMDcyOWRhNTkwOGM5Ng",
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Home-Appliances-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w3NDk3NXxpbWFnZS9qcGVnfGltYWdlcy9oMDUvaGVmLzk5NDk5NjE3ODEyNzguanBnfGNhM2UwNDFkOTMyZGJiNzI4ZGE0NTNiMjhjNjgwMWYxNTA5NmI0Nzk3ZjNlZmJiYzZmNmYwZmUzZWRkNGJkNTM",
  },
  {
    image:
      "https://www.reliancedigital.in/medias/Samsung-Galaxy-S23-CLP-Banner-18-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w1NTg0NXxpbWFnZS9qcGVnfGltYWdlcy9oYTEvaGNiLzk5NDk5NjIzNzExMDIuanBnfDFmOGM1Y2M1ZDQ1MGM4NWE2ZTAyNjgyZGU5YjY0MWYwY2JiN2E2Nzg4OTJkODY2OTNlOGRmNjk1NzE2MGU0N2Y",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/iPhone-13-CLP-Banner-59900-18-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2NDc0OHxpbWFnZS9qcGVnfGltYWdlcy9oZTkvaDA0Lzk5NDkyMzI5ODgxOTAuanBnfGUzZTI4NzExNDI5MzMwOTMzYzc2NGU4OTM4M2FiNzY5YjcxZWIzMzk0ZjA1ZThlMWMyMThjNDg4NWNmYTZjMzM",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Smartwatches-Carnival-Carousel-Banner-11-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMjE3NjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDZlL2hjNy85OTQ1ODI3NzcwMzk4LmpwZ3xmM2IxYjAyZjAzMmZmODYzNjk4OTU5MzdlMzhjNTY1YzU1ZDk3N2Y2MzFiOGE1N2M2YjUxOTEyODE4YzRiNTFk",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/LG-Friday-Carausel-Banner-09-11-202-D.jpg?context=bWFzdGVyfGltYWdlc3w5OTcwM3xpbWFnZS9qcGVnfGltYWdlcy9oNzAvaDhkLzk5MTkxODcyMjI1NTguanBnfDZjYTc5ZjUwZDY3YzZiNjMwODgwOTMyMzBiZDE4OGVhZGEzMDAyNTUyNWNkYjAyYjljNzM2MTU0OTBiZDM1MjU",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/iPhone14-CLP-Banner-18-01-2023.jpg?context=bWFzdGVyfGltYWdlc3wxMDM0MjZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ1L2g1MS85OTQ5MjMyODU3MTE4LmpwZ3w3OWFjMWVhZjE0Y2EzNzAyODcyZTBmM2M2MzQ1OTU1YzI2Y2QwYjg4MGYyYTc0NjFmOGNhM2NhYjEyYTk5MTk4",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Premium-Audio-Accessories-Carousel-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MTMxM3xpbWFnZS9qcGVnfGltYWdlcy9oYjEvaDY1Lzk5Mzc4OTQ3MDMxMzQuanBnfGI5YmRhOGRiM2RlMmMwN2IwZDExZjI1MjE1OTU4ZGVlMTUyZTZlYWUzZWE1Yzg5ZDY5ZjlhZjcxZmY5OWI5YWE",
  },

  {
    image:
      "https://www.reliancedigital.in/medias/Carousel-Banner-Winter-Store-D.jpg?context=bWFzdGVyfGltYWdlc3wxNjM1NjR8aW1hZ2UvanBlZ3xpbWFnZXMvaDRjL2hiMS85OTMzMzQ5NjgzMjMwLmpwZ3wyM2ZkYjBmNWRkZmZlMmZlZTRiYWJmZmVlMDg4ZjBjZTE2YzM0ODdkNmM5NDRmNWExNjFjMTk3N2M4NTFjOWRh",
  },
];

function CarouserItem() {
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
  );
}

export  default CarouserItem;