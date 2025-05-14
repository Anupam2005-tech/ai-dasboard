import React from "react";

type AvatarCardProps = {
  name: string;
  imageUrl: string;
  onEdit: () => void;
};

const AvatarCard: React.FC<AvatarCardProps> = ({ name, imageUrl, onEdit }) => {
  return (
    <div className="bg-amber-100 rounded-xl shadow-md p-6 w-full max-w-sm mx-auto sm:max-w-xs md:max-w-sm lg:max-w-md hover:shadow-lg transition-shadow duration-300 h-60">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover border border-gray-400"
      />
      <h2 className="text-center mt-4 font-semibold text-lg text-gray-800 break-words">
        {name}
      </h2>
      <div className="flex justify-center mt-4">
        <button
          onClick={onEdit}
          className="bg-blue-700 text-white px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base rounded hover:bg-blue-800 hover:cursor-pointer transition-colors"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default AvatarCard;
