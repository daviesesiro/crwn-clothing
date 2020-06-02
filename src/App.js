import React from 'react'; 
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';

import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
 
  componentDidMount(){
    const {checkUserSession} = this.props;
    
    checkUserSession();
  }
  handleRedirect = ()=>(
    this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)
  );

  render(){

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={this.handleRedirect} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
        
      </div>
    );
  }  
}

const maptStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
})


export default connect(maptStateToProps, mapDispatchToProps)(App);