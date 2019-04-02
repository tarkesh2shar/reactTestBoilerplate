import {SAVE_COMMENT,FETCH_COMMENTS} from './type';
import axios from 'axios';

export function saveCommnet(comment){
    return {
        type:SAVE_COMMENT,
        payload:comment
    }
}

export function fetchComments(){

    const res=axios.get('https://jsonplaceholder.typicode.com/comments')

    return{
        type:FETCH_COMMENTS,
        payload:res
    }

}