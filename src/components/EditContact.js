import React, { Component } from "react";

export class EditContact extends Component {
 
    constructor(props) {
        super(props)
    
        const {id , name , email} = props.location.state.contact

        this.state = {
            id ,
            name ,
            email 
        }
    }
    
 
  update = (e) =>{
    e.preventDefault()  //to not refresh the page
    if(this.state.name === "" || this.state.email === ""){
     return   alert("all the field are obligatory")
    }
    this.props.updateContactHandler(this.state)  //to get it in app.js
    console.log(this.state)
    this.setState({name: "" , email: ""})

    this.props.history.push("/")  

  }

  render() {
    return (
      <div className="ui main">
        <h2>update Contact</h2>
        <form className="ui form" onSubmit={this.update} >
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name}  onChange={(e)=> this.setState({name:e.target.value})} />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" value={this.state.email}  onChange={(e)=> this.setState({email:e.target.value})} />
          </div>

          <button className="ui button blue"  >update</button>
        </form>
      </div>
    );
  }
}

export default EditContact;
