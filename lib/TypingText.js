import React, { useState, useEffect } from "react";
import "./TypingText.css";
const TypingText = ({
  text,
  typingInterval = 100,
  startDelay = 0,
  className = "",
  showCursor = true,
  loop = false
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [blinkCursor, setBlinkCursor] = useState(false);
  useEffect(() => {
    const nextChar = text[currentIndex % text.length];
    const timeoutId = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prevText => prevText + nextChar);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else if (loop) {
        setDisplayedText("");
        setCurrentIndex(0);
      } else {
        setBlinkCursor(true);
      }
    }, typingInterval);
    return () => clearTimeout(timeoutId);
  }, [currentIndex, text, typingInterval, loop]);
  useEffect(() => {
    const delayTimeoutId = setTimeout(() => {
      setCurrentIndex(0);
    }, startDelay);
    return () => clearTimeout(delayTimeoutId);
  }, [startDelay]);
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