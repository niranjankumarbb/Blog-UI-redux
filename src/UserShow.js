import React from 'react' 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import {startGetUsers} from './actions/usersAction'
import {startGetPosts} from './actions/postsAction'
import {getUsers}  from './actions/usersAction'


class UserShow extends React.Component {
   
   

    render(){ 
         return (
            <div> 
                {this.props.user ? (
                    <div> 
                          <h2>User Name : {this.props.user.name}</h2>
                          <h2> Posts Written by user</h2>
                            <ul>
                                 {this.props.posts.map(post => {
                                     return <li key={post.id}> <Link to={`/posts/${post.id}`} className="btn btn-link">{post.title}</Link></li>
                                  })}
                               </ul>
                         </div>
                ) : (
                    <p> loading ...</p>
                )}   
            </div> 
        )
    }
}

const mapStateToProps = (state, props)=>{ 
     return {
        posts : state.posts.filter(post=> post.userId == props.match.params.id),
         user : state.users.find(user => user.id == props.match.params.id)
     }

}
 
export default connect(mapStateToProps)(UserShow) 