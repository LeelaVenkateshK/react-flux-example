/**
 * Created by WS33 on 4/8/2017.
 */
let React = require('react');
let {Link} = require('react-router');
let InputTextField = require('../common/inputTextField');

class UserRegistrationPage extends React.Component {
  constructor () {
    super();
    this.state = {
      fistName: '',
      lastName: '',
      password: '',
      confirmPass: '',
      PhoneNum: '',
      DOB: '',
      phoneNo: '',
      isPasswordValid: false,
      termsAndConditionsAgreed: false,
      termsAndConditionsMessage: ''
    };
  }

  onChangeOfField (event) {
    let field = event.target.name,
      value = event.target.value, newData = this.state;
    newData[field] = value;
    return this.setState({author: newData});
  }

  render () {

    let confirmPasswordField;
    if (this.state.isPasswordValid) {
      confirmPasswordField =
        <InputTextField fieldType="password" fieldName="confirmPass"
                        placeholder="Confirm Password"
                        onTextChange={this.onChangeOfField.bind(this)}
                        isFieldRequired={true} value={this.state.confirmPass}/>;
    } else {
      confirmPasswordField =
        <InputTextField fieldType="password" fieldName="confirmPass"
                        placeholder="Confirm Password"
                        onTextChange={this.onChangeOfField.bind(this)}
                        isFieldRequired={true} disabled
                        value={this.state.confirmPass}/>;
    }
    return (
      <form className="form-group" onSubmit={this.submitRegistration}>
        <InputTextField fieldType="text" fieldName="firstName"
                        placeholder="First Name"
                        onTextChange={this.onChangeOfField.bind(this)}
                        isFieldRequired={true}
                        value={this.state.firstName}/>

        <InputTextField fieldType="text" fieldName="lastName"
                        placeholder="Last Name"
                        onTextChange={this.onChangeOfField.bind(this)}
                        isFieldRequired={true}
                        value={this.state.lastName}/>

        <InputTextField fieldType="password" fieldName="password"
                        placeholder="Password"
                        onTextChange={this.onChangeOfField.bind(this)}
                        isFieldRequired={true}
                        value={this.state.password}/>

        {confirmPasswordField}

        <InputTextField fieldType="date" fieldName="DOB"
                        placeholder="Date of Birth"
                        onTextChange={this.onChangeOfField.bind(this)}
                        isFieldRequired={true}
                        value={this.state.DOB}/>

        <InputTextField fieldType="number" fieldName="PhoneNum"
                        placeholder="Phone Number"
                        onTextChange={this.onChangeOfField.bind(this)}
                        isFieldRequired={true}
                        value={this.state.phoneNo}/>


        <div><input type="checkbox" onChange={this.conditionsAgreed.bind(this)}
                    checked={this.state.termsAndConditionsAgreed}/> I
          agree to the <Link to="T&C" target="_blank">Terms And
            Conditions</Link>
          <p
            className="input has-error">{this.state.termsAndConditionsMessage}</p>
        </div>
        <button className="btn btn-primary" type="submit"
                onClick={this.submitRegistration.bind(this)}>Register
        </button>
        <button className="btn btn-danger" type="reset" value="Reset">Reset
        </button>
      </form>
    );
  }

  submitRegistration (event) {
    event.preventDefault();
    if (!this.state.termsAndConditionsAgreed) {
      this.setState({termsAndConditionsMessage: 'Please agree to the terms and conditions'});
      return;
    }
    this.setState({termsAndConditionsMessage: ''});
  }

  conditionsAgreed (event) {
    event.preventDefault();
    let termsAndConditions = !this.state.termsAndConditionsAgreed, message = '';
    if (!this.state.termsAndConditionsAgreed)
      message = 'Please agree to the terms and conditions';
    this.setState({
      termsAndConditionsAgreed: termsAndConditions,
      termsAndConditionsMessage: message
    });
  }
}

module.exports = UserRegistrationPage;