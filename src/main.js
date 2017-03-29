var React = require('react');

$ = jQuery = require('jquery');
var ReactDOM = require('react-dom');
var Routes = require('./components/routes/routes');
/*

 (function (win) {
 class App extends React.Component {
 render()
 {
 var Child;
 switch (this.props.route) {
 case 'about' : Child = About; break;
 case 'authors': Child = Authors; break;
 default: Child = Home;
 }
 return (
 <div>
 <Header />
 <Child />
 </div>
 );
 }
 }
 function render() {
 var route = win.location.hash.substr(1);
 ReactDOM.render(<App route={route}/>, document.getElementById("app"));
 }

 window.addEventListener('hashchange', render);
 render();
 })
 (window);*/

ReactDOM.render(Routes, document.getElementById('app'));
/*

class Routes extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <hr/>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </Router>
    );
  }
}
ReactDOM.render(Routes, document.getElementById('app'));*/
