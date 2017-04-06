/**
 * Created by WS33 on 4/4/2017.
 */
var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/AuthorApi')
var Toastr  = require('toastr');

class ManageAuthor extends React.Component {
  constructor () {
    super();
    this.state = {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      }
    };
  }
  shouldComponentUpdate(newProps,newState){
    console.log('In ManageAuthorPage shouldComponentUpdate');
    if(this.state!== newState){
      console.log('should update');
      return true;
    }
    return false;
  }
  setAuthorState (event) {
    let field = event.target.name,
      value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  }

  render () {
    return (
      <AuthorForm author={this.state.author}
                  onTextChange={this.setAuthorState.bind(this)}
                  onClick={this.saveAuthor.bind(this)}/>
    );
  }
  saveAuthor(event){
    event.preventDefault();
    console.log(this.state.author);
    AuthorApi.saveAuthor(this.state.author);
    Toastr.success('User Created');
  }
}

module.exports = ManageAuthor;