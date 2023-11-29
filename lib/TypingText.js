import React, { useState, useEffect } from "react";
import "./TypingText.css";
const TypingText = ({
  text,
  typingInterval = 100,
  className = "",
  showCursor = true
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blinkCursor, setBlinkCursor] = useState(false);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, typingInterval);
      return () => clearTimeout(timeoutId);
    } else {
      setBlinkCursor(true);
    }
    return () => {};
  }, [currentIndex, text, typingInterval]);
  return /*#__PURE__*/React.createElement("div", {
    className: `typing-text-container ${className}`
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", {
    className: "typing-text"
  }, displayedText), showCursor ? /*#__PURE__*/React.createElement("span", {
    className: blinkCursor ? "blinking-cursor" : null
  }, "|") : null));
};
export default TypingText;
//# sourceMappingURL=TypingText.js.map