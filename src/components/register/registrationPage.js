/**
 * Created by WS33 on 4/8/2017.
 */
let React = require('react');
let {hashHistory, browserHistory, Router, Link} = require('react-router');
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
      value = event.target.value;
    this.state[field] = value;
    return this.setState({author: this.state.author});
  };

  render () {
    return (
      <form className="form-group" onSubmit={this.submitRegistration}>
        <InputTextField fieldType="text" fieldName="firstName" placeholder="First Name"
                        onTextChange={this.onChangeOfField}
                        isFieldRequired={true}/>

        <InputTextField fieldType="text" fieldName="lastName" placeholder="Last Name"
                        onTextChange={this.onChangeOfField}
                        isFieldRequired={true}/>

        <InputTextField fieldType="password" fieldName="password" placeholder="Password"
                        onTextChange={this.onChangeOfField}
                        isFieldRequired={true}/>

        <InputTextField fieldType="text" fieldName="confirmPass" placeholder="Confirm Password"
                        onTextChange={this.onChangeOfField}
                        isFieldRequired={true} disabled={this.state.isPasswordValid}/>

        <InputTextField fieldType="number" fieldName="PhoneNum" placeholder="Phone Number"
                        onTextChange={this.onChangeOfField}
                        isFieldRequired={true}/>

        <InputTextField fieldType="date" fieldName="DOB" placeholder="Date of Birth" onTextChange={this.onChangeOfField}
                        isFieldRequired={true}/>
        <div><input type="checkbox" onChange={this.conditionsAgreed.bind(this)}
                    checked={this.state.termsAndConditionsAgreed}/> I
          agree to the <Link to="T&C" target="_blank">Terms And Conditions</Link>
          <p className="input has-error">{this.state.termsAndConditionsMessage}</p></div>
        <button className="btn btn-primary" type="submit" onClick={this.submitRegistration}>Register</button>
        <button className="btn btn-danger" type="reset" value="Reset">Reset</button>
      </form>
    );
  }

  submitRegistration (event) {
    event.preventDefault();
    if (!this.state.termsAndConditionsAgreed) {
      this.state.termsAndConditionsMessage = 'Please agree to the terms and conditions';
      return;
    }
    this.state.termsAndConditionsMessage = '';
    console.log('User has submitted data');
  }

  conditionsAgreed (event) {
    event.preventDefault();
    this.state.termsAndConditionsAgreed = !this.state.termsAndConditionsAgreed;
    if (!this.state.termsAndConditionsAgreed)
      this.state.termsAndConditionsMessage = 'Please agree to the terms and conditions';
    else
      this.state.termsAndConditionsMessage = '';
    this.setState({
      termsAndConditionsAgreed: this.state.termsAndConditionsAgreed,
      termsAndConditionsMessage: this.state.termsAndConditionsMessage
    });
    console.log('Conditions Agreed : ' + this.state.termsAndConditionsAgreed);
    console.log('message : ' + this.state.termsAndConditionsMessage);
  }
}

module.exports = UserRegistrationPage;