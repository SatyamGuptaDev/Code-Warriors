import React from 'react';
import { Link, Routes, useParams, Route } from 'react-router-dom';
import { Sidebar } from '../../../components/SideBar';
import Try from '../gameComp/Game';
import './Learn.css';

export default function Learn({ topicInfo, module }) {
  const { topic } = useParams();

  // Find the selected topic in the topicInfo array
  const selectedTopic = topicInfo.find((item) => item.code === topic);

  if (!selectedTopic) {
    // Handle the case where the topic is not found
    return <p className="text-red-500">Topic not found</p>;
  }

  return (
    <>
      <div className="fade-in mx-auto pt-12 text-white bg-black" style={{ height: '100vh', width: '100vw' }}>
        <div className='slider-sidebar fade-in text-white absolute top-5 left-5'>
          <Sidebar />
        </div>
        <h2 className="text-3xl mb-4">{selectedTopic.title}</h2>
        <div className='mx-auto p-2 text-white bg-black w-fit h-fit'>
          <h1 className="text-2xl text-center text-gray-500 mb-8">Learn from these resources</h1>
          <ul className="flex justify-center items-center gap-5 text-left list-disc pl-8" style={{ flexDirection: 'column' }}>
            {selectedTopic.links.map((link, index) => (
              <li key={index}>
                <a href={link} target='_blank' rel="noopener noreferrer" className="text-blue-400 text-left text-1xl hover:scale-110 hover:text-blue-600 hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Link to={`/project/${module}/quiz/${selectedTopic.code}`}>
          <button className="bg-blue-600 mt-4 absolute left-1/2 -translate-x-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Take on Challenges
          </button>
        </Link>
      </div>
    </>
  );
}
