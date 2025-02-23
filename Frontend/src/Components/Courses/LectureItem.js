// src/components/LectureItem.jsx
import React from 'react';
import VideoPlayer from './VideoPlayer';
import BuyPlan from './BuyPlan';

const LectureItem = ({ lecture, isActive, onToggle }) => {
  return (
    <div className="border border-green-300 rounded-md overflow-hidden shadow-sm">
      <button
        onClick={onToggle}
        className="w-full text-left px-4 py-3 bg-green-500 text-white font-semibold flex justify-between items-center focus:outline-none"
      >
        <span>{lecture.title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isActive ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isActive && (
        <div className="px-4 py-5 bg-white">
          {lecture.isAccessible ? (
            <div className="space-y-6">
              {lecture.videos.map((video) => (
                <VideoPlayer key={video.id} title={video.title} url={video.url} />
              ))}
            </div>
          ) : (
            <BuyPlan />
          )}
        </div>
      )}
    </div>
  );
};

export default LectureItem;
