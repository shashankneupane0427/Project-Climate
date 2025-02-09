

import React from 'react'
import Post from './Post';
import Link from 'next/link';
const PostItem = () => {
    const posts = [
        {
            id: '1',
            thumbnail: '/Projects/projectone.jpeg',
            category: 'education',
            title: 'The Importance of Reforestation',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor.',
            authorID: 3
        },
        {
            id: '2',
            thumbnail: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhc3RpYyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
            category: 'technology',
            title: 'The Global Plastic Crisis',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis incidunt.',
            authorID: 4
        },
        {
            id: '3',
            thumbnail: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29sYXJ8ZW58MHx8MHx8fDA%3D',
            category: 'travel',
            title: 'Why Solar Power is the Future',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea deleniti.',
            authorID: 5
        },
        {
            id: '4',
            thumbnail: 'https://images.unsplash.com/photo-1570095378004-ce65d6c2d5bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsaW1hdGUlMjBjaGFuZ2V8ZW58MHx8MHx8fDA%3D',
            category: 'health',
            title: 'Climate Change Impacts Wildlife and Ecosystems',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dicta.',
            authorID: 2
        },
        {
            id: '5',
            thumbnail: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VzdGFuYWJsZSUyMGhvdXNlfGVufDB8fDB8fHww',
            category: 'lifestyle',
            title: 'Simple Steps to Make Your Home More Sustainable.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio atque ad.',
            authorID: 1
        }
    ];

    return (
        <>
            {posts.map((post) => (
                <Link href={`/blogs/${post.id}`} key={post.id} className='mb-8 '>
                    <Post thumbnail={post.thumbnail} authorID={post.authorID} title={post.title} />
                </Link>
            ))}
        </>
    )

}

export default PostItem