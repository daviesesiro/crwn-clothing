import React from 'react'; 
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import Header from './components/header/header.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });      
        });
      }else{
        setCurrentUser(userAuth);
      }                         
      });
  } 

  componentWillUnmount(){
    this.unSubscribeFromAuth();
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
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={this.handleRedirect} />
        </Switch>
        
      </div>
    );
  }  
}
const maptStateToProp = ({user})=>({
  currentUser: user.currentUser
})
const mapDispatchToProp = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(maptStateToProp, mapDispatchToProp)(App);