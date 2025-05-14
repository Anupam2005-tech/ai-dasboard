import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute z-50 flex items-center justify-center right-2 top-1/2">
      <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        { <h2 className="text-xl font-semibold mb-4"></h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
