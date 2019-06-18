import React from 'react';
import * as config from './config';
import Input from './Forms/Input';
import Select from './Forms/Select';

export default function() {
    console.log('prps', this.props);
    return(
      <div className="detailPage">
        <div className="Left">
          {
            config.DETAILS.Left.map(detail => (
              <div className="row">
                <div className="label">{detail.name}</div>
                <Input
                  className="value_box"
                  type={detail.type}
                  name={detail.key}
                  ref={(ref) => { this[detail.key] = ref }}
                  value={this.props[`${detail.key}`]}
                  placeholder={detail.placeholder || null}
                />
              </div>
            ))
          }
        </div>
        <div className="Right">
          {
            config.DETAILS.Right.map(detail => (
              <div className="row" key={JSON.stringify(detail)}>
                <div className="label">{detail.name}</div>
                { detail.type === 'select'
                  ? (
                    <Select selected={this.props[`${detail.key}`]} ref={(ref) => { this[detail.key] = ref }} values={detail.options} />
                    
                  ) : <Input
                      className="value_box" 
                      type={detail.type}
                      rows={detail.type === 'textarea' ? '4' : null}
                      value={this.props[`${detail.key}`]}
                      ref={(ref) => { this[detail.key] = ref }}
                      placeholder={detail.placeholder || null}
                    />
                }
              </div>
            ))
          }
        </div>
        <div>
          <button onClick={this.handleSubmit}> Save </button>
          <button onClick={() => {console.log('back clicked', this.props.history);if(this.props.history)this.props.history.goBack();}}> Back </button>
        </div>
      </div>
    )
  }