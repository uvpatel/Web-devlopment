// src/components/Toast.jsx
import { useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const Toast = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: "bg-green-500",
    error: "bg-red-500",
  };

  const icons = {
    success: <CheckCircle size={20} />,
    error: <XCircle size={20} />,
  };

  return (
    <div
      className={`fixed bottom-5 right-5 flex items-center gap-3 text-white px-4 py-3 rounded-xl shadow-lg ${styles[type]}`}
    >
      {icons[type]}
      <span>{message}</span>
    </div>
  );
};

export default Toast;
