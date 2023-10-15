import React from "react";

export class WelcomeClass extends React.Component {

  constructor() {
    super();
    this.state = {
      name: 'Venkat'
    }
    this.updatename = this.updatename.bind(this);
  }

  updatename(params) {
    debugger
    this.setState({name: this.state.name + ' updated'});
  }

  render() {
    return (
      <>
        <div>{this.state.name}</div>
        <button onClick={this.updatename}> Update name </button>
        <h1>Hello, {this.props.name}</h1>
      </>)
  }
}