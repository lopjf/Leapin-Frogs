import React from 'react';

interface SlowTextProps {
  speed: number;
  text: string;
}

const SlowText = (props: SlowTextProps) => {
  const { speed, text } = props;
  const [placeholder, setPlaceholder] = React.useState(text[0]);

  const index = React.useRef(0);

  React.useEffect(() => {
    function tick() {
      index.current++;
      setPlaceholder((prev: string) => prev + text[index.current]);
    }
    if (index.current < text.length - 1) {
      let addChar = setInterval(tick, speed);
      return () => clearInterval(addChar);
    }
  }, [placeholder, speed, text]);
  return <span>{placeholder}</span>
}




// import { useState, useEffect, useRef } from 'react';


// function TextDisplay(props) {
// 	const [displayText, setDisplayText] = useState("");
// 	const ref = useRef(null);
  
// 	useEffect(() => {
// 	  const text = props.text;
// 	  let index = 0;
// 	  const timer = setInterval(() => {
// 		if (index < text.length) {
// 		  setDisplayText((prevText) => prevText + text.charAt(index));
// 		  index++;
// 		} else {
// 		  clearInterval(timer);
// 		}
// 	  }, props.delay);
  
// 	  return () => clearInterval(timer);
// 	}, [props.text, props.delay]);
  
// 	useEffect(() => {
// 	  const observer = new IntersectionObserver(
// 		(entries) => {
// 		  entries.forEach((entry) => {
// 			if (entry.isIntersecting) {
// 			  // Start displaying the text when the element is visible
// 			  setDisplayText("");
// 			}
// 		  });
// 		},
// 		{ threshold: 0 }
// 	  );
  
// 	  if (ref.current) {
// 		observer.observe(ref.current);
// 	  }
  
// 	  return () => {
// 		if (ref.current) {
// 		  observer.unobserve(ref.current);
// 		}
// 	  };
// 	}, []);
  
// 	return (
// 	  <div ref={ref}>
// 		{displayText}
// 	  </div>
// 	);
//   }

//   export default TextDisplay;