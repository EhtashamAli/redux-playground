import {FETCH_POSTS , NEW_POST} from '../Actions/Types';

export const fetchPosts = () =>  dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(result => result.json())
    .then(posts => {
        const post = posts.filter( cnd => cnd.id <= 10)
        return dispatch({
        type : FETCH_POSTS,
        payload : post
    })});
};