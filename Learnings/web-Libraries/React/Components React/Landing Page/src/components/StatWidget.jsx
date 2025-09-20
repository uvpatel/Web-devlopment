// src/components/StatWidget.jsx
import { Users, DollarSign, ShoppingCart } from "lucide-react";

const StatWidget = ({ title, value, icon: Icon, color }) => {
  return (
    <div className={`p-5 rounded-2xl shadow bg-white dark:bg-gray-800 flex items-center gap-4`}>
      <div className={`p-3 rounded-full ${color} text-white`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h2>
      </div>
    </div>
  );
};

export default StatWidget;
