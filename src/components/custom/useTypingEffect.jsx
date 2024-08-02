/*import { useState, useEffect } from 'react';

const useTypingEffect = (text, speed = 100) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, speed);
    return () => clearInterval(intervalId);
  }, [text, speed]);

  return displayedText;
};

export default useTypingEffect;*/




    import { useState, useEffect } from 'react';

    const Typewriter = ({ text, delay }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentIndex < text.length) {
        timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);

        } 

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, text]);

    return <span>{currentText}</span>;
    };

    export default Typewriter;
