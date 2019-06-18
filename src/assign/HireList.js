import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../fetch';
import { MyContext } from '../context.js';

function HireList() {
  const [id, setId] = useState(-1);
  const [isLoading, data] = useFetch('./assignment.json');

  return (
    <div>
      <h3 className="title">HireList</h3>
      {
        isLoading && "data is loading"
      }
      {
        !isLoading && <React.Fragment>
          <table>
            <thead>
              <tr>
                <th><input type="checkbox" disabled /></th><th>First Name</th><th>Last Name</th><th>Email</th><th>Phone Number</th>
              </tr>
            </thead>
            {
              data && (<tbody>
                <MyContext.Consumer>
              {(value) => 
                { return data.map((detail, ind) => (
                    <tr key={JSON.stringify(detail)} onClick={() => {console.log('here'); setId(ind); value.setEmployee(data[id])}}>
                      <td><input type="checkbox" value={id === ind}/></td>
                      <td>{detail.firstName}</td>
                      <td>{detail.LastName}</td>
                      <td>{detail.email}</td>
                      <td>{detail.phone}</td>
                    </tr>))
                }
                }
                </MyContext.Consumer>
              
                  </tbody>
                )
            }
          </table>
          <div>
          <Link className="routerLink" to='/new'> Add </Link>
          { id !== -1 && (
            <MyContext.Consumer>
              {(value) => (
                <React.Fragment>
                  <Link className="routerLink" to='/edit' onClick={() => value.setEmployee(data[id]) }> Edit </Link>
                  <Link className="routerLink" to='#' onClick={() => alert('not implemented so far')}> Delete </Link>
                </React.Fragment>
              )}
            </MyContext.Consumer>
          )}
          </div>
        </React.Fragment>
      }
    </div>
  )
}


export default HireList;