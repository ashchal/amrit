import { useState } from "react";

export function ImageCarousel({ image }: { image: string[] }) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const goToNextImage = () => {
    setCurrentImage((currentImage + 1) % image.length);
  };

  const goToPrevImage = () => {
    setCurrentImage((currentImage - 1 + image.length) % image.length);
  };
  return (
    <div className="carousel">
      <button onClick={goToPrevImage}>Previous</button>
      <img src={image[currentImage]} alt={`Images ${currentImage + 1}`} />
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
}
