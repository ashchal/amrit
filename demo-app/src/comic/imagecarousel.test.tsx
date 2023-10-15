import { fireEvent, render, screen } from "@testing-library/react";
import { ImageCarousel } from "./ImageCarousel";
const images = [
  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg", // Replace with your image filenames
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697241600&semt=sph",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
];

test("renders an image", () => {
  render(<ImageCarousel image={images} />);
  const imageElement = screen.getByAltText("Images 1");
  expect(imageElement).toBeInTheDocument();
});

test("clicking Next and Previous buttons should change the image", () => {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
  render(<ImageCarousel image={images} />);

  // Initial image
  let imageElement = screen.getByAltText("Images 1");
  expect(imageElement).toBeInTheDocument();

  // Click Next button
  const nextButton = screen.getByText("Next");
  fireEvent.click(nextButton);

  // Image should change to the next one
  imageElement = screen.getByAltText("Images 2");
  expect(imageElement).toBeInTheDocument();

  // Click Next button
  fireEvent.click(nextButton);

  // Image should change to the next one
  imageElement = screen.getByAltText("Images 3");
  expect(imageElement).toBeInTheDocument();

  // Click Next button
  fireEvent.click(nextButton);

  // Image should change to the next one
  imageElement = screen.getByAltText("Images 1");
  expect(imageElement).toBeInTheDocument();

  // Click Previous button
  const prevButton = screen.getByText("Previous");
  fireEvent.click(prevButton);

  // Image should change back to the initial one
  imageElement = screen.getByAltText("Images 3");
  expect(imageElement).toBeInTheDocument();

  fireEvent.click(prevButton);

  // Image should change back to the initial one
  imageElement = screen.getByAltText("Images 2");
  expect(imageElement).toBeInTheDocument();
});
