import React, { useState } from "react";
import copiedIconSvg from "../../assets/tech/copied-icon copy.svg";

const ContactEmailCopy: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("alok8273739734@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-4 mb-6 p-4 bg-tertiary rounded-lg text-white flex items-center justify-between font-semibold select-all">
      <span className="select-all">alok8273739734@gmail.com</span>
      <button
        onClick={handleCopy}
        aria-label="Copy email to clipboard"
      >
        {!copied ? (
          <img
            src={copiedIconSvg}
            alt="Copy icon"
            className="h-6 w-6 filter brightness-0 invert"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>
      {copied && <span className="ml-2 text-white">Copied!</span>}
    </div>
  );
};

export default ContactEmailCopy;
