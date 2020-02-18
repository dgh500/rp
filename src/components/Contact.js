import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = { message: '', name: '', email: '', display: 'form' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit() {
    const templateId = 'redpanda';
    this.sendMessage(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email
    });
  }

  sendMessage (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
    ).then(res => {
      this.setState({display: 'complete'});
    })
    // Handle errors here however you like, or use a React error boundary
    .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
    const { display } = this.state;
    return (
      <div id="contact">
      {display === 'complete' &&
      <div id="contactComplete">
        <h1>Thank You</h1>
        <p>Thanks for sending me your idea - I will be in touch soon to discuss your frame!</p>
      </div>
      }
      {display === 'form' &&
        <form>
        <h1>Get in Touch!</h1>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" required />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" value={this.state.email} onChange={this.handleChange} placeholder="email@example.com" required />
        <label htmlFor="message">Message</label>
        <textarea
        id="message"
        name="message"
        onChange={this.handleChange}
        placeholder="Please contact me with any theme & I will personalise it to match your wishes & create something special for you x "
        required
        value={this.state.message}
        />
        <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
        </form>
      }
      </div>
  	);
  }
}

export default Contact;
