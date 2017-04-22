import React from 'react';

class Workers extends React.Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return <div className="workers">{this.state.someKey}</div>;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Workers;