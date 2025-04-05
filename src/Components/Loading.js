import React from 'react';

const Loading = ({ size = 'default' }) => {
  const sizeClasses = {
    small: 'w-6 h-6',
    default: 'w-10 h-10',
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`${sizeClasses[size]} border-4 border-gray-200 dark:border-gray-700 border-t-[#0079BF] dark:border-t-[#026AA7] rounded-full animate-spin`}></div>
    </div>
  );
};

export default Loading;
