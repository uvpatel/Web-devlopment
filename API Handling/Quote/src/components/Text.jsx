import { useRef, useEffect } from "react";
import gsap from "gsap";

function Text() {
  const textRef = useRef(null);
  useEffect(() => {
    
    gsap.to(textRef.current, {
      x: 200,
      duration: 1,
      ease: "back.inOut",
      rotation: 360,
    });
  }, []);

  return (
    <h1
      ref={textRef}
      className="text-4xl font-bold text-indigo-600 m-10"
    >
      Hello
    </h1>
  );
}

export default Text;
