import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HiredDetails from './assign/main/HiredDetails';
import NewDetailPage from './assign/NewDetailPage';
import EditDetailPage from './assign/EditDetailPage';
import { Empl, MyContext } from './context';

function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
      <Switch>
            <Route exact path='/edit' component={EditDetailPage} />
            <Route exact path='/new' component={NewDetailPage} />
            <Route exact path='/hirelist' component={HiredDetails} />
            <Redirect exact from='/' to='/hirelist'/>
      </Switch>
      </React.Fragment>
    </BrowserRouter>
  )
};

class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.setEmployee = (emp) => {
      console.log(emp);
      this.setState({employee: emp})};
    this.state = {
      employee: Empl,
      setEmployee: this.setEmployee
    };
  }
  render() {
    return (
      <MyContext.Provider value={this.state} >
        <App />
      </MyContext.Provider>
    )
  }
}

export default MyProvider;