/*import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';

const Hero = () => {
  const lines = [
    "Discover Your Next Adventure with AI:",
    "Personalized Itineraries at Your Fingertips"
  ];

  const springs = lines.map((_, index) => 
    useSpring({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      delay: 200 * index,
      config: { tension: 280, friction: 60 },
    })
  );

  return (
    <div className="flex flex-col items-center mx-57 gap-9 bg-blue-950">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        {lines.map((line, index) => (
          <animated.span key={index} style={springs[index]}>
            {index === 0 ? <span className='text-[#f56551]'>{line}</span> : line}
            {index === 0 && <br />}
          </animated.span>
        ))}
      </h1>
      <p className='text-xl text-gray-500 text-center'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>
      <Link to={'/create-trip'}>
        <Button className="font-bold text-center mt-16 mb-10">Get Started, It's Free.</Button>
      </Link>
      <img src='/cover-image.webp' className='-mt-30 width-[120px] height-[120px]' />
    </div>
  );
}

export default Hero;*/

/*import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import useTypingEffect from './useTypingEffect';

const Hero = () => {
  const line1 = useTypingEffect("Diiscover Your Next Adventure with AI:", 100);
  const line2 = useTypingEffect("Ppersonalized Itineraries at Your Fingertips", 100);

  return (
    <div className="flex flex-col items-center mx-57 gap-9 bg-blue-950">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className='text-[#f56551]'>{line1}</span>
        <br />
        {line2}
      </h1>
      <p className='text-xl text-gray-500 text-center'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>
      <Link to={'/create-trip'}>
        <Button className="font-bold text-center mt-16 mb-10">Get Started, It's Free.</Button>
      </Link>
      <img src='/cover-image.webp' className='-mt-30 width-[120px] height-[120px]' />
    </div>
  );
}

export default Hero;*/

























import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import Typewriter from "./useTypingEffect";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-57 gap-9 bg-blue-950">
      <h1
      className="font-extrabold text-[50px] text-center mt-16">
        <span className='text-[#f56551]'> <Typewriter text= "Custom Travel Itineraries Crafted Just for You:" delay={100} />
        </span> <br></br> <Typewriter text= "Explore the World Effortlessly"  delay={100}  /> </h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator,creating custom itineraries tailored to your interests and budget.</p>
        <Link to={'/create-trip'}>
          <Button className="font-bold text-center mt-16 mb-10">Get Started, It's Free.</Button>
        </Link>
        <img src='/cover-image.webp' className='-mt-30 width-[120px] height-[120px]'/>
    </div>
  )
}

export default Hero
