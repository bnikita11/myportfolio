import { useEffect, useState } from "react";
import profileImage from "../assets/avatar.jpg"; // Your profile image

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "< Loading Nikita's Portfolio... />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (typeof onComplete === "function") {
            onComplete();
          }
        }, 1000);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-[#FFDBDB] to-[#FFC6C6] flex flex-col items-center justify-center text-[#3e2723] p-4">
      
      {/* Extra Large Round Profile Image */}
      <div className="mb-8">
      <img
  src={profileImage}
  alt="ProfileImage"
  className="w-96 h-96 rounded-full object-cover border-[6px] border-gradient-to-r from-[#d7a1a9] to-[#ffcc80] shadow-lg"
/>

      </div>

      {/* Animated Typing Text */}
      <div className="text-5xl font-bold tracking-wide drop-shadow-lg text-center mb-4">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Aesthetic Loading Bar */}
      <div className="w-[240px] h-[6px] bg-[#d7ccc8] rounded-full overflow-hidden shadow-inner">
        <div className="w-[40%] h-full bg-[#8d6e63] shadow-[0_0_15px_#5d4037] animate-loading-bar"></div>
      </div>
    </div>
  );
};
