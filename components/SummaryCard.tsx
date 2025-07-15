// components/SummaryCard.tsx

import React from "react";

interface SummaryCardProps {
  summary: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ summary }) => {
  return (
    <div className="border rounded p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-xl font-semibold mb-2">English Summary</h2>
      <p className="text-base leading-relaxed">{summary}</p>
    </div>
  );
};

export default SummaryCard;
