import React from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../context.js';

function HireList() {
  return (
    <div>
      <h3 className="title">HireList</h3>
      {
        this.state.isLoading && "data is loading"
      }
      {
        !this.state.isLoading && <React.Fragment>
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" disabled /></th><th>First Name</th><th>Last Name</th><th>Email</th><th>Phone Number</th>
              </tr>
            </thead>
            {
              this.state.data && (<tbody>
              { this.state.data.map((detail, ind) => (
                    <tr key={JSON.stringify(detail)} >
                      <td><input type="checkbox" onChange={(e) => this.handleCheckBox(e, ind)}/></td>
                      <td>{detail.firstName}</td>
                      <td>{detail.LastName}</td>
                      <td>{detail.email}</td>
                      <td>{detail.phone}</td>
                    </tr>))
                    }
              
                  </tbody>
                )
            }
          </table>
          <div>
          <Link className="routerLink" to='/new'> Add </Link>
          
            <MyContext.Consumer>
              {(value) => (
                <React.Fragment>
                  <button className="routerLink" disabled={!this.state.enableEditButton} onClick={(e) => this.setEmployee(value.setEmployee,e) }> Edit </button>
                  <button className="routerLink" onClick={() => alert('not implemented so far')}> Delete </button>
                </React.Fragment>
              )}
            </MyContext.Consumer>
          </div>
        </React.Fragment>
      }
    </div>
  )
}


export default HireList;