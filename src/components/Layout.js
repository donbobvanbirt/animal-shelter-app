import { Menu, Segment, Label, Icon } from 'semantic-ui-react'
import React, { Component } from 'react'
import { Link } from 'react-router'
// import classNames from 'classnames'

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: ''
    }
  }

  handleItemClick(name) {
    this.setState({ activeItem: name });
  }

  render() {
    // let path = this.props.location.pathname
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing inverted>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={() => this.handleItemClick('home')}><Link to="/">Home</Link></Menu.Item>
          <Menu.Item name='pets' active={activeItem === 'pets'} onClick={() => this.handleItemClick('pets')} to='/pets'><Link to="/pets">Pets</Link></Menu.Item>
          <Menu.Item name='clients' active={activeItem === 'clients'} onClick={() => this.handleItemClick('clients')}><Link to="/clients">Clients</Link></Menu.Item>
        </Menu>
        {this.props.children}
      </div>
    )
  }
}
