import React, { Component, Fragment } from 'react';

class ContactView extends Component {

  state = {
    name: '',
    phone: '',
    email: '',
    groups: '',

    contacts: []
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <Fragment>
        <div class="add-new">
          <h2 class="App-title ">Add new contact</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              name = "name"
              value = {this.state.name}
              onChange = {this.handleChange}
              placeholder = "Name" />
            <br />
            <input
              name="phone"
              value = {this.state.phone}
              onChange = {this.handleChange}
              placeholder="Phone" />
            <br />
            <input
              name="email"
              value = {this.state.email}
              onChange = {this.handleChange}
              placeholder="E-mail" />
            <br />
            <input
              name="groups"
              value = {this.state.groups}
              onChange = {this.handleChange}
              placeholder="Groups" />
            <br />
            <button>Add</button>
          </form>
        </div>


        <ul>

        </ul>
      </Fragment>
    )
  }
}

export default ContactView;