
import React from 'react' 
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import {startGetComments} from './actions/commentsAction'


class PostShow extends React.Component {
    
   
    componentDidMount(){
        this.props.dispatch(startGetComments())
    }
    
    
    render() {
        // console.log('new postshow', this.props)

      let  user = this.props.users.find(user=> user.id === this.props.post.userId)



        return (
            <div> 
                 {/* {this.props.user ? (
                    <div>  */}
                        <h2>User Name : {user.name}</h2>
                      <h4>Title : {this.props.post.title} </h4>
                      <h4>Body : {this.props.post.body} </h4>

                      <h4>Comments </h4>

                       <ul>{
                            this.props.postComments.map(comment=>{
                            return <li key={comment.id}>{comment.body} </li>
                             } )}
                    </ul> 

                    <Link to={`/users/${user.id}`} >More posts of the authors</Link>                
                    
                    {/* </div>
                ) : (
                    <p> loading ...</p>
                )}
                 
                 */}

               
            </div> 
        )
    }
}

const mapStateToProps = (state, props)=>{
    console.log('postshow params', props.match.params.id)
    return {
        postComments:state.comments.filter(comment=> comment.postId == props.match.params.id),
        post : state.posts.find(post=> post.id == props.match.params.id),
        users : state.users
    }
}

export default connect(mapStateToProps)(PostShow) 