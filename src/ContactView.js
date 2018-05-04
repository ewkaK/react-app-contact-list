import React, { Component, Fragment } from 'react';

class ContactView extends Component {
  render() {
    return (
      <Fragment>
        <form>
          <input name="name" placeholder="Name"/>
          <input name="phone" placeholder="Phone" />
          <input name="email" placeholder="E-mail" />
          <input name="groups" placeholder="Groups" />
        </form>
      </Fragment>
    )
  }
}

export default ContactView;