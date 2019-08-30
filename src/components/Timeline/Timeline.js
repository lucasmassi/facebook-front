import React, { Component } from 'react';

import Post from './Post';
import '../../assets/css/Timeline/Timeline.css';

class Timeline extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        date: '04 Jun 2019',
        content: 'Fala galera, beleza? Estou aqui para agradecer',
        comments: [
          {
            id: 1,
            author: {
              name: 'Carlos Alberto',
              avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: 'Carlos Alberto',
              avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            content: "Pessoal, alguém sabe se o Facebook está online? "
          }
        ],
      },
      {
        id: 2,
        author: {
          name: 'Lucas Massi',
          avatar: 'https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, to locasso',
        comments: [
          {
            id: 1,
            author: {
              name: 'João Peres',
              avatar: 'https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            },
            content: "Conteúdo do comentário"
          }
        ],
      }
    ]
  };

  render() {
    return  ( 
      <div class="timeline-content">
        {this.state.posts.map(post => (
          <Post
            key={post.id} 
            data={post}
          />
        ))}
      </div> 
    );
  }
}

export default Timeline;