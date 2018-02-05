import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      middleI: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      country: '',
      email: '',
      phoneNumber: ''
    };

    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({firstName: event.target.firstName});
  // }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addInfo(this.refs.firstNameInput.value, this.props._id);
    this.refs.firstNameInput.value = '';
  }

  render() {
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
                  ref="firstNameInput"
                  className="form-control" />
              </label>
              <label>
                <span>Last Name</span>
                <input
                  type="text"
                  placeholder="Last Name"
                  ref="lastNameInput"
                  className="form-control" />
              </label>
              <label>
                <span>Address</span>
                <input
                  type="text"
                  placeholder="Address"
                  ref="addressInput"
                  className="form-control" />
              </label>
              <label>
                <span>City</span>
                <input
                  type="text"
                  placeholder="City"
                  ref="cityInput"
                  className="form-control" />
              </label>
              <label>
                <span>State</span>
                <input
                  type="text"
                  placeholder="State"
                  ref="stateInput"
                  className="form-control" />
              </label>
              <label>
                <span>Zip Code</span>
                <input
                  type="text"
                  placeholder="Zip Code"
                  ref="zipCodeInput"
                  className="form-control" />
              </label>
              <label>
                <span>Country</span>
                <input
                  type="text"
                  placeholder="Country"
                  ref="countryInput"
                  className="form-control" />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="text"
                  placeholder="Email"
                  ref="emailInput"
                  className="form-control" />
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
