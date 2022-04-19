import './Styles/App.css';
import Header from './Components/Header';
import Home from './Sites/Home';
import Checkout from './Sites/Checkout'
import NotfoundPage from './Sites/NotfoundPage'
import Login from './Sites/Login'
import Payment from './Components/Payment'
import Orders from './Sites/Orders'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect } from 'react';
import {auth} from "./firebase";
import {useStateValue} from "./Components/StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KmqNJKqoei519IR0q9eMPJGjj1lnCJinuNFsjFfs4UW7CTFbHYo6fM9b7ZyPcjQhEPJjb0PJfvKSyjn9gg1n3iI00QoThUIl3"
);


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])
  return (
  
    <Router>
      <div className="app"> 
          <Routes>
            <Route path="/login"
              element={<Login/>}
            />
            <Route path="/checkout"
                element={
                  <> 
                    <Header />                   
                    <Checkout/>  
                  </>             
                }/>
            <Route path="/payment"
                element={
                  <> 
                    <Header />
                    <Elements stripe={promise}>
                      <Payment />
                    </Elements>
                  </>             
                }/>
            <Route path="/orders"
                element={
                    <>
                      <Header />
                      <Orders />
                    </>
                }/>
            <Route path="/" 
                element={
                  <>
                    <Header />  
                    <Home/> 
                  </>           
                }/>
            <Route path='*' element={
                <NotfoundPage/>
              }/>
          </Routes>
       </div>
     </Router>

 
  );
}

export default App;
