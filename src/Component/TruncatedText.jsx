import { useState } from "react";

const TruncatedText = ({ text, maxLength = 80 }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  // Safely handle empty/null text
  const displayText = text || "";
  const shouldTruncate = displayText.length > maxLength;

  return (
    <div className="space-y-2">
      <p className="text-orange-400">
        {shouldTruncate && isTruncated
          ? `${displayText.slice(0, maxLength)}...`
          : displayText}
      </p>
      {/* {shouldTruncate && (
        <button
          onClick={() => setIsTruncated(!isTruncated)}
          className="text-amber-400 hover:text-amber-300 text-sm font-medium"
        >
          {isTruncated ? "Read More" : "Show Less"}
        </button>
      )} */}
    </div>
  );
};

export default TruncatedText;
