import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="group flex items-center gap-2 px-4 py-2 rounded-lg shadow-sm  text-gray-600 dark:text-gray-400  hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-200" />
      <span className="text-base font-medium">Back</span>
    </button>
  );
};

export default BackButton;
