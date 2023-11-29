import React from "react";

declare module "react-typing-text" {
  interface TypingTextProps {
    text: string;
    typingInterval?: number;
    className?: string;
    showCursor?: boolean;
  }

  const TypingText: React.FC<TypingTextProps>;

  export default TypingText;
}
