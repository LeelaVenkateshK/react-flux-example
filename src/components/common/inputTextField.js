/**
 * Created by WS33 on 4/4/2017.
 */
var React = require('react');

class InputTextField extends React.Component {
  render () {
    let wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += ' ' + 'has-error';
    }
    let isValidated = '';
    if (this.props.isFieldRequired) isValidated = 'form-control';
    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.fieldName}>{this.props.placeholder}</label>
        <div className="form-group-sm">
          <input type={this.props.fieldType}
                 name={this.props.fieldName}
                 className={isValidated + 'form-group-sm'}
                 placeholder={this.props.placeholder}
                 value={this.props.value}
                 onChange={this.props.onTextChange.bind(this)}
                 required={this.props.isFieldRequired}/>
          <div className="help-block">{this.props.error}</div>
        </div>
      </div>
    );
  }
}

InputTextField.propTypes = {
  fieldType: React.PropTypes.string.isRequired
  , fieldName: React.PropTypes.string.isRequired
  , placeholder: React.PropTypes.string.isRequired
  , onTextChange: React.PropTypes.func.isRequired
  , isFieldRequired: React.PropTypes.bool.isRequired
  , error: React.PropTypes.object
  , value: React.PropTypes.string
};

module.exports = InputTextField;