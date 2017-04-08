/**
 * Created by WS33 on 4/4/2017.
 */
var React = require('react');

var InputTextField = require('../common/inputTextField');

class AuthorForm extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <form className="form-group" onSubmit={this.props.onClick.bind(this)}>
        <h1>Manage Authors</h1>
        <InputTextField fieldType="text"
                        fieldName="firstName"
                        placeholder="First Name"
                        value={this.props.author.firstName}
                        onTextChange={this.onTextChange.bind(this)}
                        isFieldRequired={true}/>

        <InputTextField fieldType="text"
                        fieldName="lastName"
                        placeholder="Last Name"
                        value={this.props.author.lastName}
                        onTextChange={this.props.onTextChange.bind(this)}
                        isFieldRequired={true}/>

        <input type="submit" value="save"
               onClick={this.props.onClick.bind(this)}
               className="btn btn-default"/>

      </form>
    );
  }

  onTextChange (event) {
    this.props.onTextChange(event);
  }
}

AuthorForm.propTypes = {
  onTextChange: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired
};
module.exports = AuthorForm;