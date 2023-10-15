import { useState } from "react";
import { ImageCarousel } from "./ImageCarousel";

const COMIC = [
  [
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg", // Replace with your image filenames
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=sph",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  ],
  [
    "https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=", // Replace with your image filenames
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg",
  ],
];

export function CarouselExtends() {
  const [selectedComic, setSelectedComic] = useState(0);
  return (
    <div>
      <h1>Image Carousel</h1>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedComic(Number(e.target.value))
        }
      >
        {COMIC.map((_, index) => {
          return <option key={index} value={index} label={String(index)} />;
        })}
      </select>
      <ImageCarousel image={COMIC[selectedComic]} />
    </div>
  );
}
