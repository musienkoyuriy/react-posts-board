import { ADD_POST, LIKE_UNLIKE_POST, ADD_COMMENT } from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    author: 'John',
    date: '01/10/2015',
    text: 'Some post',
    likes: 53,
    comments: []
  }
];

export default function posts(state = initialState, action) {
  switch(action.type) {
  case ADD_POST:
    return [
      {
        id: state.reduce((maxId, post) => Math.max(maxId, post.id), -1) + 1,
        author: 'Your name',
        date: '12/1/2015',
        text: action.text,
        likes: 0,
        comments: []
      },
      ...state
    ];

  case LIKE_UNLIKE_POST:
    return state.map((post) => {
      let { liked, likes } = post;  
      likes = liked ? likes - 1 : likes + 1;
      return post.id === action.id ?
             {...post, liked: !liked, likes } :
             post
    });

  case ADD_COMMENT:
    return state.map((post) => {
      const { comments } = post;
      return post.id === action.id ?
             {
               ...post,
               comments: [
                 ...comments,
                 {
                   author: 'Your name',
                   date: '12/1/2015',
                   commentText: action.commentText
                 }
               ]
             } :
             post
    });
    default:
      return state;
  }
}
