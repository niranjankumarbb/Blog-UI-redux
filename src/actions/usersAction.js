import axios from "axios"

//async
export const startGetUsers =()=>{
    console.log('entered useraction async')

    return (dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log(response.data)
            const users = response.data
            dispatch(setUsers(users))
        })
    }
}

//sync
export const setUsers=(users)=>{
    console.log('entered useraction sync')

    return { type : 'SET_USERS', payload : users}
} 

