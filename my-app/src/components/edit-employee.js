import React, { Component } from 'react'
import * as actions from '../store/actions';

import { connect } from 'react-redux'
import { putRemoteData } from '../redux/actions'
import { Button, Modal, TextInput, Switch, Row } from 'react-materialize'

class EditEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
        firstName: this.props.arr.firstName,
        lastName: this.props.arr.lastName,
        prefix: this.props.arr.prefix,
        avatar: this.props.arr.avatar,
        email: this.props.arr.email,
        phone: this.props.arr.phone,
        address: this.props.arr.address,
        employees: this.props.arr.employees,
        id: this.props.arr.id,

    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
    })
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }


  handleSubmit = e => {
    e.preventDefault()
    this.props.putRemoteData(this.state)
  }

  render() {
    const {
        firstName,
        lastName,
        prefix,
        email,
        phone,
        address,
        employees
      } = this.state
      const isEnabled =
        firstName.length > 0 &&
        lastName.length > 0 &&
        prefix.length > 0 &&
        email.length > 0 &&
        phone.length > 0 &&
        address.length > 0 &&
        employees.length > 0 

    return (
      <Modal
        header='Edit Employee Information'
        trigger={
          <Button
            floating
            small
            waves='light'
            className='add-edit-employee'
            icon='edit'
          />
        }>
       <form
            className='modal-content-edit'
            id='edit-form'
            onSubmit={this.handleSubmit}>
            <Row>
              <TextInput
                validate
                label='First Name'
                name='firstName'
                onChange={this.handleChange}
                value={this.props.arr.firstName}
                required
                error='First name is required'
              />
              <TextInput
                validate
                label='Last Name'
                name='lastName'
                onChange={this.handleChange}
                value={this.props.arr.lastName}
                required
                error='Last name is required'
              />
            </Row>
            <Row>
              <TextInput
                validate
                label='perfix'
                name='perfix'
                onChange={this.handleChange}
                value={this.props.arr.perfix}
              />
              <TextInput
                validate
                label='email'
                name='email'
                onChange={this.handleChange}
                value={this.props.arr.email}
                required
                error='email is required'
              />
            </Row>
            <Row>
              <TextInput
                validate
                label='phone'
                name='phone'
                onChange={this.handleChange}
                value={this.props.arr.phone}
                required
                error='phone is required'
              />
              <TextInput
                validate
                label='address'
                name='address'
                onChange={this.handleChange}
                value={this.props.arr.address}
              />
           
            </Row>
            <Button
              modal='close'
              disabled={isEnabled ? false : true}
              type='submit'
              waves='light'>
              Submit
            </Button>
            <Button onClick={()=>props.delete(id)}>Delete</Button>

          </form>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
    // data: state.data
});

const mapDispatchToProps = (dispatch, ) => ({
    get: ()=> dispatch(actions.getRemoteData()),
    put: (change,data, id) => dispatch(actions.putRemoteData(change,data, id)),
    delete : (id) => dispatch(actions.deleteRemoteData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);

