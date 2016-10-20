import React, { Component } from 'react';
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { Menu, Container } from 'semantic-ui-react'

import AddClient from './AddClient'
import AllClients from './AllClients'
import ClientSearch from './ClientSearch'

export default class Clients extends Component {
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
      subComponent = <AddClient/>
    } else if (activeItem === "all") {
      subComponent = <AllClients/>
    } else if (activeItem === "search") {
      subComponent = <ClientSearch/>
    }


    // console.log("subComponent", subComponent)

    return (
      <div>
        <Container>
          <h1>Clients</h1>
          <Menu tabular>
            <Menu.Item name='add' active={activeItem === 'add'} onClick={() => this.handleItemClick('add')} />
            <Menu.Item name='view all' active={activeItem === 'all'} onClick={() => this.handleItemClick('all')} />
            <Menu.Item name='search' active={activeItem === 'search'} onClick={() => this.handleItemClick('search')} />
          </Menu>
        </Container>
        {subComponent}

      </div>
    )
  }
}
