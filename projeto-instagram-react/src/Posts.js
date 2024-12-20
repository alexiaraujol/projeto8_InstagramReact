import React from 'react';
import Post from './Post';

export default function Posts() {
  const postsData = [
    {
      id: 1,
      user: 'meowed',
      userImg: 'assets/img/meowed.svg',
      postImg: 'assets/img/gato-telefone.svg',
      likedBy: 'respondeai',
      likesCount: 101523,
    },
    {
      id: 2,
      user: 'barked',
      userImg: 'assets/img/barked.svg',
      postImg: 'assets/img/dog.svg',
      likedBy: 'adorable_animals',
      likesCount: 99159,
    },
  ];

  return (
    <div className="posts">
      {postsData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
