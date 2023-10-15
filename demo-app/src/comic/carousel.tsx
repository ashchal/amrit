import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg", // Replace with your image filenames
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=sph",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
];

export function Carousel() {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const goToNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <h1>Image Carousel</h1>
      <div className="carousel">
        <button onClick={goToPrevImage}>Previous</button>
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        <button onClick={goToNextImage}>Next</button>
      </div>
    </div>
  );
}
