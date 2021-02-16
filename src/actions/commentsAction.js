import axios from "axios"

//async
export const startGetComments =()=>{
    console.log('entered commentsaction async')

    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response=>{
            console.log(response.data)
            const comments = response.data
            dispatch(setComments(comments))
        })
    }
}

//sync
export const setComments=(comments)=>{
    console.log('entered commentsaction sync')

    return { type : 'SET_COMMENTS', payload : comments}
}