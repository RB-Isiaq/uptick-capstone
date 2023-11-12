import React from 'react';

interface ModalProps {
  isOpen: boolean;
  message: string;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-raleway">
      <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div className="z-50 w-96 bg-white rounded-lg shadow-lg p-4">
        <div className="text-xl font-bold mb-2">Response</div>
        <p>{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => onClose(!isOpen)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
