import {FETCH_POSTS , NEW_POST} from '../Actions/Types';

export const postData = (data) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts' ,{ 
    method : 'POST',
    headers : {
        'content-type' : 'application/json'
    },
    body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(serRes =>{ 
        console.log(serRes)
        return dispatch({
            type : NEW_POST,
            status : serRes
        })
    })
}