"use client"
import React , {useEffect , useState}  from "react";
import Image from "next/image";
import Link from "next/link";
import mine from '../public/images/mine.jpg'
import image2 from '../public/images/ladder.jpg'
import image3 from '../public/images/support.jpg'
import image4 from '../public/images/gambler.jpg'
import random from "../public/images/random.jpg"

export default function Home() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // Function to generate random position for each image
    const getRandomPosition = () => ({
      top: `${Math.random() * -15}px`, // Random top position above the viewport
      left: `${Math.random() * (window.innerWidth - 15)}px`, // Random left position within the window width
    });

    // Generate a list of image components with random position
    const images = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      position: getRandomPosition(),
    }));

    setImageList(images);

    // Function to update the position of images every 50ms
    const updatePositions = setInterval(() => {
      setImageList((prevImages) =>
        prevImages.map((image) => {
          const newPosition = {
            ...image.position,
            top: `${parseFloat(image.position.top) + 0.5}px`, // Move image downwards by 0.5px
          };

          // Remove image when it reaches close to the bottom of the screen
          if (parseFloat(newPosition.top) >= window.innerHeight - 15) {
            return null;
          }

          return { ...image, position: newPosition };
        }).filter(Boolean) // Remove null values
      );
    }, 50);

    // Clean up the interval when the component unmounts
    return () => clearInterval(updatePositions);
  }, []);
  return (
    <div className="relative z-0 h-screen overflow-y-auto w-screen ">

    <main className="flex min-h-screen flex-col items-center justify-between p-12 pt-5 px-0 main text-lg text-white w-full  z-1">
        <h1 className="text-4xl font-bold mb-5">
          $DIG
        </h1>
      <div className="mb-10 ">
        <Image src={mine} width={500} height={500} className="w-auto h-auto n" />
      </div>
      <div className="w-11/12  text-center flex flex-col  mb-14">
      
        <h1 className="text-4xl font-bold mb-10">
          99% of gamblers quit before hitting it big.
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4 mb-14">
      <Link href="https://twitter.com/GamblersOnSol">
          <button className="flex flex-row justify-between capitalize border items-center rounded-lg p-2  bg-white text-blue-500">
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/twitter--v1.png"
              alt="twitter--v1"
            />
            twitter
          </button>
        </Link>
        {/* <Link href=""> */}
          <button className="flex flex-row justify-between capitalize border items-center rounded-lg p-2 bg-white text-blue-500 opacity-[0.5]" disabled>
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/telegram-app--v1.png"
              alt="telegram-app--v1"
            />
            telegram soon
          </button>
        {/* </Link> */}
        
      </div>
      <div className="w-[90%] mx-auto  flex flex-row flex-wrap  gap-10   ">

<div className="flex flex-col md:flex-row gap-10 ">
<div className="md:w-1/2">
    <Image
      src={image2}
      alt="masonry image"
      className="md:w-full"
    />
  </div>
  <div className="md:w-1/2 ">

    <Image
      src={mine}
      alt="masonry image"
      className="md:w-full"
    />
  </div>
  
</div>
<div className="flex flex-col md:flex-row gap-10 ">
  <div className="md:w-1/2">
    <Image
      src={image3}
      alt="masonry image"
      className="md:w-full"
    />
  </div>
  <div className="md:w-1/2">
    <Image
      src={image4}
      alt="masonry image"
      className="md:w-full"
    />
  </div>
</div>
</div>

    </main>
    </div>
  );
}
