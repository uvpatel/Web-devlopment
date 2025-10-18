import { Button } from "@/components/ui/button";
import { SplitText } from "react-bits";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <SplitText
        text="Hello React Bits 🚀"
        className="text-4xl font-bold text-white"
        type="chars"
        animationFrom={{ opacity: 0, y: 80 }}
        animationTo={{ opacity: 1, y: 0 }}
        duration={0.5}
        delay={0.05}
        easing="easeOutExpo"
      />
      <Button className="mt-6">Get Started</Button>
    </div>
  );
}

export default App;
