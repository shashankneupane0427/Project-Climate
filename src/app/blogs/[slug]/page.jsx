import React from 'react';
import posts from '../blogContents/blogs.json';
import Footer from '@/components/Footer';

const Page = ({ params }) => {
    const { slug } = params; // Accessing the dynamic slug directly

    // Find the specific post based on the slug
    const post = posts.find(p => p.id === slug);

    if (!post) {
        return <p>Post not found.</p>; // Handle case where the post doesn't exist
    }

    return (
        <main style={{
            paddingLeft: '5%',  // Reduced padding for better layout control
            paddingRight: '5%',
        }} className="z-0 pb-[40px] pt-[150px] lg:pt-[170px] lg:mx-auto lg:max-w-[800px]"> {/* Centering and max width for larger screens */}

            <div className='w-full justify-center'>
                <h1 className='text-center text-2xl md:text-3xl font-bold mb-4'>{post.title}</h1> {/* Added margin-bottom */}
                
                <div className='w-full flex justify-center pt-4 items-center mb-4'> {/* Added margin-bottom */}
                    <h1 className='mr-2 text-lg'>By: {post.authorID}</h1>
                    <div className="w-8 h-8 rounded-full flex overflow-hidden">
                        <img
                            src={'/Homepage/fair.jpg'} 
                            alt={`Profile picture of author`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className='w-full mb-4'> 
                    <img 
                        src={post.thumbnail} 
                        alt="" 
                        className='w-full h-auto md:h-[250px] lg:h-[300px] object-cover'
                    />
                </div>

                <div className='text-center py-8 px-4 bg-gray-100 rounded-md shadow-md'> 
                    <div dangerouslySetInnerHTML={{ __html: post.content }} /> 
                </div>
            </div>
            
        </main>
    );
}

export default Page;
