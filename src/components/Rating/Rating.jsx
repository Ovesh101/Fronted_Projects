import { Star } from 'lucide-react';
import { useState } from 'react';

const Rating = ({ noOfRating = 5 }) => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const handleClick = (getCurrentIndex) => {

    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  };

  const handleMouseLeave = () => {
    
    setHover(rating);
  };
  console.log("hover" , hover);
    console.log("rating" , rating);

  return (
    <>
      {[...Array(noOfRating)].map((_, index) => (
        <Star
          key={index}
          className= {index < (hover) ? "text-yellow-300" : "text-gray-300"}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={() => handleMouseLeave()}
        />
      ))}
    </>
  );
};

export default Rating;
