import React from "react";
import "../styles/SignatureLoader.css.css";

const SignatureLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <svg viewBox="0 0 500 200" className="w-4/5 max-w-[600px]">
        <text x="50" y="150" className="signature-text">
          Urvil Patel
        </text>
      </svg>
    </div>
  );
};

export default SignatureLoader;
