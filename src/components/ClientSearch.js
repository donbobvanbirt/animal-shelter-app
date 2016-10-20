import React, { Component } from 'react';
import { Table, Container, Button, Icon, Input, Header } from 'semantic-ui-react'

import PetActions from '../actions/PetActions'
import PetStore from '../stores/PetStore'

export default class ClientSearch extends Component {
  constructor() {
    super();
    this.state = {
      client: PetStore.getOwner(),
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
    PetActions.clientSearch(this.state.searchForm);
  }

  _onChange() {
    this.setState({
      client: PetStore.getOwner()
    }, console.log('this.state', this.state))
  }

  render() {
    let { client } = this.state;
    let clientList, clientName, clientId;

    if (client) {
      clientName = client[0].Owner;
      clientId = client[0].id;
      clientList = client.map((item, i) => {
        let { name, type } = item;
        return (
          <Table.Row key={i}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{type}</Table.Cell>
          </Table.Row>
        )
      })
    }

    return (
      <Container>
        <Header as='h2'>Search by Client Name:</Header>
        <Input onChange={(e) => this.searchBarVal(e)} fluid icon='search' placeholder='Client Name...' />
        <Button onClick={this.submitSearch} primary>Submit</Button>
        <Header as='h2' textAlign='center'>Name: {clientName}</Header>
        <Header as='h3' textAlign='center'>Client ID: {clientId}</Header>
        <Header as='h3'>{clientName}'s Pets:</Header>
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
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
