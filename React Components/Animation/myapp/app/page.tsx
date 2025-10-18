"use client";

import AnimatedList from "../components/AnimatedList";
import SplitText from "../components/SplitText";
import Prism from "../components/Prism"
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

export default function Page() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 gap-12">
        <div className="absolute w-full h-[100vh] md:h-[100vh] lg:h-[140vh]">
          <Prism
            animationType="rotate"
            timeScale={1.6}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={2.25}
            noise={0}
            glow={1}
          />
        </div>


        <SplitText
          text="Hello, BVMITES!"
          className="text-4xl font-bold text-center text-gray-800"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        {/* Animated List */}
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Select an Item
          </h2>
          <AnimatedList
            items={items}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={true}
          />
        </div>
      </main>
    </>
  );
}
