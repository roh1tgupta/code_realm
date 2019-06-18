import React from 'react';
import * as config from './config';
import Template from './DetailPage.jsx';
import { addUser, updateInfo } from './apis/apihandler';

export default class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    [...config.DETAILS.Left, ...config.DETAILS.Right].map(ele => {
      this[ele.key] = null;
    });
    console.log('propssss',props);
  }

  handleSubmit() {
    const obj = {};
    [...config.DETAILS.Left, ...config.DETAILS.Right].map(ele => {
      let value = this[ele.key].getValue();
      if (value) {
        obj[ele.key] = this[ele.key].getValue();
      }
    });
    if (this.props.add) {
      addUser(obj).then(() => alert('added')).catch(err => console.log(err));
    } else {
      updateInfo(obj).then(() => alert('updated')).catch(err => console.log(err));
    }
    console.log(obj);
  }

  render() {
    return Template.call(this);
  }
}