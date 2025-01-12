

import React from 'react'
import Post from './Post';
import Link from 'next/link';
const PostItem = () => {
    const posts = [
        {
            id: '1',
            thumbnail: '/images/grasslad.jpg',
            category: 'education',
            title: 'This is the title of the very first post on this blog.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor.',
            authorID: 3
        },
        {
            id: '2',
            thumbnail: '/images/grasslad.jpg',
            category: 'technology',
            title: 'Exploring the latest adfmad sifnaoisdfoi jasoidfj oasj dvancements in AI.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis incidunt.',
            authorID: 4
        },
        {
            id: '3',
            thumbnail: '/images/grasslad.jpg',
            category: 'travel',
            title: 'Top 10 destinations to visit in 2024.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ea deleniti.',
            authorID: 5
        },
        {
            id: '4',
            thumbnail: '/images/grasslad.jpg',
            category: 'health',
            title: 'How to maintain a balanced diet.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, dicta.',
            authorID: 2
        },
        {
            id: '5',
            thumbnail: '/images/grasslad.jpg',
            category: 'lifestyle',
            title: 'Simple tips to declutter your home.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio atque ad.',
            authorID: 1
        },
        {
            id: '6',
            thumbnail: '/images/grasslad.jpg',
            category: 'finance',
            title: 'Understanding the basics of investing.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque dolorum.',
            authorID: 3
        },
        {
            id: '7',
            thumbnail: '/images/grasslad.jpg',
            category: 'education',
            title: 'Top resources for learning programming in 2024.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, error.',
            authorID: 6
        },
        {
            id: '8',
            thumbnail: 'Thumbnail8/images/grasslad.jpg',
            category: 'sports',
            title: 'The most anticipated sports events of the year.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, distinctio.',
            authorID: 7
        },
        {
            id: '9',
            thumbnail: '/images/grasslad.jpg',
            category: 'entertainment',
            title: 'Upcoming blockbuster movies you can’t miss.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore asperiores.',
            authorID: 8
        },
        {
            id: '10',
            thumbnail: '/images/grasslad.jpg',
            category: 'technology',
            title: 'The future of virtual reality technology.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam possimus.',
            authorID: 4
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