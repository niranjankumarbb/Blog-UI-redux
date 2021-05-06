import Home from './Home'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import { BrowserRouter, Route, Link} from 'react-router-dom'
import UsersList from './UsersList'
import UserShow from './UserShow'
import PostsList from './PostsList'
import PostShow from './PostShow'

 function App(props){
 
     return (
         <BrowserRouter>
          <div className = "container">
              <Link to='/' className="btn btn-primary">  Home</Link>
              <Link to='/users' className="btn btn-primary"> Users</Link>
              <Link to='/posts' className="btn btn-primary"> Posts</Link> 

              <Route path='/'  component = {Home} exact={true} />
              <Route path='/users' component = {UsersList}  exact ={true}/>
              <Route path='/users/:id' component = {UserShow} />
              <Route path='/posts'  component = {PostsList}  exact={true}/>
              <Route path='/posts/:id'  component = {PostShow} />  
           </div>
         </BrowserRouter>
     )
 }
 
 export default App