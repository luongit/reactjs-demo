import React from 'react';
import Account from './components/Account'
import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleCallBack = this.handleCallBack.bind(this);
  }

  handleCallBack(account) {
    this.setState({ name: account })
  }

  render() {
    return (
      <div className="App">
        <h1>App Component: {this.state.name}</h1>
        <Account name={this.state.name} callBackFromAccount={this.handleCallBack} />
      </div>
    );
  }
}
export default App;
