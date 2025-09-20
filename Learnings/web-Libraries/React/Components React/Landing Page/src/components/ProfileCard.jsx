// src/components/ProfileCard.jsx
import { User } from "lucide-react";

const ProfileCard = ({ name, role, avatar }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow flex items-center gap-4">
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border"
      />
      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
      <button className="ml-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        View
      </button>
    </div>
  );
};

export default ProfileCard;
