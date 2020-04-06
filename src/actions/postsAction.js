import axios from "axios"

//async
export const startGetPosts =()=>{
    return (dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log('async action', response.data)
            const posts = response.data
            dispatch(setPosts(posts))
        })
    }
}

//sync
export const setPosts=(posts)=>{
    return { type : 'SET_POSTS', payload : posts}
}