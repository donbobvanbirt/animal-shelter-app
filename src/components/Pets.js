import React, { Component } from 'react';
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { Menu, Container, Header } from 'semantic-ui-react'

import AddPet from './AddPet'
import AllPets from './AllPets'
import PetSearch from './PetSearch'

export default class Pets extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: 'all'
    }
  }

  handleItemClick(name) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    let subComponent;

    if (activeItem === "add") {
      subComponent = <AddPet/>
    } else if (activeItem === "all") {
      subComponent = <AllPets/>
    } else if (activeItem === "search") {
      subComponent = <PetSearch/>
    }

    return (
      <div>
        <Container>
          <Header as='h1' textAlign='center'>Animal Shelter</Header>

          <Menu tabular>
            <Menu.Item name='add' active={activeItem === 'add'} onClick={() => this.handleItemClick('add')} />
            <Menu.Item name='view all' active={activeItem === 'all'} onClick={() => this.handleItemClick('all')} />
            {/* <Menu.Item name='view available' active={activeItem === 'available'} onClick={() => this.handleItemClick('available')} /> */}
            <Menu.Item name='search' active={activeItem === 'search'} onClick={() => this.handleItemClick('search')} />
          </Menu>
        </Container>
        {subComponent}

      </div>
    )
  }
}
