
import React from 'react';
import '../app/global.css';
import Link from 'next/link';

const Post = ({ thumbnail, authorID, title, id, authorProfilePic }) => {
    return (
        <div className="relative rounded-2xl border-gray-200 border-2 overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl w-[350px] lg:w-[370px]">

            <div className=" h-[250px] w-full">
                <img
                    src={thumbnail}
                    alt={title}
                    className="h-full w-full object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" style={{ top: '50%' }}></div>
            </div>

            <div className="p-4 bg-white rounded-b-2xl">
                <div>
                    <h1 className="text-xl font-bold text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-ellipsis w-full">
                        {title}
                    </h1>
                </div>

                {/* Author Section with Profile Picture */}
                <div className="flex items-center space-x-2 mb-2">
                    
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                        <img
                            src={authorProfilePic || '/Homepage/fair.jpg'} // Fallback to a default profile picture
                            alt={`Profile picture of author ${authorID}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <span className="text-sm text-gray-600">
                        By: {authorID}
                    </span>
                </div>

                
            </div>
        </div>
    );
};

export default Post;
