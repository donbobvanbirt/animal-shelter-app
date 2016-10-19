import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

import PetActions from '../actions/PetActions'

export default class AllPets extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    PetActions.getAllPets();
  }

  render() {

    return (
      <h1>All pets!</h1>
    )
  }
}
