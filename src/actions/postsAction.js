import axios from "axios"

export const startGetPosts =()=>{ 
    return (dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log('postaction async then response', response.data)
            const posts = response.data
            dispatch(setPosts(posts))
        })
        .catch(err=>{
            console.log('postaction err', err)
        })
    }
}

export const setPosts=(posts)=>{ 
    return { type : 'SET_POSTS', payload : posts}
}