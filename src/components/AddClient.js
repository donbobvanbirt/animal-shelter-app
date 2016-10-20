import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react'

import PetActions from '../actions/PetActions'

export default class AddPet extends Component {
  constructor() {
    super();

    this.addNewClient = this.addNewClient.bind(this);
  }

  addNewClient(e) {
    e.preventDefault();
    let { name } = this.refs;
    let clientObj = {
      name: name.value
    }
    // console.log('clientObj:', clientObj)
    PetActions.addNewClient(clientObj);
    name.value = '';
  }

  render() {
    return (
      <Container>
        <Header as='h2'>Add New Client:</Header>
        <Form onSubmit={this.addNewClient}>
          <Form.Field>
            <label>Name</label>
            <input name="petName" ref="name" />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
