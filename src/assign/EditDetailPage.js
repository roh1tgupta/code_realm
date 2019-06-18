import React from 'react';
import DetailsPage from './DetailsPage';
import { MyContext } from '../context';

export default function () {

  function logg(value) {
    console.log('emp',value.employee);
  }

  return (
    <div>
       <MyContext.Consumer>
              {(value) => (
                <div> 
                  {logg(value)}
                  <DetailsPage {...value.employee} />
                </div>
                
              )}
            </MyContext.Consumer>
      
    </div>
  );
}