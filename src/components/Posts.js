import React from 'react';
import Post from './Post';

const posts = [
  {
    sourceProfile: 'assets/img/meowed.svg',
    nameProfile: 'meowed',
    qtdLikes: '101.523',
    mainLiked: 'respondeai',
    mainLikedSource: 'assets/img/respondeai.svg',
    media: 'assets/img/gato-telefone.svg',
    liked: true,
    mediaType: 'image',
  },
  {
    sourceProfile: 'assets/img/barked.svg',
    nameProfile: 'barked',
    qtdLikes: '97.159',
    mainLiked: 'adorable_animals',
    mainLikedSource: 'assets/img/respondeai.svg',
    media: 'assets/img/dog.svg',
    liked: false,
    mediaType: 'image',
  },
  {
    sourceProfile: 'assets/img/barked.svg',
    nameProfile: 'adorable_animals',
    qtdLikes: '94.167',
    mainLiked: 'adorable_animals',
    mainLikedSource: 'assets/img/respondeai.svg',
    media: 'assets/video/video.mp4',
    liked: false,
    mediaType: 'video',
  },
];

export default function Posts() {
  return (
    <div class="posts">
      {posts.map((post) => (
        <Post
          sourceProfile={post.sourceProfile}
          nameProfile={post.nameProfile}
          qtdLikes={post.qtdLikes}
          mainLiked={post.mainLiked}
          mainLikedSource={post.mainLikedSource}
          media={post.media}
          liked={post.liked}
          mediaType={post.mediaType}
        />
      ))}
    </div>
  );
}
