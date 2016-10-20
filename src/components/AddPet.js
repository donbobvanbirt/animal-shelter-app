import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react'

import PetActions from '../actions/PetActions'

export default class AddPet extends Component {
  constructor() {
    super();

    this.addNewPet = this.addNewPet.bind(this);
  }

  addNewPet(e) {
    e.preventDefault();
    let { name, type } = this.refs;
    let petObj = {
      name: name.value,
      type: type.value,
      ownerId: 0
    }
    // console.log('petObj:', petObj)
    PetActions.addNewPet(petObj);
    name.value = '';
    type.value = '';
  }

  render() {
    return (
      <Container>
        <Header as='h2'>Add New Pet:</Header>
        <Form onSubmit={this.addNewPet}>
          <Form.Field>
            <label>Pet Name</label>
            <input name="petName" ref="name" placeholder='Sir Barks-A-Lot...' />
          </Form.Field>
          <Form.Field>
            <label>Type</label>
            <input name="petType" ref="type" placeholder='Cat, dog, snake, etc...' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}
