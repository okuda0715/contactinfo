import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: 0,
      country: '',
      email: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({firstName: event.target.firstName});
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, address, city, state, zipCode, country, email } = this.state;

    axios.post('/api/contactinfos', { firstName, lastName, address, city, state, zipCode, country, email })
      .then((result) => {
        alert('thanks for submitting');
        return result;
      }).catch(err => err);
    // this.props.addInfo(this.refs.firstNameInput.value, this.props._id);
    // this.refs.firstNameInput.value = '';
  }

  onChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  render() {
    const { firstName, lastName, address, city, state, zipCode, country, email } = this.state;
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Enter your contact info!</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <label>
                <span>First Name</span>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  //ref="firstNameInput"
                  className="form-control"
                  onChange={this.onChange} />
              </label>
              <label>
                <span>Last Name</span>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  //ref="lastNameInput"
                  className="form-control"
                  onChange={this.onChange} />
              </label>
              <label>
                <span>Address</span>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={address}
                  //ref="addressInput"
                  className="form-control"
                  onChange={this.onChange} />
              </label>
              <label>
                <span>City</span>
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={city}
                  //ref="cityInput"
                  className="form-control"
                  onChange={this.onChange} />
              </label>
              <label>
                <span>State</span>
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  value={state}
                  //ref="stateInput"
                  className="form-control"
                  onChange={this.onChange} />
              </label>
              <label>
                <span>Zip Code</span>
                <input
                  type="text"
                  placeholder="Zip Code"
                  name="zipCode"
                  value={zipCode}
                  //ref="zipCodeInput"
                  className="form-control"
                  onChange={this.onChange} />
              </label>
              <label>
                <span>Country</span>
                <input
                  type="text"
                  placeholder="Country"
                  name="country"
                  value={country}
                  //ref="countryInput"
                  className="form-control"
                  onChange={this.onChange} />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  //ref="emailInput"
                  className="form-control"
                  onChange={this.onChange} />
              </label>
                <span className="input-group-btn">
                <button type="submit" className="btn btn-info">
                    Sumbit
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
