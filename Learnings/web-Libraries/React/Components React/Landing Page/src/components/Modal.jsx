// src/components/Modal.jsx
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl w-96 p-6 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
