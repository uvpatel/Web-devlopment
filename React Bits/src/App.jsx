import React from "react";
import { BounceText } from "react-bits";
import SplitText from "./SplitText";

function Home() {
  return (
    <div>
      <BounceText text="Hello, React Bits!" speed={1.5} color="teal" />
      <p>This is a page with animation.</p>

<SplitText
  text="Hello, you!"
  delay={100}
  duration={0.6}
/>
    </div>
  );
}

export default Home;
