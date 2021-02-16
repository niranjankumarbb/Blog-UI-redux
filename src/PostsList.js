import React from 'react'
 import {Link} from 'react-router-dom'
import {startGetPosts} from './actions/postsAction'
import {connect} from 'react-redux'


class PostsList extends React.Component{
   
    componentDidMount(){ 
      if(this.props.posts.length===0){
          this.props.dispatch(startGetPosts())
      }
    }

    render(){
       return (
        <div>
            <h1> Total Posts :  {this.props.posts.length}</h1>
            <ul>
                {
                    this.props.posts.map((post, i)=>{
                return <li key={post.id}><Link to={`/posts/${post.id}`} className="btn btn-primary">
                        {post.title}</Link></li>
                    })
                }
            </ul>
        </div>
        )
    }
}

const mapStateToProps = (state)=>{ 
    return {
        posts : state.posts
    }
}
 
export default connect(mapStateToProps)(PostsList)