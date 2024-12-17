import React, { useState } from 'react';

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


function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [saved, setSaved] = useState(false);

  
  function imagemCurtida() {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  }

 
  function salvarImagem() {
    setSaved(!saved);
    
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={post.userImg} alt={post.user} />
          {post.user}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      
      <div className="conteudo" onClick={imagemCurtida} style={{ cursor: 'pointer' }}>
        <img src={post.postImg} alt="post" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            
            <ion-icon
              name={liked ? 'heart' : 'heart-outline'}
              style={{ color: liked ? 'red' : 'black', cursor: 'pointer' }}
              onClick={imagemCurtida}
            ></ion-icon>

            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>

         
          <div>
            <ion-icon
              name={saved ? 'bookmark' : 'bookmark-outline'}
              style={{ color: saved ? 'blue' : 'black', cursor: 'pointer' }}
              onClick={salvarImagem}
            ></ion-icon>
          </div>
        </div>

        
        <div className="curtidas">
          <img src="assets/img/respondeai.svg" alt={post.likedBy} />
          <div className="texto">
            Curtido por <strong>{post.likedBy}</strong> e{' '}
            <strong>outras {likesCount.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
