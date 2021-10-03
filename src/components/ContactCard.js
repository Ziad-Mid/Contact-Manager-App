import React from 'react'
import { Link } from 'react-router-dom'
import user from "../images/user.png"

function ContactCard(props) {

    const {id, name,email} = props.contact
    return (
        <div className="item">
            <img className="ui avatar image" src={user} />
            <div className="content">
                <Link to={{pathname:`/contact/${id}`, state:{contact : props.contact}}} >
                <div className="header">
                    {name}
                </div>
             
                    {email}
                </Link>
            </div>
                <i className="trash alternate outline icon"  onClick={()=>props.clickHandler(id)} ></i>
                <Link to={{pathname:`/edit`, state:{contact : props.contact}}} >
               
                <i className="edit alternate outline icon"   ></i>
                </Link>
        </div>
    )
}

export default ContactCard
