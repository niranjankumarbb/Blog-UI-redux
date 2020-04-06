
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import {startGetPosts} from './actions/postsAction'
import {startGetUsers} from './actions/usersAction'
import {startGetComments} from './actions/commentsAction'
import configureStore from './store/configureStore'



const store = configureStore()
//console.log('store getstate', store.getState())

//To handle page reloads
store.dispatch(startGetPosts())
store.dispatch(startGetUsers())
store.dispatch(startGetComments())



store.subscribe(()=>{
    console.log('subscribe',store.getState())
})




const ele = (
    <Provider store = {store}>
        <App/>
    </Provider>
)

ReactDOM.render(ele , document.getElementById('root'))