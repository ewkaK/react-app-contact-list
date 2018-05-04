import React, { Component, Fragment } from 'react';

class ContactView extends Component {

  handleSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="Name" />
          <br />
          <input name="phone" placeholder="Phone" />
          <br />
          <input name="email" placeholder="E-mail" />
          <br />
          <input name="groups" placeholder="Groups" />
          <br />
          <button>Add</button>
        </form>

        <ul>

        </ul>
      </Fragment>
    )
  }
}

export default ContactView;