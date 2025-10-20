import { useRef, useEffect } from "react"; // useRef Refrence id,cls // useEffect Treck the changes
import gsap from "gsap";

function Button() {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Animate the button: move 200px right and scale up slightly
    gsap.to(buttonRef.current, {
      x: 30,
      scale: 1.2,
      duration: 0.5,
      ease: "bounce",
      repeat: -1, // infinite repeat
      yoyo: true, // back and forth
    });
  }, []);

  

  return (
    <div className="flex justify-center items-center h-screen ">
      <button
        ref={buttonRef}
        className="px-6 py-3 bg-indigo-500 text-white rounded-lg font-semibold "
      >
        Click me
      </button>
    </div>
  );
}

export default Button;
