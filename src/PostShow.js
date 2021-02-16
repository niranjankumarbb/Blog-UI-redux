import React from 'react' 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import {startGetComments} from './actions/commentsAction'
import {startGetUsers} from './actions/usersAction'
import {startGetPosts} from './actions/postsAction'

class PostShow extends React.Component {    
   
    componentDidMount(){
         if (this.props.users.length === 0 ) {
            this.props.dispatch(startGetUsers())
            this.props.dispatch(startGetPosts())
          }
          if (this.props.postComments.length === 0) {
            this.props.dispatch(startGetComments())
          }
        } 
    
    render() {
        return (
            <div> 
                 {(this.props.post && this.props.users.length>0) ? (
                    <div> 
                        <h2>User Name : {this.props.users.find(user=> user.id === this.props.post.userId).name}</h2>
                      <h4>Title : {this.props.post.title} </h4>
                      <h4>Body : {this.props.post.body} </h4>

                      <h4>Comments </h4>

                       <ul>{
                            this.props.postComments.map(comment=>{
                            return <li key={comment.id}>{comment.body} </li>
                             } )}
                    </ul> 

                    <Link to={`/users/${this.props.post.userId}`} className="btn btn-link">More posts of the authors</Link>                
                    
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
        postComments:state.comments.filter(comment=> comment.postId == props.match.params.id),
        post : state.posts.find(post=> post.id == props.match.params.id),
        users : state.users
    }
}

export default connect(mapStateToProps)(PostShow) 