import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageSlider = ({ limit, page }) => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
      );
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setErrorMsg(error.message);
    }
  };

  const handlePrevClick = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? images.length - 1 : currentSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === images.length - 1 ? 0 : currentSlide + 1
    );
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg) {
    return <div>Error Occurred: {errorMsg}</div>;
  }

  return (
    <div className="relative w-[500px] h-[500px]">
      {images && images.length > 0 && (
        <>
          {images.map((singleImage, index) => (
            <img
              key={index}
              src={singleImage.download_url}
              alt={singleImage.description}
              className={`absolute top-0 left-0 w-full h-full ${
                index === currentSlide ? "" : "hidden"
              }`}
            />
          ))}
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </>
      )}
     <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full ${
                  index === currentSlide ? "bg-cyan-400" : "bg-gray-300"
                }`}
              />
            ))}
          </span>
    </div>
  );
};

export default ImageSlider;
