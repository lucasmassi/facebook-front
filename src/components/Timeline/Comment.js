import React from 'react';
import '../../assets/css/Timeline/Comment.css';

function Comment({ data }) {
  return (
    <div class="comment-content">
      <img class="avatar" src={data.author.avatar} />
      <div class="commentary">
        <p> <strong>{data.author.name}</strong> { data.content } </p>
      </div>
    </div>
  );
}

export default Comment;