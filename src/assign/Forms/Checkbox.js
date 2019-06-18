import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.select = [];
    this.state = {
      selected: props.selected || []
    }
    this.getValue = this.getValue.bind(this);
  }

  shouldComponentUpdate(props, state) {
    return this.state.selected !== state.selected;
  }

  handleChange(e, ind) {
    if (this.select.includes(e.targe.checked))
        this.select=this.select.filter(index => ind !== index);
      else 
        this.select.push(ind);
  }

  getValue() {
   return this.state.selected;
  }

  render() {
    return (
      this.props.values.map((val, ind) => <input
        type="checkbox"
        value={val}
        selected={this.getValue().includes(val)}
        handleChange={e => this.handleChange(e, ind)}/>)
    );
  }
}