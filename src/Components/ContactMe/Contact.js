import React from 'react'
import './contact.css'

import $ from 'jquery'

const apiURL = ''

export class ContactForm extends React.Component {
 constructor(props) {
  super(props)

  this.state = {
   name: '',
   email: '',
   subject: '',
   message: ''
  }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
 }

 handleChange = (e) => {
  let newState = {}
  newState[e.target.name] = e.target.value
  this.setState(newState)
 }


 handleSubmit = (e) => {
   e.preventDefault()

   var data = {
   name: this.state.name,
   email: this.state.email,
   subject: this.state.subject,
   message: this.state.message
  }

  this.setState({
   name: '',
   email: '',
   subject: '',
   message: ''
  })

  $.ajax({
    type: "POST",
    url : apiURL,
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),

    success: function () {
      // clear form and show a success message
      alert('Thanks!');
    },
    error: function () {
      // show an error message
      alert('Something went wrong. Please try again.');
    }
  });

 }

 render() {
  return(
    <div className="jumbotron jumbotron-fluid paral paralsec2" id="contact">
      <form className='react-form' method="post" onSubmit={this.handleSubmit}>
       <h1 id='formTitle'>Contact</h1>

       <fieldset className='form-group'>
        <label>Name:</label>
        <input id='formName' className='form-input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
       </fieldset>

       <fieldset className='form-group'>
         <label>Email:</label>
        <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
       </fieldset>

       <fieldset className='form-group'>
        <label>Subject:</label>
        <input id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
       </fieldset>

       <fieldset className='form-group'>
        <label>Message:</label>
        <textarea id='formMessage' className='form-textarea' name='message' required onChange={this.handleChange} value={this.state.message}></textarea>
       </fieldset>

       <div className='form-group'>
         <button id='formButton' className='form-btn' type='submit'>Send</button>
       </div>
      </form>
    </div>
  )
 }
}
