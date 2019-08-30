import React from 'react';
import '../../assets/css/Timeline/Post.css';

import Comment from './Comment';

function Post({ data }) {
  return (
    <div class="post-content">
      <img class="avatar" src={data.author.avatar} />
      <h5>{data.author.name} <br /><small>{data.date}</small></h5>
      <p> { data.content } </p>

      {data.comments.map(comment => 
        <Comment 
          key={comment.id} 
          data={comment} />
      )}

    </div>
  );
}

export default Post;