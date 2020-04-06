import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { startGetUsers } from './actions/usersAction'


class UsersList extends React.Component{
   

    componentDidMount(){
        if(this.props.users.length===0){
            this.props.dispatch(startGetUsers())
        }
      }

    render(){
        //console.log(this.props)
        return (
        <div>
            <h1> Users List - {this.props.users.length}</h1>
            <ul>
                {
                    this.props.users.map((user)=>{
                        return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                    })
                }
            </ul>
        </div>


        )
    }
}

const mapStateToProps = (state)=>{
    return {
        users : state.users
    }
}

export default connect(mapStateToProps)(UsersList)