import axios from "axios"

//async
export const startGetPosts =()=>{
    console.log('entered postaction async')

    return (dispatch)=>{
        console.log('entered postaction async inside return')


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

//sync
export const setPosts=(posts)=>{
    console.log('entered postaction sync')

    return { type : 'SET_POSTS', payload : posts}
}