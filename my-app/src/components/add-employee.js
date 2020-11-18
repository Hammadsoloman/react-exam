import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { postRemoteData } from '../store/actions'
import { Button, Modal, TextInput, Row } from 'react-materialize'

class AddEmployee extends Component {
  constructor(props) {
    super(props)
    this.state = {
        firstName: '',
        lastName: '',
        prefix: '',
        avatar: '',
        email: '',
        phone: '',
        address: '',
        employees: [],
        id: '',

    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      id: this.id,
    })
  }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value })
  }



  handleSubmit = e => {
    e.preventDefault()
    this.props.postRemoteData(this.state)
    document.getElementById('add-form').reset()
    this.resetInputFields()
  }

  resetInputFields() {
    this.setState({
      id: '',
      firstName: '',
      lastName: '',
      prefix: '',
      avatar: '',
      email: '',
      phone: '',
      address: '',
      employees: [],
    })
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
      <div className='add-employee'>
        <Modal
          header='Add New Employee'
          trigger={
            <Button
              floating
              large
              className='red add-edit-employee'
              waves='light'
              icon='add'
            />
          }>
          <form
            className='modal-content'
            id='add-form'
            onSubmit={this.handleSubmit}>
            <Row>
              <TextInput
                validate
                label='First Name'
                name='firstName'
                onChange={this.handleChange}
                value={this.state.firstName}
                required
                error='First name is required'
              />
              <TextInput
                validate
                label='Last Name'
                name='lastName'
                onChange={this.handleChange}
                value={this.state.lastName}
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
                value={this.state.perfix}
              />
              <TextInput
                validate
                label='email'
                name='email'
                onChange={this.handleChange}
                value={this.state.email}
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
                value={this.state.phone}
                required
                error='phone is required'
              />
              <TextInput
                validate
                label='address'
                name='address'
                onChange={this.handleChange}
                value={this.state.address}
              />
           
            </Row>
            <Button
              modal='close'
              disabled={isEnabled ? false : true}
              type='submit'
              waves='light'>
              Submit
            </Button>
          </form>
        </Modal>
      </div>
    )
  }
}
const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = (dispatch, postAction) => ({
 
    post: (data) => dispatch(actions.postRemoteData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
