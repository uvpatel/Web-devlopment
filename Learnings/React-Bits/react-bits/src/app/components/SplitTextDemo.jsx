// src/components/SplitTextDemo.jsx
import { SplitText } from "react-bits";

export default function SplitTextDemo() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <SplitText
        text="React Bits SplitText 🚀"
        className="text-5xl font-bold"
        type="chars"
        animationFrom={{ opacity: 0, y: 80 }}
        animationTo={{ opacity: 1, y: 0 }}
        duration={0.5}
        delay={0.05}
        easing="easeOutExpo"
      />
    </div>
  );
}
