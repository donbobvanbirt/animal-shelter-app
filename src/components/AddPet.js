import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react'

const AddPet = props => {

  return (
    <Container>
      <Header as='h2'>Add New Pet:</Header>
      <Form>
        <Form.Field>
          <label>Pet Name</label>
          <input placeholder='Sir Barks-A-Lot...' />
        </Form.Field>
        <Form.Field>
          <label>Type</label>
          <input placeholder='Cat, dog, snake, etc...' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  )
}

export default AddPet;
