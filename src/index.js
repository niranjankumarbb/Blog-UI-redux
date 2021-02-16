
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {startGetPosts} from './actions/postsAction'
import {startGetUsers} from './actions/usersAction'
import {startGetComments} from './actions/commentsAction'
import configureStore from './store/configureStore'


console.log('index file execution 1')

const store = configureStore()
console.log('exit configurestore')

// console.log('store getstate', store.getState())

//To handle page reloads
store.dispatch(startGetPosts())
console.log('index file execution 2')
store.dispatch(startGetUsers())
console.log('index file execution 3')

store.dispatch(startGetComments())

console.log('index file execution 4')




store.subscribe(()=>{
    console.log('subscribe',store.getState())
})


console.log('index file execution 5')


const ele = (
    <Provider store = {store}>
        <App/>
    </Provider>
)
console.log('index file execution 6')


ReactDOM.render(ele , document.getElementById('root'))