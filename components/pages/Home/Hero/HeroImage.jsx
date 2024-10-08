// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Image1 from "@/public/image/hero1.png";
// import Image2 from "@/public/image/hero2.png";
// import Image3 from "@/public/image/hero3.png";


// const RandomImageSlider = () => {
//   const images = [Image1, Image2, Image3];

//   const [currentImage, setCurrentImage] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const changeImage = () => {
//     setIsAnimating(true); // Start animation
//     setTimeout(() => {
//       const randomIndex = Math.floor(Math.random() * images.length);
//       setCurrentImage(randomIndex);
//       setIsAnimating(false); // Stop animation after image change
//     }, 500); // Delay for animation effect
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       changeImage();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-[700px] flex justify-center  items-center overflow-hidden">
//       <div
//         className={`transition-all duration-500 transform ${
//           isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
//         }`}
//       >
//         <Image
//           src={images[currentImage]}
//           alt="Random"
//           className="h-full"
//           style={{ height: "100vh" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default RandomImageSlider;
// // "use client";

// // import { useState, useEffect } from "react";
// // import Image from "next/image";
// // import Image1 from "@/public/image/image1.png";
// // import Image2 from "@/public/image/patient2.png";

// // const RandomImageSlider = () => {
// //   const images = [Image1, Image2, Image1];
// //   const [currentImage, setCurrentImage] = useState(0);
// //   const [nextImage, setNextImage] = useState(null);
// //   const [isFading, setIsFading] = useState(false);

// //   // Change image with crossfade animation
// //   const changeImage = () => {
// //     setIsFading(true); // Trigger fade-out of current image

// //     setTimeout(() => {
// //       const randomIndex = Math.floor(Math.random() * images.length);
// //       setNextImage(randomIndex); // Set the next image to fade in
// //       setIsFading(false); // Start fade-in for the next image
// //     }, 500); // Slight delay for fade-out effect
// //   };

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       changeImage();
// //     }, 3000);

// //     return () => clearInterval(interval);
// //   }, []);

// //   useEffect(() => {
// //     if (nextImage !== null) {
// //       setCurrentImage(nextImage);
// //     }
// //   }, [nextImage]);

// //   return (
// //     <div className="relative w-full flex justify-center items-center overflow-hidden">
// //       {/* Current Image */}
// //       <div
// //         className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ease-in-out ${
// //           isFading ? "opacity-0" : "opacity-100"
// //         }`}
// //       >
// //         <Image
// //           src={images[currentImage]}
// //           alt="Random"
// //           className="rounded-lg"
// //           style={{ height: "650px" }}
// //         />
// //       </div>

// //       {/* Next Image */}
// //       {nextImage !== null && (
// //         <div
// //           className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ease-in-out ${
// //             isFading ? "opacity-100" : "opacity-0"
// //           }`}
// //         >
// //           <Image
// //             src={images[nextImage]}
// //             alt="Random"
// //             className="rounded-lg "
// //             style={{ height: "650px" }}
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default RandomImageSlider;
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Image1 from "@/public/image/hero1.png";
import Image2 from "@/public/image/hero2.png";
import Image3 from "@/public/image/hero3.png";

const RandomImageSlider = () => {
  const images = [Image1, Image2, Image3];
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isFading, setIsFading] = useState(false);

  const changeImage = () => {
    setIsFading(true);

    setTimeout(() => {
      setCurrentImage(nextImage);
      const nextIndex = (nextImage + 1) % images.length;
      setNextImage(nextIndex);
      setIsFading(false);
    }, 1000); // Adjust the delay to match the transition duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage();
    }, 4000); // Interval between changes (including fade duration)

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <div className="relative w-full h-[700px] flex justify-center items-center overflow-hidden">
      {/* Current Image */}
      <div
        className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ease-in-out ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={images[currentImage]}
          alt="Random"
          className="h-full w-full"
          style={{ height: "100vh" }}
        />
      </div>

      {/* Next Image */}
      <div
        className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ease-in-out ${
          isFading ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={images[nextImage]}
          alt="Random"
          className="h-full w-full"
          style={{ height: "100vh" }}
        />
      </div>
    </div>
  );
};

export default RandomImageSlider;


