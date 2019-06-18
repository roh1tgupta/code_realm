import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || null
    }
    this.getValue = this.getValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {
    this.setState({ selected: val});
  }

  getValue() {
    return this.state.selected;
  }

  render() {
    return (
      <select placeholder="select">
        { this.state.selected ? <option disabled>{this.props.placeholder || 'select'}</option> : <option selected>{this.props.placeholder || 'select'}</option> }
        {
          this.props.values.map((val, ind) => (
            <option
              value={ind}
              selected={val === this.getValue()}
              onClick={() => this.handleChange(val)}
            >
              {val.name || val}
            </option>
          ))
        }
      </select>
    );
  }
}