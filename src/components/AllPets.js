import React, { Component } from 'react';
import { Table, Container, Button, Icon, Modal, Header, Dropdown } from 'semantic-ui-react'

import PetActions from '../actions/PetActions'
import PetStore from '../stores/PetStore'

export default class AllPets extends Component {
  constructor() {
    super();

    this.state={
      pets: PetStore.getAllPets(),
      owners: PetStore.getAllOwners(),
      adoptModelOpen: false
    }
    this._onChange = this._onChange.bind(this);
    this.adoptPet = this.adoptPet.bind(this);
    this.close = this.close.bind(this);
    // this.createAdoptButton = this.createAdoptButton.bind(this);
    // this.createUnadoptButton = this.createUnadoptButton.bind(this);
  }

  componentWillMount() {
    PetActions.getAllPets();
    PetActions.getAllOwners();
    PetStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    PetStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      pets: PetStore.getAllPets(),
      owners: PetStore.getAllOwners()
    })
  }

  adoptPet(id) {
    console.log('id:', id)
    this.setState({
      adoptModelOpen: true,
      currectPet: id
    })
  }

  unadoptPet(id) {
    console.log('id:', id)
  }

  close() {
    this.setState({ adoptModelOpen: false })
  }

  createAdoptButton(id) {
    return (
      <Button animated='vertical' onClick={() => this.adoptPet(id)}>
        <Button.Content hidden>Adopt</Button.Content>
        <Button.Content visible>
          <Icon name='paw' />
        </Button.Content>
      </Button>
    )
  }

  createUnadoptButton(id) {
    return (
      <Button animated='vertical' color='red' onClick={() => this.unadoptPet(id)}>
        <Button.Content hidden>Return</Button.Content>
        <Button.Content visible>
          <Icon name='warning' />
        </Button.Content>
      </Button>
    )
  }

  render() {
    let { pets, adoptModelOpen, owners } = this.state;
    console.log('owners:', owners);
    let petList = '';
    let ownerList = '';

    if (pets) {
      petList = pets.map((pet) => {
        let { name, type, id, ownerId } = pet;
        let adoptOption = ownerId ? this.createUnadoptButton(id) : this.createAdoptButton(id)
        return (
          <Table.Row key={id}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{type}</Table.Cell>
            <Table.Cell textAlign='right'>{adoptOption}</Table.Cell>
          </Table.Row>
        )
      })
    }

    if (owners) {
      ownerList = owners.map(owner => {
        let { name, id } = owner;
        return (
          <Dropdown.Item text={name} key={id}/>
        )
      })
    }

    return (
      <Container>

        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell textAlign='right'>Adopt/Return</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {petList}
          </Table.Body>
        </Table>

        <Modal open={adoptModelOpen} onClose={this.close}>
          <Modal.Content image>
            <Modal.Description>
              <Header>Who is Adopting this pet?</Header>
              <Dropdown text='Clients'>
                <Dropdown.Menu>

                  {ownerList}

                </Dropdown.Menu>
              </Dropdown>
            </Modal.Description>
            <Button primary>Adopt</Button>
          </Modal.Content>
        </Modal>

      </Container>

    )
  }
}
