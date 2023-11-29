declare module "react-typing-text" {
  interface TypingTextProps {
    text: string;
    typingInterval?: number;
    startDelay?: number;
    className?: string;
    showCursor?: boolean;
    loop?: boolean;
  }

  const TypingText: React.FC<TypingTextProps>;

  export = TypingText;
}
