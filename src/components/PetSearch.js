import React, { Component } from 'react';
import { Table, Container, Button, Icon, Input, Header } from 'semantic-ui-react'

import PetActions from '../actions/PetActions'
import PetStore from '../stores/PetStore'

export default class PetSearch extends Component {
  constructor() {
    super();
    this.state = {
      pet: PetStore.getPet(),
      searchForm: ''
    }
    this._onChange = this._onChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  componentWillMount() {
    PetStore.startListening(this._onChange)
  }

  componentWillUnmount () {
    PetStore.stopListening(this._onChange)
  }

  searchBarVal(e) {
    this.setState({
      searchForm: e.target.value
    })
  }

  submitSearch() {
    console.log('this.state.searchForm', this.state.searchForm)
    PetActions.petSearch(this.state.searchForm);
  }

  _onChange() {
    this.setState({
      pet: PetStore.getPet()
    })
  }

  render() {
    let { pet } = this.state;
    let petList, petName, petId;
    console.log('this.state', this.state)

    if (pet) {
      // petName = pet[0].Owner;
      // petId = pet[0].id;
      petList = pet.map((item, i) => {
        let { name, type, Owner, id } = item;
        return (
          <Table.Row key={i}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{type}</Table.Cell>
            <Table.Cell>{Owner}</Table.Cell>
          </Table.Row>
        )
      })
    }

    return (
      <Container>
        <Input onChange={(e) => this.searchBarVal(e)} fluid icon='search' placeholder='Pet Name...' />
        <Button onClick={this.submitSearch} primary>Submit</Button>

        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Owner</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {petList}
          </Table.Body>
        </Table>

      </Container>
    )
  }

}
