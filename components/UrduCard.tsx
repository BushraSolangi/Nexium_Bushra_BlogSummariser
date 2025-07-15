import React from "react";

interface UrduCardProps {
  urduText: string;
}
const UrduCard: React.FC<UrduCardProps> = ({ urduText }) => {
  return (
    <div className="border rounded p-4 shadow-md bg-white dark:bg-gray-900 text-right font-urdu leading-relaxed">
      <h2 className="text-xl font-semibold mb-2 text-left">اردو ترجمہ</h2>
      <p className="text-lg">{urduText}</p>
    </div>
  );
};

export default UrduCard;
