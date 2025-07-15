interface BlogCardProps {
  topic: string;
  summary: string;
  onClick: () => void;
}

export default function BlogCard({ topic, summary, onClick }: BlogCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-md transition"
    >
      <h2 className="text-xl font-semibold text-blue-700">{topic}</h2>
      <p className="text-gray-600 text-sm mt-2">
        {summary.slice(0, 100)}...
      </p>
    </div>
  );
}
