import { Component } from 'react';
import Template from './HiredDetails.jsx';

export default class HiredDetails extends Component {
  constructor(props){
    super(props);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.setEmployee = this.setEmployee.bind(this);
    this.selectedCheckbox = [];
    this.state = {
      data: null,
      isLoading: true,
      enableEditButton: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/globantAssign/fetchData').then(resp => {
      if (resp.status !== 200) {
        console.log('due to some issue data is not fetched');
        return;
      }
      console.log(resp);
      resp.json().then((resp) => this.setState({ data: resp, isLoading: false }));
      
    });
  }

  setEmployee(func) {
    if (func) {
      this.props.history.push('/edit');
      func(this.state.data[this.selectedCheckbox[0]]);
    }
  }

  handleCheckBox(e, ind) {
    if (e.target.checked) {
      this.selectedCheckbox.push(ind);
    } else {
      this.selectedCheckbox = this.selectedCheckbox.filter(ele => ele !== ind);
    }
    if (this.selectedCheckbox.length === 1) {
      this.setState({ enableEditButton: true })
    } else if(this.state.enableEditButton) {
      this.setState({ enableEditButton: false });
    }
  }

  render() {
    return Template.call(this);
  }
}