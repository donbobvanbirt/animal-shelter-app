import React, { Component } from 'react';
import { Table, Container, Button, Icon, Modal, Header, Dropdown } from 'semantic-ui-react'

import PetActions from '../actions/PetActions'
import PetStore from '../stores/PetStore'

export default class AllClients extends Component {
  constructor() {
    super();
    this.state = {
      owners: PetStore.getAllOwners()
    }
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    PetActions.getAllOwners();
    PetStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    PetStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      owners: PetStore.getAllOwners()
    })
  }

  render() {
    let { owners } = this.state;
    let clientList;

    if (owners) {
      clientList = owners.map((owner) => {
        let { name, id } = owner;
        return (
          <Table.Row key={id}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{id}</Table.Cell>
          </Table.Row>
        )
      })
    }

    return (
      <Container>
        <Header as='h2'>All Clients:</Header>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>ID</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {clientList}
          </Table.Body>
        </Table>

      </Container>
    )
  }

}
