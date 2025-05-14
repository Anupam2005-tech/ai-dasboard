import React,{useState} from 'react';
import Modal from './Modal/Modal';
const Button: React.FC = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);



  return (
    <div>
      <button
        className="fixed bottom-4 right-4 bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white px-6 py-3 rounded-xl text-lg sm:text-base md:text-lg lg:text-xl shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300"
        onClick={() => setIsModalOpen(true)}
      >
        Create New Avatar
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Details">
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Image</label>
            <input
              type="file"
              accept="image/*"
              className="w-full"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Button;
