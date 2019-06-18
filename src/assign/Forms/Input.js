import React from 'react';
import { getLastId } from '../apis/apihandler';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this);
    this.getValue = this.getValue.bind(this);
  }

  componentDidMount() {
    if (this.props.name === 'id' && !this.props.value) {
      getLastId().then(res => {
        console.log(res);
        this.setState({ value: res.lastId + 1 });
      })
    }
  }

  shouldComponentUpdate(props, state) {
    return this.state.value !== state.value;
  }
  handleChange(e) {
    if (this.props.handleChange) {
      this.props.handleChange(e);
    } else {
      this.setState({ value: e.target.value });
    }
  }

  getValue() {
    return this.state.value;
  }

  render() {
    return (<input
      type={this.props.type || 'text'}
      value={this.getValue()}
      disabled={this.props.name === 'id'}
      onChange={this.handleChange}
    />)
  }
}
