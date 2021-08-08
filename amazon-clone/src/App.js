import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe('pk_test_51JKfYGSDX08D6tRGvoC6dSEYTuJR8tHVDN9tdQwjQV72xKwh1Vv5uyyeAmPeZwp4Po6GM5RLk215XTH3ccJ5H16a00LWJZjowP');
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {   //this will only run when app components loads once

    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>>', authUser);

      if (authUser) {
        //this means the user just logged in or was logged in (if we refresh the page it will log u back in)
        dispatch({
          type: 'SET_USER',
          user: authUser, //set the user who logged in
        });

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

  }, []);

  return (

    <Router>
      <div className="app">

        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    // {/* Header*/}
    // {/* Home */}

  );
}

export default App;
