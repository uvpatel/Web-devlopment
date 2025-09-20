// src/components/ActivityTimeline.jsx
import { Clock } from "lucide-react";

const ActivityTimeline = ({ activities }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Activity</h2>
      <ul className="space-y-4">
        {activities.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <Clock className="text-blue-500 mt-1" size={20} />
            <div>
              <p className="text-gray-900 dark:text-white">{item.text}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityTimeline;
